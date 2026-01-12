import React, { useEffect, useState } from "react";

function waitForMantineCore(timeout = 5000, interval = 100): Promise<any> {
  return new Promise((resolve, reject) => {
    const start = Date.now();

    const check = () => {
      if (typeof window !== "undefined" && (window as any).MantineCore) {
        resolve((window as any).MantineCore);
      } else if (Date.now() - start > timeout) {
        reject(new Error("MantineCore not loaded in time"));
      } else {
        setTimeout(check, interval);
      }
    };

    check();
  });
}

export function withMantine<P>(
  Component: React.ComponentType<P & { mantine: any }>,
  options?: {
    maxRetries?: number;
    retryDelay?: number;
  }
) {
  const { maxRetries = 10, retryDelay = 500 } = options ?? {};

  return function MantineWrapper(props: P) {
    const [mantine, setMantine] = useState<any>(null);
    const [retries, setRetries] = useState(0);

    useEffect(() => {
      let cancelled = false;
      let timeout: NodeJS.Timeout;

      const load = async () => {
        try {
          const mod = await waitForMantineCore();
          if (!cancelled) setMantine(mod);
        } catch {
          if (!cancelled && retries < maxRetries) {
            timeout = setTimeout(
              () => setRetries((r) => r + 1),
              retryDelay
            );
          }
        }
      };

      load();

      return () => {
        cancelled = true;
        if (timeout) clearTimeout(timeout);
      };
    }, [retries]);

    if (!mantine?.useCombobox) {
      return null;
    }

    return <Component {...props} mantine={mantine} />;
  };
}

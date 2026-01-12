// import React from 'react';
// import {DashComponentProps} from '../props';
//
// type Props = {
//     // Insert props
// } & DashComponentProps;
//
// /**
//  * Component description
//  */
// const ManySelect = (props: Props) => {
//     const { id } = props;
//     return (
//         <div id={id}>
//             {/* Insert code */}
//         </div>
//     )
// }
//
// export default ManySelect;

//
// import React, { useEffect, useState } from "react";
// import { DashComponentProps } from "../props";
//
// function waitForMantineCore(timeout = 5000, interval = 100): Promise<any> {
//   return new Promise((resolve, reject) => {
//     const start = Date.now();
//     const check = () => {
//       if (typeof window !== "undefined" && (window as any).MantineCore) {
//         resolve((window as any).MantineCore);
//       } else if (Date.now() - start > timeout) {
//         reject(new Error("MantineCore not loaded in time"));
//       } else {
//         setTimeout(check, interval);
//       }
//     };
//     check();
//   });
// }
//
// const MAX_DISPLAYED_VALUES = 2;
// const groceries = [
//   "🍎 Apples",
//   "🍌 Bananas",
//   "🥦 Broccoli",
//   "🥕 Carrots",
//   "🍫 Chocolate",
// ];
//
// type Props = {} & DashComponentProps;
//
// const ManySelect = ({
//   id,
//   mantine,
// }: Props & { mantine: any }) => {
//   const {
//     CheckIcon,
//     Combobox,
//     Group,
//     Input,
//     Pill,
//     PillsInput,
//     useCombobox,
//     Button,
//   } = mantine;
//   const { useDisclosure } = (window as any).MantineHooks;
//   console.log(useDisclosure)
//   const [dropdownOpened, { toggle }] = useDisclosure();
//   const [value, setValue] = useState<string[]>([]);
//
//   const combobox = useCombobox({
//     onDropdownClose: () => combobox.resetSelectedOption(),
//     onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
//   });
//
//   const handleValueSelect = (val: string) =>
//     setValue((current) =>
//       current.includes(val)
//         ? current.filter((v) => v !== val)
//         : [...current, val],
//     );
//
//   const handleValueRemove = (val: string) =>
//     setValue((current) => current.filter((v) => v !== val));
//
//   const values = value
//     .slice(
//       0,
//       MAX_DISPLAYED_VALUES === value.length
//         ? MAX_DISPLAYED_VALUES
//         : MAX_DISPLAYED_VALUES - 1,
//     )
//     .map((item) => (
//       <Pill
//         key={item}
//         withRemoveButton
//         onRemove={() => handleValueRemove(item)}
//       >
//         {item}
//       </Pill>
//     ));
//
//   const options = groceries.map((item) => (
//     <Combobox.Option value={item} key={item} active={value.includes(item)}>
//       <Group gap="sm">
//         {value.includes(item) ? <CheckIcon size={12} /> : null}
//         <span>{item}</span>
//       </Group>
//     </Combobox.Option>
//   ));
//
//   return (
//     <div id={id}>
//       <Button onClick={toggle} mb="md">
//         Toggle dropdown
//       </Button>
//       <Combobox
//         store={combobox}
//         onOptionSubmit={handleValueSelect}
//         withinPortal={false}
//         opened={dropdownOpened}
//       >
//         <Combobox.DropdownTarget>
//           <PillsInput pointer onClick={() => combobox.toggleDropdown()}>
//             <Pill.Group>
//               {value.length > 0 ? (
//                 <>
//                   {values}
//                   {value.length > MAX_DISPLAYED_VALUES && (
//                     <Pill>
//                       +{value.length - (MAX_DISPLAYED_VALUES - 1)} more
//                     </Pill>
//                   )}
//                 </>
//               ) : (
//                 <Input.Placeholder>Pick one or more values</Input.Placeholder>
//               )}
//
//               <Combobox.EventsTarget>
//                 <PillsInput.Field
//                   type="hidden"
//                   onBlur={() => combobox.closeDropdown()}
//                   onKeyDown={(event) => {
//                     if (event.key === "Backspace") {
//                       event.preventDefault();
//                       handleValueRemove(value[value.length - 1]);
//                     }
//                   }}
//                 />
//               </Combobox.EventsTarget>
//             </Pill.Group>
//           </PillsInput>
//         </Combobox.DropdownTarget>
//
//         <Combobox.Dropdown>
//           <Combobox.Options>{options}</Combobox.Options>
//         </Combobox.Dropdown>
//       </Combobox>
//     </div>
//   );
// };
//
//
// export default function ManySelectLoader(props: Props) {
//   const [mantine, setMantine] = useState<any>(null);
//   const [retries, setRetries] = useState(0);
//
//   useEffect(() => {
//     let cancelled = false;
//     let timeout: NodeJS.Timeout;
//
//     const loadMantine = async () => {
//       try {
//         const mod = await waitForMantineCore();
//         if (!cancelled) setMantine(mod);
//       } catch (e) {
//         if (!cancelled && retries < 10) {
//           timeout = setTimeout(() => setRetries((r) => r + 1), 500);
//         }
//       }
//     };
//
//     loadMantine();
//
//     return () => {
//       cancelled = true;
//       if (timeout) clearTimeout(timeout);
//     };
//   }, [retries]);
//
//   if (!mantine?.useCombobox && retries >= 3) {
//     return null;
//   }
//
//   if (!mantine?.useCombobox) {
//     return null;
//   }
//
//   return <ManySelect {...props} mantine={mantine} />;
// }
//

//
//
// import React, { useEffect, useState } from "react";
// import { DashComponentProps } from "../props";
//
// function waitForMantineCore(timeout = 5000, interval = 100): Promise<any> {
//   return new Promise((resolve, reject) => {
//     const start = Date.now();
//     const check = () => {
//       if (typeof window !== "undefined" && (window as any).MantineCore) {
//         resolve((window as any).MantineCore);
//       } else if (Date.now() - start > timeout) {
//         reject(new Error("MantineCore not loaded in time"));
//       } else {
//         setTimeout(check, interval);
//       }
//     };
//     check();
//   });
// }
//
// const MAX_DISPLAYED_VALUES = 2;
// const groceries = [
//   "🍎 Apples",
//   "🍌 Bananas",
//   "🥦 Broccoli",
//   "🥕 Carrots",
//   "🍫 Chocolate",
// ];
//
// type Props = {} & DashComponentProps;
//
// const ManySelect = ({
//   id,
//   mantine,
// }: Props & { mantine: any }) => {
//   const {
//     CheckIcon,
//     Combobox,
//     Group,
//     Input,
//     Pill,
//     PillsInput,
//     useCombobox,
//   } = mantine;
//
//   const [value, setValue] = useState<string[]>([]);
//
//   const combobox = useCombobox({
//     onDropdownClose: () => combobox.resetSelectedOption(),
//     onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
//   });
//
//   const handleValueSelect = (val: string) =>
//     setValue((current) =>
//       current.includes(val)
//         ? current.filter((v) => v !== val)
//         : [...current, val],
//     );
//
//   const handleValueRemove = (val: string) =>
//     setValue((current) => current.filter((v) => v !== val));
//
//   const values = value
//     .slice(
//       0,
//       MAX_DISPLAYED_VALUES === value.length
//         ? MAX_DISPLAYED_VALUES
//         : MAX_DISPLAYED_VALUES - 1,
//     )
//     .map((item) => (
//       <Pill
//         key={item}
//         withRemoveButton
//         onRemove={() => handleValueRemove(item)}
//       >
//         {item}
//       </Pill>
//     ));
//
//   const options = groceries.map((item) => (
//     <Combobox.Option value={item} key={item} active={value.includes(item)}>
//       <Group gap="sm">
//         {value.includes(item) ? <CheckIcon size={12} /> : null}
//         <span>{item}</span>
//       </Group>
//     </Combobox.Option>
//   ));
//
//   return (
//     <div id={id}>
//       <Combobox
//         store={combobox}
//         onOptionSubmit={handleValueSelect}
//         withinPortal={false}
//       >
//         <Combobox.DropdownTarget>
//           <PillsInput pointer onClick={() => combobox.toggleDropdown()}>
//             <Pill.Group>
//               {value.length > 0 ? (
//                 <>
//                   {values}
//                   {value.length > MAX_DISPLAYED_VALUES && (
//                     <Pill>
//                       +{value.length - (MAX_DISPLAYED_VALUES - 1)} more
//                     </Pill>
//                   )}
//                 </>
//               ) : (
//                 <Input.Placeholder>Pick one or more values</Input.Placeholder>
//               )}
//
//               <Combobox.EventsTarget>
//                 <PillsInput.Field
//                   type="hidden"
//                   onBlur={() => combobox.closeDropdown()}
//                   onKeyDown={(event) => {
//                     if (event.key === "Backspace") {
//                       event.preventDefault();
//                       handleValueRemove(value[value.length - 1]);
//                     }
//                   }}
//                 />
//               </Combobox.EventsTarget>
//             </Pill.Group>
//           </PillsInput>
//         </Combobox.DropdownTarget>
//
//         <Combobox.Dropdown>
//           <Combobox.Options>{options}</Combobox.Options>
//         </Combobox.Dropdown>
//       </Combobox>
//     </div>
//   );
// };
//
// export default function ManySelectLoader(props: Props) {
//   const [mantine, setMantine] = useState<any>(null);
//   const [retries, setRetries] = useState(0);
//
//   useEffect(() => {
//     let cancelled = false;
//     let timeout: NodeJS.Timeout;
//
//     const loadMantine = async () => {
//       try {
//         const mod = await waitForMantineCore();
//         if (!cancelled) setMantine(mod);
//       } catch (e) {
//         if (!cancelled && retries < 10) {
//           timeout = setTimeout(() => setRetries((r) => r + 1), 500);
//         }
//       }
//     };
//
//     loadMantine();
//
//     return () => {
//       cancelled = true;
//       if (timeout) clearTimeout(timeout);
//     };
//   }, [retries]);
//
//   if (!mantine?.useCombobox && retries >= 3) {
//     return null;
//   }
//
//   if (!mantine?.useCombobox) {
//     return null;
//   }
//
//   return <ManySelect {...props} mantine={mantine} />;
// }
//
import { withMantine } from "../utils/withMantine";
import React, { useState } from "react";
import { DashComponentProps } from "../props";

const MAX_DISPLAYED_VALUES = 2;
const groceries = [
  "🍎 Apples",
  "🍌 Bananas",
  "🥦 Broccoli",
  "🥕 Carrots",
  "🍫 Chocolate",
];

type Props = DashComponentProps & {
  mantine: any;
};

export function ManySelect(props: Props) {
  const { id, mantine } = props;

  const {
    CheckIcon,
    Combobox,
    Group,
    Input,
    Pill,
    PillsInput,
    useCombobox,
  } = mantine;

  const [value, setValue] = useState<string[]>([]);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex("active"),
  });

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value
    .slice(
      0,
      MAX_DISPLAYED_VALUES === value.length
        ? MAX_DISPLAYED_VALUES
        : MAX_DISPLAYED_VALUES - 1
    )
    .map((item) => (
      <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
        {item}
      </Pill>
    ));

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item} active={value.includes(item)}>
      <Group gap="sm">
        {value.includes(item) ? <CheckIcon size={12} /> : null}
        <span>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <div id={id}>
      <Combobox
        store={combobox}
        onOptionSubmit={handleValueSelect}
        withinPortal={false}
      >
        <Combobox.DropdownTarget>
          <PillsInput pointer onClick={() => combobox.toggleDropdown()}>
            <Pill.Group>
              {value.length > 0 ? (
                <>
                  {values}
                  {value.length > MAX_DISPLAYED_VALUES && (
                    <Pill>
                      +{value.length - (MAX_DISPLAYED_VALUES - 1)} more
                    </Pill>
                  )}
                </>
              ) : (
                <Input.Placeholder>
                  Pick one or more values
                </Input.Placeholder>
              )}

              <Combobox.EventsTarget>
                <PillsInput.Field
                  type="hidden"
                  onBlur={() => combobox.closeDropdown()}
                  onKeyDown={(event) => {
                    if (event.key === "Backspace") {
                      event.preventDefault();
                      handleValueRemove(value[value.length - 1]);
                    }
                  }}
                />
              </Combobox.EventsTarget>
            </Pill.Group>
          </PillsInput>
        </Combobox.DropdownTarget>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </div>
  );
}

export default withMantine(ManySelect);
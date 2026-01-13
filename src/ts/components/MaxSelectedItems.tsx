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


const ITEMS_LIMIT = 2;

type Props = DashComponentProps & {
  mantine: any;
};

export function MaxSelectedItems(props: Props) {
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

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = groceries.map((item) => (
    <Combobox.Option
      value={item}
      key={item}
      active={value.includes(item)}
      disabled={value.length >= ITEMS_LIMIT && !value.includes(item)}
    >
      <Group gap="sm">
        {value.includes(item) ? <CheckIcon size={12} /> : null}
        <span>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <PillsInput pointer onClick={() => combobox.toggleDropdown()}>
          <Pill.Group>
            {values.length > 0 ? (
              values
            ) : (
              <Input.Placeholder>Pick one or more values</Input.Placeholder>
            )}

            <Combobox.EventsTarget>
              <PillsInput.Field
                type="hidden"
                onBlur={() => combobox.closeDropdown()}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && value.length > 0) {
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
        <Combobox.Header>
          You can select up to 2 items, currently selected: {value.length}
        </Combobox.Header>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}

export default withMantine(MaxSelectedItems);
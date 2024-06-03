import { FC, useRef, useState } from "react";
import { OptionType } from "../../models/option";
import style from "./Dropdown2.module.scss";
import ChevronUpIcon from "../Icons/ChevronUpIcon/ChevronUpIcon";
import ChevronDownIcon from "../Icons/ChevronDownIcon/ChevronDownIcon";
import useOutsideClick from "../../hooks/useOutsideClick";
// import { PlantType } from "../../models/plant";
// import { plants } from "../../data/plants";

type DropdownProps = {
  label: string;
  name: string;
  value: string;
  options: OptionType[];
  onChange: (name: string, value: string) => void;
};

// const getUniqueOptions = (arr: PlantType[], key: keyof PlantType) => {
//   return Array.from(new Set(arr.map((item) => String(item[key]))));
// };

// const getUniqueOptions = (attribute: keyof PlantType) => {
//   return Array.from(new Set(plants.map((plant) => plant[attribute]))).map(
//     (value) => ({
//       value: value as string,
//       label: value as string,
//     })
//   );
// };

const Dropdown: FC<DropdownProps> = ({
  label,
  name,
  onChange,
  options,
  value,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (optionValue: string) => {
    onChange(name, optionValue);
    setIsOpen(false);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => {
    if (isOpen) setIsOpen(false);
  });

  return (
    <div className={style["dropdown"]} ref={dropdownRef}>
      <label className={style["dropdown__label"]}>
        {label}
        <div
          className={style["dropdown__header"]}
          onClick={() => setIsOpen(!isOpen)}
        >
          {value
            ? options.find((option) => option.value === value)?.label
            : `Select ${label}`}
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
        {isOpen && (
          <div className={style["dropdown__list"]}>
            {options.map((option) => (
              <div
                key={option.value}
                className={style["dropdown__option"]}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </label>
    </div>
  );
};

export default Dropdown;

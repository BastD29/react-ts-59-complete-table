import { useMemo } from "react";
import { plants } from "../../data/plants";
import { FilterType } from "../../models/filter";
import { PlantType } from "../../models/plant";
import style from "./FilterButtons.module.scss";

type FilterButtonProps = {
  filterKey: keyof FilterType;
  currentFilter: string[];
  onFilterChange: (filterKey: keyof PlantType, filterValue: string) => void;
};

const getOptions = (key: keyof PlantType) => {
  const uniqueOptions = new Set(plants.map((plant) => plant[key]));
  return Array.from(uniqueOptions);
};

const FilterButtons: React.FC<FilterButtonProps> = ({
  currentFilter,
  filterKey,
  onFilterChange,
}) => {
  const options = useMemo(() => getOptions(filterKey as keyof PlantType), []);
  console.log("options:", options);

  return (
    <div className={style["filter-btns"]}>
      <h3>
        {/* {filterKey.toString().charAt(0).toUpperCase() +
          filterKey.toString().slice(1)} */}
        {filterKey}
      </h3>
      {options.map((option) => (
        <button
          className={`${
            currentFilter.includes(option as string)
              ? style["filter-btns__btn--active"]
              : style["filter-btns__btn"]
          }`}
          key={option}
          onClick={() =>
            onFilterChange(filterKey as keyof PlantType, option as string)
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;

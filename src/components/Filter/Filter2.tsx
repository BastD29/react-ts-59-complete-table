import { useFilter } from "../../hooks/useFilter2";
import FilterButtons from "../FilterButtons/FilterButtons2";
import style from "./Filter.module.scss";

const Filter: React.FC = () => {
  const { filters, handleFilter } = useFilter();

  return (
    <div className={style["filter"]}>
      <FilterButtons
        filterKey="cycle"
        currentFilter={filters.cycle || []}
        onFilterChange={handleFilter}
      />
      <FilterButtons
        filterKey="sunlight"
        currentFilter={filters.sunlight || []}
        onFilterChange={handleFilter}
      />
      <FilterButtons
        filterKey="watering"
        currentFilter={filters.watering || []}
        onFilterChange={handleFilter}
      />
    </div>
  );
};

export default Filter;

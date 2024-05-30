import { useFilterContext } from "./contexts/useFilterContext";
import { CLEAR_FILTER, SET_FILTER } from "../constants/actions";
import { PlantType } from "../models/plant";

const useFilter = () => {
  const { dispatch, state: filters } = useFilterContext();

  const handleFilter = (
    filterKey: keyof PlantType | "search",
    filterValue: string
  ) => {
    dispatch({ type: SET_FILTER, payload: { filterKey, filterValue } });
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return { handleFilter, clearFilter, filters };
};

export { useFilter };

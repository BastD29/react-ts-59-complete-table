import { CLEAR_FILTER, SET_FILTER } from "../constants/actions";
import { FilterAction } from "../models/action";
import { FilterType } from "../models/filter2";

const initialFilterState: FilterType = {};

const filterReducer = (state: FilterType, action: FilterAction): FilterType => {
  switch (action.type) {
    case SET_FILTER:
      const { filterKey, filterValue } = action.payload;
      if (filterKey === "search") {
        return {
          ...state,
          search: [filterValue],
        };
      }

      const currentFilters = state[filterKey] || [];
      const updatedFilters = currentFilters.includes(filterValue)
        ? currentFilters.filter((value) => value !== filterValue)
        : [...currentFilters, filterValue];

      return {
        ...state,
        [filterKey]: updatedFilters,
      };
    case CLEAR_FILTER:
      return initialFilterState;
    default:
      return state;
  }
};

export { filterReducer, initialFilterState };

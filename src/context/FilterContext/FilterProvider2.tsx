import { ReactNode, useReducer } from "react";
import { FilterContext } from "./FilterContext2";
import {
  filterReducer,
  initialFilterState,
} from "../../reducers/filterReducer2";

type FilterProviderProps = {
  children: ReactNode;
};

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialFilterState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

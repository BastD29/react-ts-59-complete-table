import { Dispatch, createContext } from "react";
import { FilterType } from "../../models/filter2";
import { FilterAction } from "../../models/action";

type FilterContextType = {
  state: FilterType;
  dispatch: Dispatch<FilterAction>;
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

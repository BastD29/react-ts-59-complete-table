import { Dispatch, createContext } from "react";
import { RowsAction } from "../../models/action";
import { PlantType } from "../../models/plant";

type RowsContextType = {
  state: PlantType[];
  dispatch: Dispatch<RowsAction>;
};

export const RowsContext = createContext<RowsContextType | undefined>(
  undefined
);

import { SET_ROWS } from "../constants/actions";
import { plants } from "../data/plants";
import { RowsAction } from "../models/action";
import { PlantType } from "../models/plant";

const initialRowsState: PlantType[] = [];

const rowsReducer = (state: PlantType[], action: RowsAction): PlantType[] => {
  switch (action.type) {
    case SET_ROWS:
      // return action.payload;
      return plants; // to be replaced by an api call in the real world
    default:
      return state;
  }
};

export { rowsReducer, initialRowsState };

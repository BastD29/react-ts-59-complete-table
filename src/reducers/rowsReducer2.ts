import {
  ADD_ROW,
  DELETE_ROW,
  SET_ROWS,
  UPDATE_ROW,
} from "../constants/actions";
import { RowsAction } from "../models/action";
import { PlantType } from "../models/plant";

const initialRowsState: PlantType[] = [];

const rowsReducer = (state: PlantType[], action: RowsAction): PlantType[] => {
  switch (action.type) {
    case SET_ROWS:
      return action.payload;
    case ADD_ROW:
      return [...state, action.payload];
    case UPDATE_ROW:
      return state.map((row) =>
        row.id === action.payload.id ? action.payload : row
      );
    case DELETE_ROW:
      return state.filter((row) => row.id !== action.payload);
    default:
      return state;
  }
};

export { rowsReducer, initialRowsState };

import {
  CLEAR_FILTER,
  CLEAR_SORT,
  SET_COLUMNS,
  SET_FILTER,
  SET_ROWS,
  SET_SORT,
} from "../constants/actions";
import { ColumnType } from "./column";
import { FilterType } from "./filter";
import { PlantType } from "./plant";

// FILTER ACTIONS

type SetFilterAction = { type: typeof SET_FILTER; payload: FilterType };
type ClearFilterAction = { type: typeof CLEAR_FILTER };

type FilterAction = SetFilterAction | ClearFilterAction;

// ROWS ACTIONS

type SetRowsAction = { type: typeof SET_ROWS; payload: PlantType[] };

type RowsAction = SetRowsAction;

// COLUMNS ACTIONS

type SetColumnsAction = { type: typeof SET_COLUMNS; payload: ColumnType[] };

type ColumnsAction = SetColumnsAction;

// SORT ACTIONS

type SetSortAction = { type: typeof SET_SORT; payload: keyof PlantType };
type ClearSortAction = { type: typeof CLEAR_SORT };

type SortAction = SetSortAction | ClearSortAction;

export type { FilterAction, RowsAction, SortAction, ColumnsAction };

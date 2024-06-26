import { ReactNode, RefObject } from "react";
import {
  ADD_ROW,
  CLEAR_FILTER,
  CLEAR_SORT,
  DELETE_ROW,
  SET_COLUMNS,
  SET_FILTER,
  SET_MODAL,
  SET_POPOVER,
  SET_ROWS,
  SET_SORT,
  UNSET_MODAL,
  UNSET_POPOVER,
  UPDATE_ROW,
} from "../constants/actions";
import { ColumnType } from "./column";
import { FilterType } from "./filter";
import { PlantType } from "./plant";
import { PopoverPosition } from "./popover2";

// FILTER ACTIONS

type SetFilterAction = { type: typeof SET_FILTER; payload: FilterType };
type ClearFilterAction = { type: typeof CLEAR_FILTER };

type FilterAction = SetFilterAction | ClearFilterAction;

// ROWS ACTIONS

type SetRowsAction = { type: typeof SET_ROWS; payload: PlantType[] };
type AddRowAction = { type: typeof ADD_ROW; payload: PlantType };
type DeleteRowAction = { type: typeof DELETE_ROW; payload: number };
type UpdateRowAction = { type: typeof UPDATE_ROW; payload: PlantType };

type RowsAction =
  | SetRowsAction
  | AddRowAction
  | DeleteRowAction
  | UpdateRowAction;

// COLUMNS ACTIONS

type SetColumnsAction = { type: typeof SET_COLUMNS; payload: ColumnType[] };

type ColumnsAction = SetColumnsAction;

// SORT ACTIONS

type SetSortAction = { type: typeof SET_SORT; payload: keyof PlantType };
// type SetSortAction = { type: typeof SET_SORT; payload: string };
type ClearSortAction = { type: typeof CLEAR_SORT };

type SortAction = SetSortAction | ClearSortAction;

// MODAL ACTIONS

type SetModalAction = { type: typeof SET_MODAL; payload: ReactNode };
type UnsetModalAction = { type: typeof UNSET_MODAL };

type ModalAction = SetModalAction | UnsetModalAction;

// POPOVER ACTIONS

// type SetPopoverAction = { type: typeof SET_POPOVER; payload: ReactNode };
type SetPopoverAction = {
  type: typeof SET_POPOVER;
  payload: {
    content: ReactNode;
    ref: RefObject<HTMLElement>;
    position?: PopoverPosition;
    offset?: number;
  };
};
type UnsetPopoverAction = { type: typeof UNSET_POPOVER };

type PopoverAction = SetPopoverAction | UnsetPopoverAction;

export type {
  FilterAction,
  RowsAction,
  SortAction,
  ColumnsAction,
  ModalAction,
  PopoverAction,
};

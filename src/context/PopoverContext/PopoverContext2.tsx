import { Context, Dispatch, createContext } from "react";
import { PopoverType } from "../../models/popover2";
import { PopoverAction } from "../../models/action";

// type PopoverContextType = {
//   popoverContent: React.ReactNode;
//   popoverTarget: React.RefObject<HTMLElement> | null;
//   setPopover: (
//     content: React.ReactNode,
//     ref: React.RefObject<HTMLElement>,
//     position?: PopoverPosition,
//     offset?: number
//   ) => void;
// };

type PopoverContextType = {
  state: PopoverType;
  dispatch: Dispatch<PopoverAction>;
};

export const PopoverContext: Context<PopoverContextType | undefined> =
  createContext<PopoverContextType | undefined>(undefined);

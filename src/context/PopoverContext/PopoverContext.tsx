import React from "react";
import { PopoverPosition } from "../../models/popover";

type PopoverContextType = {
  popoverContent: React.ReactNode;
  popoverTarget: React.RefObject<HTMLElement> | null;
  setPopover: (
    content: React.ReactNode,
    ref: React.RefObject<HTMLElement>,
    position?: PopoverPosition,
    offset?: number
  ) => void;
  // clearPopover: () => void;
};

export const PopoverContext = React.createContext<
  PopoverContextType | undefined
>(undefined);

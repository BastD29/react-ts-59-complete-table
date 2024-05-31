import { ReactNode, RefObject } from "react";

// type PopoverType = {
//   popover: ReactNode | undefined;
// };

type PopoverType = {
  popoverContent: ReactNode | undefined;
  // popoverTarget: RefObject<HTMLElement> | undefined;
  popoverTarget: RefObject<HTMLElement> | null;
  position?: PopoverPosition;
  offset?: number;
};

type PopoverPosition =
  | "top-centered"
  | "bottom-centered"
  | "right-centered"
  | "left-centered"
  | "bottom"
  | "top"
  | "right"
  | "left";

export type { PopoverType, PopoverPosition };

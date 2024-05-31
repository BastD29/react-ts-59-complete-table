type PopoverContextType = {
  unsetPopover: () => void;
  setPopover: (popover: React.ReactNode) => void;
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

export type { PopoverContextType, PopoverPosition };

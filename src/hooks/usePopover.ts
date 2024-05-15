import React from "react";
import { PopoverContext } from "../context/PopoverContext/PopoverContext";

const usePopover = () => {
  const context = React.useContext(PopoverContext);

  if (context === undefined) {
    throw new Error("usePopover must be used within a PopoverProvider");
  }

  return context;
};

export { usePopover };

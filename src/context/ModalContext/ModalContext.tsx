import { Context, createContext } from "react";
import { ModalContextType } from "../../models/modal";

export const ModalContext: Context<ModalContextType | undefined> =
  createContext<ModalContextType | undefined>(undefined);

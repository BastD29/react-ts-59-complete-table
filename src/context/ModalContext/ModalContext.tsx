import { Context, createContext } from "react";
import { ModalContextType } from "../../models/Modal";

export const ModalContext: Context<ModalContextType | undefined> =
  createContext<ModalContextType | undefined>(undefined);

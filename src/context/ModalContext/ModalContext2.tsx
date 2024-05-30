import { Context, Dispatch, createContext } from "react";
import { ModalType } from "../../models/modal2";
import { ModalAction } from "../../models/action";

// type ModalContextType = {
//   unsetModal: () => void;
//   setModal: (modal: ReactNode) => void;
// };

type ModalContextType = {
  state: ModalType;
  dispatch: Dispatch<ModalAction>;
};

export const ModalContext: Context<ModalContextType | undefined> =
  createContext<ModalContextType | undefined>(undefined);

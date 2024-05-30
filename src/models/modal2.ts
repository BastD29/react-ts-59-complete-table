import { ReactNode } from "react";

// type ModalType = {
//   unsetModal: () => void;
//   setModal: (modal: ReactNode) => void;
// };

type ModalType = {
  modal: ReactNode | undefined;
};

export type { ModalType };

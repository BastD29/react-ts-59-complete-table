type ModalKeyType =
  | "ModalContent1"
  | "ModalContent2"
  | "ModalContent3"
  | "ModalContent4";

type ModalState = Partial<Record<ModalKeyType, boolean>>;

type ModalContextType = {
  unsetModal: () => void;
  setModal: (modal: React.ReactNode) => void;
};

export type { ModalKeyType, ModalState, ModalContextType };

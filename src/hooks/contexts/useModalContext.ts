import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext/ModalContext2";

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }

  return context;
};

export { useModalContext };

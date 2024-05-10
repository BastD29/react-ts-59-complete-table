import { FC, ReactNode, useCallback, useState } from "react";
import { ModalContext } from "./ModalContext";
import Modal from "../../components/Modal/Modal2";

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider: FC<ModalProviderProps> = (props) => {
  const [modal, setModal] = useState<ReactNode>(undefined);

  const unsetModal = useCallback(() => {
    setModal(undefined);
  }, []);

  return (
    <ModalContext.Provider value={{ unsetModal, setModal }} {...props}>
      {props.children}
      {modal && <Modal children={modal} unsetModal={unsetModal} />}
    </ModalContext.Provider>
  );
};

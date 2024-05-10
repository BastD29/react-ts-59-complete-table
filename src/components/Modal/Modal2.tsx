import { FC, MouseEvent } from "react";

import style from "./Modal.module.scss";

type ModalProps = {
  children: React.ReactNode;
  unsetModal: () => void;
};

const Modal: FC<ModalProps> = ({ children, unsetModal }) => {
  const stopPropagation = (e: MouseEvent) => e.stopPropagation();

  return (
    <div className={style["modal-overlay"]} onClick={unsetModal}>
      <div className={style["modal-content"]} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  );
};

export default Modal;

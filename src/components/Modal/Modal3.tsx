import { FC, MouseEvent } from "react";
import { useModalContext } from "../../hooks/contexts/useModalContext";
import { UNSET_MODAL } from "../../constants/actions";
import style from "./Modal.module.scss";

type ModalProps = {
  children: React.ReactNode;
};

const Modal: FC<ModalProps> = ({ children }) => {
  const stopPropagation = (e: MouseEvent) => e.stopPropagation();

  const { dispatch } = useModalContext();

  return (
    <div
      className={style["modal-overlay"]}
      onClick={() => dispatch({ type: UNSET_MODAL })}
    >
      <div className={style["modal-content"]} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  );
};

export default Modal;

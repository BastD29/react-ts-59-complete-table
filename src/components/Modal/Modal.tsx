import style from "./Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ onClose, isOpen, children }) => {
  if (!isOpen) return null;

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <div className={style["modal-overlay"]} onClick={onClose}>
      <div className={style["modal-content"]} onClick={handleClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;

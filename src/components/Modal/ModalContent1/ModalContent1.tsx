import style from "./ModalContent1.module.scss";

const ModalContent1: React.FC = () => {
  return (
    <div className={style["modal-content-1"]}>
      <h2>Modal Content 1</h2>
      <p>This modal content 1</p>
    </div>
  );
};

export default ModalContent1;

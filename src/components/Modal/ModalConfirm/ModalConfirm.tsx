import { FC } from "react";
import { useModalContext } from "../../../hooks/contexts/useModalContext";
import { DELETE_ROW, UNSET_MODAL } from "../../../constants/actions";
import { useRowsContext } from "../../../hooks/contexts/useRowsContext";
import style from "./ModalConfirm.module.scss";

type ModalConfirmProps = {
  rowId: number;
};

const ModalConfirm: FC<ModalConfirmProps> = ({ rowId }) => {
  const { dispatch: modalDispatch } = useModalContext();
  const { dispatch: rowDispatch } = useRowsContext();

  const handleDelete = () => {
    rowDispatch({ type: DELETE_ROW, payload: rowId });
    modalDispatch({ type: UNSET_MODAL });
  };

  return (
    <div className={style["modal-confirm"]}>
      <h3>Delete plant</h3>
      <p>Are you sure you want to delete the plant?</p>
      <div className={style["modal-confirm__buttons"]}>
        <button onClick={() => modalDispatch({ type: UNSET_MODAL })}>
          Cancel
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ModalConfirm;

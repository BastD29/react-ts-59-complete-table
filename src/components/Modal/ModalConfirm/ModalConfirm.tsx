import { FC, useEffect, useState } from "react";
import { useModalContext } from "../../../hooks/contexts/useModalContext";
import { DELETE_ROW, UNSET_MODAL } from "../../../constants/actions";
import { useRowsContext } from "../../../hooks/contexts/useRowsContext";
import style from "./ModalConfirm.module.scss";

type ModalConfirmProps = {
  rowId: number;
};

const ModalConfirm: FC<ModalConfirmProps> = ({ rowId }) => {
  const { dispatch: modalDispatch } = useModalContext();
  const { dispatch: rowDispatch, state: rows } = useRowsContext();

  const [plantName, setPlantName] = useState<string>("");

  useEffect(() => {
    const plant = rows.find((row) => row.id === rowId);
    if (plant) {
      setPlantName(plant.name);
    }
  }, [rowId, rows]);

  const handleDelete = () => {
    rowDispatch({ type: DELETE_ROW, payload: rowId });
    modalDispatch({ type: UNSET_MODAL });
  };

  return (
    <div className={style["modal-confirm"]}>
      <h3>Delete plant</h3>
      <p>Are you sure you want to delete the {plantName} plant?</p>
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

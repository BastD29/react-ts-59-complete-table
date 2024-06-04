import { FC } from "react";
// import { useRowsContext } from "../../../hooks/contexts/useRowsContext";
import { SET_MODAL, UNSET_POPOVER } from "../../../constants/actions";
import { usePopoverContext } from "../../../hooks/contexts/usePopoverContext";
import { useModalContext } from "../../../hooks/contexts/useModalContext";
import ModalConfirm from "../../Modal/ModalConfirm/ModalConfirm";
import Form from "../../Form/Form4";
import style from "./PopoverActions.module.scss";

type PopoverActionsProps = {
  rowId: number;
};

const PopoverActions: FC<PopoverActionsProps> = ({ rowId }) => {
  // const { dispatch: rowDispatch } = useRowsContext();
  const { dispatch: popoverDispatch } = usePopoverContext();
  const { dispatch: modalDispatch } = useModalContext();

  const handleDelete = () => {
    modalDispatch({ type: SET_MODAL, payload: <ModalConfirm rowId={rowId} /> });
    popoverDispatch({ type: UNSET_POPOVER });
  };

  const handleEdit = () => {
    modalDispatch({ type: SET_MODAL, payload: <Form rowId={rowId} /> });
    popoverDispatch({ type: UNSET_POPOVER });
  };

  return (
    <div className={style["popover-actions"]}>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default PopoverActions;

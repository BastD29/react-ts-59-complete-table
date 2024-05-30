import { SET_MODAL, UNSET_MODAL } from "../constants/actions";
import { ModalAction } from "../models/action";
import { ModalType } from "../models/modal2";

const initialModalState: ModalType = {
  modal: undefined,
};

const modalReducer = (state: ModalType, action: ModalAction): ModalType => {
  switch (action.type) {
    case SET_MODAL:
      return { ...state, modal: action.payload };
    case UNSET_MODAL:
      return { ...state, modal: undefined };
    default:
      return state;
  }
};

export { modalReducer, initialModalState };

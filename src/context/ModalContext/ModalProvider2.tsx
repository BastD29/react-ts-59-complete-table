import { FC, ReactNode, useReducer } from "react";
import { ModalContext } from "./ModalContext2";
import Modal from "../../components/Modal/Modal3";
import { initialModalState, modalReducer } from "../../reducers/modalReducer";

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  // const [modal, setModal] = useState<ReactNode>(undefined);
  const [state, dispatch] = useReducer(modalReducer, initialModalState);

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
      {/* {modal && <Modal children={modal} unsetModal={unsetModal} />} */}
      {state.modal && <Modal children={state.modal} />}
    </ModalContext.Provider>
  );
};

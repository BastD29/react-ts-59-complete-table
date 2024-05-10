// import { useState } from "react";
// import { ModalKeyType, ModalState } from "../models/Modal";

// function useModal(initialState: ModalState) {
//   const [modal, setModal] = useState<ModalState>(initialState);

//   const toggleModal = (modalKey: ModalKeyType) => {
//     setModal((prev) => ({
//       ...prev,
//       [modalKey]: !(prev[modalKey] ?? false),
//     }));
//   };

//   return { modal, toggleModal };
// }

// export default useModal;

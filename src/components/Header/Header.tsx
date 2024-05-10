// import SearchInput from "../Inputs/SearchInput/SearchInput";
// import ButtonWithPopover from "../ButtonWithPopover/ButtonWithPopover";
// import FilterIcon from "../Icons/FilterIcon/FilterIcon";
// import ColumnsIcon from "../Icons/ColumnsIcon/ColumnsIcon";
// import PlusIcon from "../Icons/PlusIcon/PlusIcon";
// import Button from "../Button/Button";
// import Modal from "../Modal/Modal";
// import ModalContent1 from "../Modal/ModalContent1/ModalContent1";
// import ModalContent2 from "../Modal/ModalContent2/ModalContent2";
// import useModal from "../../hooks/useModal";
// import { modals } from "../../constants/modals";
// import style from "./Header.module.scss";

// type HeaderProps = {
//   searchTerm: string;
//   setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
// };

// const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
//   const { modal, toggleModal } = useModal(modals);

//   return (
//     <header className={style["header"]}>
//       <SearchInput
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className={style["header__buttons"]}>
//         <ButtonWithPopover popover="centered" icon={<FilterIcon size={20} />} />
//         <ButtonWithPopover icon={<ColumnsIcon size={20} />} />

//         <Button onClick={() => toggleModal("ModalContent1")}>
//           <PlusIcon size={20} />
//         </Button>
//         {modal["ModalContent1"] && (
//           <Modal
//             isOpen={modal["ModalContent1"]}
//             onClose={() => toggleModal("ModalContent1")}
//           >
//             <ModalContent1 />
//           </Modal>
//         )}

//         <Button onClick={() => toggleModal("ModalContent2")}>
//           <PlusIcon size={20} />
//         </Button>
//         {modal["ModalContent2"] && (
//           <Modal
//             isOpen={modal["ModalContent2"]}
//             onClose={() => toggleModal("ModalContent2")}
//           >
//             <ModalContent2 />
//           </Modal>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

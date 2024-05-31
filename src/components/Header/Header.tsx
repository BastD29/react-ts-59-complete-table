// import { useRef } from "react";
// import { usePopoverContext } from "../../hooks/contexts/usePopoverContext";
// import SearchInput from "../Inputs/SearchInput/SearchInput";
// import FilterIcon from "../Icons/FilterIcon/FilterIcon";
// import ColumnsIcon from "../Icons/ColumnsIcon/ColumnsIcon";
// import Button from "../Button/Button";
// // import { useModalContext } from "../../hooks/contexts/useModalContext";
// // import PlusIcon from "../Icons/PlusIcon/PlusIcon";
// // import ModalContent1 from "../Modal/ModalContent1/ModalContent1";
// import PopoverContent from "../Popover/PopoverContent/PopoverContent";
// import PopoverContent2 from "../Popover/PopoverContent2/PopoverContent2";
// import style from "./Header.module.scss";

// type HeaderProps = {
//   searchTerm: string;
//   setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
// };

// const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
//   const buttonRef = useRef<HTMLButtonElement>(null);
//   const buttonRef2 = useRef<HTMLButtonElement>(null);

//   // const { setModal } = useModalContext();
//   const { setPopover } = usePopoverContext();

//   return (
//     <header className={style["header"]}>
//       <SearchInput
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className={style["header__buttons"]}>
//         <Button
//           ref={buttonRef}
//           onClick={() =>
//             setPopover(<PopoverContent />, buttonRef, "bottom-centered")
//           }
//         >
//           <FilterIcon size={20} />
//         </Button>
//         <Button
//           ref={buttonRef2}
//           onClick={() => setPopover(<PopoverContent2 />, buttonRef2)}
//         >
//           <ColumnsIcon size={20} />
//         </Button>

//         {/* <Button onClick={() => setModal(<ModalContent1 />)}>
//           <PlusIcon size={20} />
//         </Button> */}
//       </div>
//     </header>
//   );
// };

// export default Header;

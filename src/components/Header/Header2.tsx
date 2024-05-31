// import { useRef } from "react";
// import { usePopoverContext } from "../../hooks/contexts/usePopoverContext";
// import SearchInput from "../Inputs/SearchInput/SearchInput3";
// import FilterIcon from "../Icons/FilterIcon/FilterIcon";
// import ColumnsIcon from "../Icons/ColumnsIcon/ColumnsIcon";
// import Button from "../Button/Button";
// // import { useModalContext } from "../../hooks/contexts/useModalContext";
// // import PlusIcon from "../Icons/PlusIcon/PlusIcon";
// // import Form from "../Form/Form";
// import PopoverContent2 from "../Popover/PopoverContent2/PopoverContent2";
// import Filter from "../Filter/Filter2";
// import style from "./Header.module.scss";

// // type HeaderProps = {
// //   searchTerm: string;
// //   setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
// // };

// const Header: React.FC = () => {
//   const buttonRef = useRef<HTMLButtonElement>(null);
//   const buttonRef2 = useRef<HTMLButtonElement>(null);

//   // const { setModal } = useModalContext();
//   // const { setPopover } = usePopoverContext();

//   return (
//     <header className={style["header"]}>
//       <SearchInput />
//       <div className={style["header__buttons"]}>
//         {/* <Button
//           ref={buttonRef}
//           onClick={() => setPopover(<Filter />, buttonRef, "bottom-centered")}
//         >
//           <FilterIcon size={20} />
//         </Button>
//         <Button
//           ref={buttonRef2}
//           onClick={() => setPopover(<PopoverContent2 />, buttonRef2)}
//         >
//           <ColumnsIcon size={20} />
//         </Button> */}

//         {/* <Button onClick={() => setModal(<Form />)}>
//           <PlusIcon size={20} />
//         </Button> */}
//       </div>
//     </header>
//   );
// };

// export default Header;

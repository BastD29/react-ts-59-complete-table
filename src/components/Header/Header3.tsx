import { useRef } from "react";
import { useModalContext } from "../../hooks/contexts/useModalContext";
import { usePopoverContext } from "../../hooks/contexts/usePopoverContext";
import SearchInput from "../Inputs/SearchInput/SearchInput3";
import FilterIcon from "../Icons/FilterIcon/FilterIcon";
import ColumnsIcon from "../Icons/ColumnsIcon/ColumnsIcon";
import Button from "../Button/Button";
import PlusIcon from "../Icons/PlusIcon/PlusIcon";
import PopoverContent2 from "../Popover/PopoverContent2/PopoverContent2";
import Filter from "../Filter/Filter2";
import Form from "../Form/Form4";
import { SET_MODAL, SET_POPOVER } from "../../constants/actions";
import style from "./Header.module.scss";

// type HeaderProps = {
//   searchTerm: string;
//   setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
// };

const Header: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);

  // const { setModal } = useModalContext();
  // const { setPopover } = usePopoverContext();
  const { dispatch: modalDispatch } = useModalContext();
  const { dispatch: popoverDispatch } = usePopoverContext();

  return (
    <header className={style["header"]}>
      <SearchInput />
      <div className={style["header__buttons"]}>
        <Button
          ref={buttonRef}
          // onClick={() => setPopover(<Filter />, buttonRef, "bottom-centered")}
          onClick={() =>
            popoverDispatch({
              type: SET_POPOVER,
              payload: {
                content: <Filter />,
                ref: buttonRef,
                position: "bottom-centered",
              },
            })
          }
        >
          <FilterIcon size={20} />
        </Button>
        <Button
          ref={buttonRef2}
          // onClick={() => setPopover(<PopoverContent2 />, buttonRef2)}
          onClick={() =>
            popoverDispatch({
              type: SET_POPOVER,
              payload: { content: <PopoverContent2 />, ref: buttonRef2 },
            })
          }
        >
          <ColumnsIcon size={20} />
        </Button>

        <Button
          onClick={() => modalDispatch({ type: SET_MODAL, payload: <Form /> })}
        >
          <PlusIcon size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Header;

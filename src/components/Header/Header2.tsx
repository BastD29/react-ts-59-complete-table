import SearchInput from "../Inputs/SearchInput/SearchInput";
import ButtonWithPopover from "../ButtonWithPopover/ButtonWithPopover";
import FilterIcon from "../Icons/FilterIcon/FilterIcon";
import ColumnsIcon from "../Icons/ColumnsIcon/ColumnsIcon";
import Button from "../Button/Button";
import PlusIcon from "../Icons/PlusIcon/PlusIcon";
import ModalContent1 from "../Modal/ModalContent1/ModalContent1";
import ModalContent2 from "../Modal/ModalContent2/ModalContent2";
import { useModal } from "../../hooks/useModal2";
import style from "./Header.module.scss";

type HeaderProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const { setModal } = useModal();

  return (
    <header className={style["header"]}>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={style["header__buttons"]}>
        <ButtonWithPopover popover="centered" icon={<FilterIcon size={20} />} />
        <ButtonWithPopover icon={<ColumnsIcon size={20} />} />

        <Button onClick={() => setModal(<ModalContent1 />)}>
          {/* <Button onClick={() => setModal("ModalContent")}> */}
          <PlusIcon size={20} />
        </Button>
        <Button onClick={() => setModal(<ModalContent2 />)}>
          <PlusIcon size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Header;

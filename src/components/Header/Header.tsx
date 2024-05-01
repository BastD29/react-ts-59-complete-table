import SearchInput from "../SearchInput/SearchInput";
import Button from "../Button/Button";
import PlusIcon from "../Icons/PlusIcon/PlusIcon";
import FilterIcon from "../Icons/FilterIcon/FilterIcon";
import ColumnsIcon from "../Icons/ColumnsIcon/ColumnsIcon";
import style from "./Header.module.scss";

type HeaderProps = {
  searchTerm: string;
  // setSearchTerm: (searchTerm: string) => void;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className={style["header"]}>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={style["header__buttons"]}>
        <Button>
          <FilterIcon size={20} />
        </Button>
        <Button>
          <ColumnsIcon size={20} />
        </Button>
        <Button>
          <PlusIcon size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Header;

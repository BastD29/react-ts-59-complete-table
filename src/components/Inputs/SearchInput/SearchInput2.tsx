import { InputHTMLAttributes } from "react";
import SearchIcon from "../../Icons/SearchIcon/SearchIcon";
import style from "./SearchInput.module.scss";
import { useFilter } from "../../../hooks/useFilter";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: React.FC<SearchInputProps> = ({ value, ...rest }) => {
  const { handleFilter, filters } = useFilter();

  return (
    <div className={style["search-input-wrapper"]}>
      <SearchIcon size={15} />
      <input
        name="search"
        type="search"
        placeholder="Search..."
        className={style["search-input"]}
        value={filters.search || ""}
        onChange={handleFilter}
        {...rest}
      />
    </div>
  );
};

export default SearchInput;

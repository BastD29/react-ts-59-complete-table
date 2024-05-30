import { InputHTMLAttributes } from "react";
import SearchIcon from "../../Icons/SearchIcon/SearchIcon";
import { useFilter } from "../../../hooks/useFilter2";
import style from "./SearchInput.module.scss";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: React.FC<SearchInputProps> = ({ value, ...rest }) => {
  const { handleFilter, filters } = useFilter();
  console.log("filters:", filters);

  return (
    <div className={style["search-input-wrapper"]}>
      <SearchIcon size={15} />
      <input
        name="search"
        type="search"
        placeholder="Search..."
        className={style["search-input"]}
        value={filters.search || ""}
        // onChange={handleFilter}
        onChange={(e) => handleFilter("search", e.target.value)}
        {...rest}
      />
    </div>
  );
};

export default SearchInput;

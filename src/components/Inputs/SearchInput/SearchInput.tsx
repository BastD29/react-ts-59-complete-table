import { InputHTMLAttributes } from "react";
import SearchIcon from "../../Icons/SearchIcon/SearchIcon";
import style from "./SearchInput.module.scss";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {};

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  return (
    <div className={style["search-input-wrapper"]}>
      <SearchIcon size={15} />
      <input
        type="search" // the close icon is appearing without adding too much code thanks to type="search"
        className={style["search-input"]}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default SearchInput;

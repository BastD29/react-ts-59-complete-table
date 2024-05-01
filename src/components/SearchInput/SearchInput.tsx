import { InputHTMLAttributes /* useState */ } from "react";
import SearchIcon from "../Icons/SearchIcon/SearchIcon";
import style from "./SearchInput.module.scss";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {};

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  // const [value, setValue] = useState<string>("");
  // console.log("value:", value);

  return (
    <div className={style["search-input-wrapper"]}>
      <SearchIcon size={15} />
      {/* the close icon is appearing without adding too much code thanks to type="search" */}
      <input
        type="search"
        className={style["search-input"]}
        value={value}
        // onChange={(e) => setValue(e.target.value)}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default SearchInput;

import { useState } from "react";
import style from "./Filter.module.scss";

const Filter: React.FC = () => {
  const [filter, setFilter] = useState<string | undefined>(undefined);

  return (
    <div className={style["filter"]}>
      <h2>Filters</h2>
      <h3>Checked</h3>
      <h3>City</h3>
      <h3>Country</h3>
      <h3>Age</h3>
    </div>
  );
};

export default Filter;

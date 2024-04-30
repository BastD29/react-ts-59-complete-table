import TableBody from "./TableBody/TableBody";
import TableHead from "./TableHead/TableHead";
import useSort from "../../hooks/useSort";
import style from "./Table.module.scss";

const Table: React.FC = () => {
  const { sortedData, handleSort } = useSort();

  return (
    <table className={style["table"]}>
      {/* <h2>Table</h2> */}
      <TableHead handleSort={handleSort} />
      <TableBody data={sortedData} />
    </table>
  );
};

export default Table;

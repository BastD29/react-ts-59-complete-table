import TableBody from "./TableBody/TableBody2";
import TableHead from "./TableHead/TableHead2";
import style from "./Table.module.scss";
import { useRows } from "../../hooks/useRows2";

// type TableProps = {
//   searchedData: DataType[];
// };

const Table: React.FC = () => {
  const { sortedRows } = useRows();

  return (
    <table className={style["table"]}>
      <TableHead />

      {sortedRows && sortedRows.length > 0 ? (
        <TableBody sortedRows={sortedRows} />
      ) : (
        <p>There is no result for your search</p>
      )}
    </table>
  );
};

export default Table;

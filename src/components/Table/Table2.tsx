import TableBody from "./TableBody/TableBody2";
import TableHead from "./TableHead/TableHead2";
import { useRows } from "../../hooks/useRows2";
import style from "./Table.module.scss";

// type TableProps = {
//   searchedData: DataType[];
// };

const Table: React.FC = () => {
  const { sortedRows } = useRows();

  return (
    <>
      {sortedRows && sortedRows.length > 0 ? (
        <table className={style["table"]}>
          <TableHead />
          <TableBody sortedRows={sortedRows} />
        </table>
      ) : (
        <p>There is no result for your search</p>
      )}
    </>
  );
};

export default Table;

import TableBody from "./TableBody/TableBody";
import TableHead from "./TableHead/TableHead";
import useSort from "../../hooks/useSort2";
import { DataType } from "../../models/Table";
import style from "./Table.module.scss";

type TableProps = {
  searchedData: DataType[];
};

const Table: React.FC<TableProps> = ({ searchedData }) => {
  const { sortedData, handleSort } = useSort(searchedData);

  return (
    <table className={style["table"]}>
      <TableHead handleSort={handleSort} />
      {searchedData && searchedData.length > 0 ? (
        <TableBody data={sortedData} />
      ) : (
        <div>There is no result for your search.</div>
      )}
    </table>
  );
};

export default Table;

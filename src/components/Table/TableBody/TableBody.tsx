import { columns } from "../../../data/columns";
import { DataType } from "../../../models/Table";
import TableData from "../TableData/TableData";
import TableRow from "../TableRow/TableRow";
import style from "./TableBody.module.scss";

type TableBodyProps = {
  data: DataType[];
};

const TableBody: React.FC<TableBodyProps> = ({ data }) => {
  return (
    <tbody className={style["table-body"]}>
      {/* <h2>Table Body</h2> */}
      {data.map((item) => (
        <TableRow key={item.key}>
          {columns.map((column) => (
            <TableData key={column.key}>{item[column.dataIndex]}</TableData>
          ))}
        </TableRow>
      ))}
    </tbody>
  );
};

export default TableBody;

import { columns } from "../../../data/columns2";
import { PlantType } from "../../../models/plant";
import style from "./TableBody.module.scss";

type TableBodyProps = {
  sortedRows: PlantType[];
};

const TableBody: React.FC<TableBodyProps> = ({ sortedRows }) => {
  return (
    <tbody className={style["table-body"]}>
      {sortedRows.map((row) => (
        <tr key={row.id}>
          {columns.map((column) => (
            <td key={column.label}>
              {column.format
                ? column.format(row[column.accessor])
                : row[column.accessor]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

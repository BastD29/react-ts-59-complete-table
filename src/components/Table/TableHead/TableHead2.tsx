import { columns } from "../../../data/columns2";
import { useSort } from "../../../hooks/useSort3";
import style from "./TableHead.module.scss";

// type TableHeadProps = {
//   handleSort: (key: keyof DataType) => void;
// };

const TableHead: React.FC = () => {
  const { handleSort } = useSort();

  return (
    <thead className={style["table-head"]}>
      <tr>
        {columns.map((column) => (
          <th key={column.label} onClick={() => handleSort(column.accessor)}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;

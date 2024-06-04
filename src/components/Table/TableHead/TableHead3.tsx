import { columns } from "../../../data/columns3";
import { useSort } from "../../../hooks/useSort3";
import { PlantType } from "../../../models/plant";
import style from "./TableHead.module.scss";

const TableHead: React.FC = () => {
  const { handleSort } = useSort();

  return (
    <thead className={style["table-head"]}>
      <tr>
        {columns.map((column) => (
          <th
            key={column.label}
            onClick={() => handleSort(column.accessor as keyof PlantType)}
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;

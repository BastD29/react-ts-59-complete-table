import { columns } from "../../../data/columns";
import { DataType } from "../../../models/Table";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import style from "./TableHead.module.scss";

type TableHeadProps = {
  // setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  handleSort: (key: keyof DataType) => void;
};

const TableHead: React.FC<TableHeadProps> = ({ handleSort }) => {
  return (
    <thead className={style["table-head"]}>
      {/* <h2>Table Head</h2> */}
      <TableRow>
        {columns.map((column) => (
          <TableHeader
            key={column.key}
            onClick={() => handleSort(column.dataIndex as keyof DataType)}
          >
            {column.title}
          </TableHeader>
        ))}
      </TableRow>
    </thead>
  );
};

export default TableHead;

import { ReactNode } from "react";
import style from "./TableRow.module.scss";

type TableRowProps = {
  children: ReactNode;
};

const TableRow: React.FC<TableRowProps> = ({ children }) => {
  return (
    <tr className={style["table-row"]}>
      {/* <h2>Table Row</h2> */}
      {children}
    </tr>
  );
};

export default TableRow;

import { ReactNode } from "react";
import style from "./TableData.module.scss";

type TableDataProps = {
  children: ReactNode;
};

const TableData: React.FC<TableDataProps> = ({ children }) => {
  return (
    <td className={style["table-data"]}>
      {/* <h2>Table Data Cell</h2> */}
      {children}
    </td>
  );
};

export default TableData;

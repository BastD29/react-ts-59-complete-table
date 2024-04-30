import { ReactNode } from "react";
import style from "./TableHeader.module.scss";

type TableHeaderProps = {
  children: ReactNode;
  onClick?: () => void;
};

const TableHeader: React.FC<TableHeaderProps> = ({ children, onClick }) => {
  return (
    <th className={style["table-header"]} onClick={onClick}>
      {/* <h2>Table Header Cell</h2> */}
      {children}
    </th>
  );
};

export default TableHeader;

import { createRef, useRef } from "react";
import { SET_POPOVER } from "../../../constants/actions";
import { columns } from "../../../data/columns3";
import { usePopoverContext } from "../../../hooks/contexts/usePopoverContext";
import { PlantType } from "../../../models/plant";
import PopoverActions from "../../Popover/PopoverActions/PopoverActions";
import style from "./TableBody.module.scss";

type TableBodyProps = {
  sortedRows: PlantType[];
};

const TableBody: React.FC<TableBodyProps> = ({ sortedRows }) => {
  const { dispatch } = usePopoverContext();

  const refs = useRef([]);
  refs.current = sortedRows.map((_, i) => refs.current[i] ?? createRef());

  return (
    <tbody className={style["table-body"]}>
      {sortedRows.map((row, rowIndex) => (
        <tr key={row.id}>
          {columns.map((column) => {
            const buttonRef = refs.current[rowIndex];
            // console.log("buttonRef:", buttonRef);

            return (
              <td key={column.accessor}>
                {column.accessor === "actions" ? (
                  <button
                    ref={buttonRef}
                    onClick={() =>
                      dispatch({
                        type: SET_POPOVER,
                        payload: {
                          content: <PopoverActions rowId={row.id} />,
                          ref: buttonRef,
                        },
                      })
                    }
                  >
                    Action
                  </button>
                ) : (
                  row[column.accessor as keyof typeof row]
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

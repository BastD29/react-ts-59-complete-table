import { ReactNode, useReducer } from "react";
import { RowsContext } from "./RowsContext";
import { initialRowsState, rowsReducer } from "../../reducers/rowsReducer2";

type RowsProviderProps = {
  children: ReactNode;
};

export const RowsProvider: React.FC<RowsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(rowsReducer, initialRowsState);
  console.log("state:", state);
  console.log("initialRowsState:", initialRowsState);

  return (
    <RowsContext.Provider value={{ state, dispatch }}>
      {children}
    </RowsContext.Provider>
  );
};

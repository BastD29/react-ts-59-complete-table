import { useEffect, useMemo } from "react";
import { useRowsContext } from "./contexts/useRowsContext";
import { SET_ROWS } from "../constants/actions";
import { useFilter } from "./useFilter2";
import { useSort } from "./useSort3";
import { filterPlants, sortRows } from "../utils/utils4";

const useRows = () => {
  const { state: rows, dispatch } = useRowsContext();
  const { filters } = useFilter();
  const { sort } = useSort();

  useEffect(() => {
    dispatch({ type: SET_ROWS, payload: rows });
  }, [dispatch, rows]);

  // const filteredRows = useMemo(
  //   () => filterRows(rows, filters),
  //   [rows, filters]
  // );

  const filteredRows = useMemo(
    () => filterPlants(rows, filters),
    [rows, filters]
  );

  const sortedRows = useMemo(
    () => sortRows(filteredRows, sort),
    [filteredRows, sort]
  );

  return { rows, filteredRows, sortedRows };
};

export { useRows };

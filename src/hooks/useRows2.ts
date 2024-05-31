import { useEffect, useMemo } from "react";
import { useRowsContext } from "./contexts/useRowsContext";
import { SET_ROWS } from "../constants/actions";
import { useFilter } from "./useFilter2";
import { useSort } from "./useSort3";
import { filterPlants, sortRows } from "../utils/utils4";
import { plants } from "../data/plants";

const useRows = () => {
  const { state: rows, dispatch } = useRowsContext();
  const { filters } = useFilter();
  const { sort } = useSort();

  // useEffect(() => {
  //   dispatch({ type: SET_ROWS, payload: plants });
  // }, [dispatch, rows]); // ! rows was causing useless re-renders and preventing state persistence

  useEffect(() => {
    dispatch({ type: SET_ROWS, payload: plants });
  }, [dispatch]);

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

import { useMemo, useState } from "react";
import { DataType, SortType } from "../models/Table";

function useSort(data: DataType[]) {
  const [sortConfig, setSortConfig] = useState<SortType | undefined>(undefined);

  const sortedData = useMemo(() => {
    if (!sortConfig) return data;

    return [...data].sort((a, b) => {
      const valueA = a[sortConfig.key];
      const valueB = b[sortConfig.key];

      let comparison = 0;

      if (typeof valueA === "string" && typeof valueB === "string") {
        comparison = valueA.localeCompare(valueB);
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        comparison = valueA - valueB;
      }

      return sortConfig.order === "asc" ? comparison : -comparison;
    });
  }, [data, sortConfig]);

  const handleSort = (key: keyof DataType) => {
    setSortConfig((prev) => ({
      key,
      order: prev?.key === key && prev?.order === "asc" ? "desc" : "asc",
    }));
  };

  return { sortedData, handleSort };
}

export default useSort;

import { useMemo, useState } from "react";
import { DataType } from "../models/Table";
import { tableData } from "../data/table-data";

function useSort() {
  const [sortKey, setSortKey] = useState<keyof DataType | undefined>(undefined); // Default sort key
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc"); // Default sort order

  const sortedData = useMemo(() => {
    if (!sortKey) return tableData; // If no sort key is selected, return the original data

    return [...tableData].sort((a, b) => {
      const valueA = a[sortKey];
      const valueB = b[sortKey];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortOrder === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
      } else {
        return 0;
      }
    });
  }, [tableData, sortKey, sortOrder]);

  const handleSort = (key: keyof DataType) => {
    const newOrder = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
    setSortKey(key);
    // No need to call setData here as the useMemo will automatically re-calculate sortedData
    // setData(sortData(data, key, newOrder));
  };

  return { sortedData, handleSort };
}

export default useSort;

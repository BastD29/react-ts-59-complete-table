// import { useMemo, useState } from "react";
// import { DataType } from "../models/Table";

// function useSort(data: DataType[]) {
//   const [sortKey, setSortKey] = useState<keyof DataType | undefined>(undefined);
//   const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

//   const sortedData = useMemo(() => {
//     if (!sortKey) return data;

//     return [...data].sort((a, b) => {
//       const valueA = a[sortKey];
//       const valueB = b[sortKey];

//       if (typeof valueA === "string" && typeof valueB === "string") {
//         return sortOrder === "asc"
//           ? valueA.localeCompare(valueB)
//           : valueB.localeCompare(valueA);
//       } else if (typeof valueA === "number" && typeof valueB === "number") {
//         return sortOrder === "asc" ? valueA - valueB : valueB - valueA;
//       } else {
//         return 0;
//       }
//     });
//   }, [data, sortKey, sortOrder]);

//   const handleSort = (key: keyof DataType) => {
//     const newOrder = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
//     setSortOrder(newOrder);
//     setSortKey(key);
//   };

//   return { sortedData, handleSort };
// }

// export default useSort;

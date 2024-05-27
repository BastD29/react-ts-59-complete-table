// import { useEffect, useMemo, useState } from "react";
// import { tableData } from "../data/table-data";
// import { DataType } from "../models/Table";

// function useSearch(delay: number = 500) {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const [debouncedTerm, setDebouncedTerm] = useState<string>(searchTerm);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedTerm(searchTerm);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [searchTerm]);

//   const searchedData = useMemo(() => {
//     return [...tableData].filter((item) =>
//       Object.keys(item).some(
//         (key) =>
//           typeof item[key as keyof DataType] === "string" &&
//           (item[key as keyof DataType] as string)
//             .toLowerCase()
//             // .includes(searchTerm.toLowerCase())
//             .includes(debouncedTerm.toLowerCase())
//       )
//     );
//   }, [tableData, debouncedTerm]);

//   return { searchedData, searchTerm, setSearchTerm };
// }

// export default useSearch;

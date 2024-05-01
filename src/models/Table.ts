type DataType = {
  key: string;
  name: string;
  age: number;
  address: string;
};

type ColumnType = {
  title: string;
  dataIndex: keyof DataType;
  key: string;
};

type SortType = {
  key: keyof DataType;
  order: "asc" | "desc";
};

export type { DataType, ColumnType, SortType };

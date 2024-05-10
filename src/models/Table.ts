type DataType = {
  key: string;
  name: string;
  age: number;
  address: string;
  city: string;
  country: string;
  checked: boolean;
};

type ColumnType = {
  title: string;
  dataIndex: keyof DataType;
  key: string;
  render?: (value: any, record: DataType, index: number) => React.ReactNode;
};

type SortType = {
  key: keyof DataType;
  order: "asc" | "desc";
};

export type { DataType, ColumnType, SortType };

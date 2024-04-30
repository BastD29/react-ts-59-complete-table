type DataType = {
  key: string;
  name: string;
  age: number;
  address: string;
};

type ColumnType = {
  title: string;
  // dataIndex: string;
  dataIndex: keyof DataType;
  key: string;
};

export type { DataType, ColumnType };

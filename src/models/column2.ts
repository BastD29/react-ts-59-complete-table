import { PlantType } from "./plant";

type ColumnType = {
  accessor: keyof PlantType | string;
  // accessor: string;
  label: string;
  format?: (value: any) => typeof value;
};

export type { ColumnType };

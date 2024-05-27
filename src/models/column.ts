import { PlantType } from "./plant";

type ColumnType = {
  accessor: keyof PlantType;
  label: string;
  format?: (value: any) => typeof value;
};

export type { ColumnType };

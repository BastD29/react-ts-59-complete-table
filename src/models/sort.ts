import { PlantType } from "./plant";

type SortType = {
  order: "asc" | "desc";
  orderBy: keyof PlantType;
  // orderBy: string;
};

export type { SortType };

import { PlantType } from "./plant";

type SortType = {
  order: "asc" | "desc";
  orderBy: keyof PlantType;
};

export type { SortType };

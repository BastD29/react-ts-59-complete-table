import { FilterType } from "../models/filter2";
import { PlantType } from "../models/plant";
import { SortType } from "../models/sort";

function isEmpty(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

function isString(value: any): boolean {
  return typeof value === "string" || value instanceof String;
}

function isBoolean(value: any): boolean {
  return value === true || value === false;
}

function isNumber(value: any): boolean {
  return typeof value === "number" && !isNaN(value);
}

function isNull(value: any) {
  return typeof value === "undefined" || value === null;
}

function isDateString(value: any) {
  if (!isString(value)) return false;
  return value.match(/^\d{2}-\d{2}-\d{4}$/);
}

function toLower(value: string): string {
  if (isString(value)) {
    return value.toLowerCase();
  }

  return value;
}

function filterByValue(value: any, filterValue: any): boolean {
  if (isString(value)) {
    return toLower(value).includes(toLower(filterValue));
  }

  if (isBoolean(value)) {
    return (
      (filterValue === "true" && value) || (filterValue === "false" && !value)
    );
  }

  if (isNumber(value)) {
    return value == filterValue;
  }

  return false;
}

function convertDateString(value: string) {
  return value.substring(6, 4) + value.substring(3, 2) + value.substring(0, 2);
}

function convertType(value: any): string {
  if (isNumber(value)) {
    return value.toString();
  }

  if (isDateString(value)) {
    return convertDateString(value);
  }

  if (isBoolean(value)) {
    return value ? "1" : "-1";
  }

  return value;
}

function filterRows(rows: PlantType[], filters: FilterType): PlantType[] {
  if (isEmpty(filters)) return rows;

  return rows.filter((row) =>
    Object.keys(filters).every((filterKey) => {
      const filterValue = filters[filterKey];

      return Object.keys(row).some((rowKey) =>
        filterByValue(row[rowKey as keyof PlantType], filterValue)
      );
    })
  );
}

const filterPlants = (
  plants: PlantType[],
  filters: FilterType
): PlantType[] => {
  if (isEmpty(filters)) return plants;

  return plants.filter((plant) => {
    const matchesFilters = Object.keys(filters).every((key) => {
      if (key === "search") {
        const searchQuery = filters[key][0]?.toLowerCase();
        return plant.name.toLowerCase().includes(searchQuery);
      }

      const filterValues = filters[key];
      // console.log("filterValues:", filterValues);

      return (
        filterValues.length === 0 ||
        filterValues.includes(plant[key as keyof Omit<PlantType, "id">])
      );
    });

    return matchesFilters;
  });
};

function sortRows(rows: PlantType[], sort: SortType): PlantType[] {
  return rows.sort((a, b) => {
    const { order, orderBy } = sort;

    // console.log("order:", order);
    // console.log("orderBy:", orderBy);

    if (isNull(a[orderBy])) return 1;
    if (isNull(b[orderBy])) return -1;

    const aLocale = convertType(a[orderBy]);
    const bLocale = convertType(b[orderBy]);

    if (order === "asc") {
      return aLocale.localeCompare(bLocale, "en", {
        numeric: isNumber(b[orderBy]),
      });
    } else {
      return bLocale.localeCompare(aLocale, "en", {
        numeric: isNumber(a[orderBy]),
      });
    }
  });
}

export { filterRows, filterPlants, sortRows };

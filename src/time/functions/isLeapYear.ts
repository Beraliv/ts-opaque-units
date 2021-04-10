import { Years } from "../types/Years";

export const isLeapYear = (year: Years): boolean => {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
};

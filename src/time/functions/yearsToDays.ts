import { Days } from "../types/Days";
import { Years } from "../types/Years";
import { isLeapYear } from "./isLeapYear";

interface StartForYearsToDays {
  year: Years;
}

export const yearsToDays = (
  years: Years,
  start?: StartForYearsToDays
): Days => {
  if (start === undefined) {
    return (years * 365.25) as Days;
  }

  const { year: startYear } = start;
  let days = 0;
  let currentYear = startYear;

  while (years > 0) {
    let daysInYear = 365;
    if (isLeapYear(currentYear)) {
      daysInYear++;
    }

    if (years > 1) {
      days += daysInYear;
      years--;
    } else {
      days += years * daysInYear;
      years = 0 as Years;
    }
  }

  return days as Days;
};

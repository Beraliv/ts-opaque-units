import { Days } from "../types/Days";
import { Years } from "../types/Years";
import { isLeapYear } from "./isLeapYear";

interface StartForDaysToYears {
  year: Years;
}

export const daysToYears = (days: Days, start?: StartForDaysToYears): Years => {
  if (start === undefined) {
    return (days / 365.25) as Years;
  }

  const { year: startYear } = start;
  let years = 0;
  let currentYear = startYear;

  while (days > 0) {
    let daysInYear = 365;
    if (isLeapYear(currentYear)) {
      daysInYear++;
    }

    if (days > daysInYear) {
      years++;
      days = (days - daysInYear) as Days;
    } else {
      years += days / daysInYear;
      days = 0 as Days;
    }
  }

  return years as Years;
};

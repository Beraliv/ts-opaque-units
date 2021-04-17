import { DAYS_IN_MONTHS } from "../../../internal/time/constants/DAYS_IN_MONTHS";
import { MonthName } from "../../../internal/time/types/MonthName";
import { Days } from "../types/Days";
import { Months } from "../types/Months";
import { Years } from "../types/Years";
import { isLeapYear } from "./isLeapYear";

export interface StartForDaysToMonths {
  month: MonthName;
  year: Years;
}

export const daysToMonths = (days: Days, start?: StartForDaysToMonths) => {
  if (start === undefined) {
    return (days / 30.4375) as Months;
  }

  const { month: startMonth, year } = start;
  let months = 0;
  let index = DAYS_IN_MONTHS.findIndex(({ month }) => month === startMonth);
  let currentYear = year;

  while (days > 0) {
    let { day: daysInMonth } = DAYS_IN_MONTHS[index];
    if (index === 1 && isLeapYear(currentYear)) {
      daysInMonth++;
    }

    if (days < daysInMonth) {
      months += days / daysInMonth;
      days = 0 as Days;
    } else {
      months += 1;
      days = (days - daysInMonth) as Days;
    }
    if (index === DAYS_IN_MONTHS.length - 1) {
      index = 0;
      currentYear = (currentYear + 1) as Years;
    } else {
      index++;
    }
  }

  return months as Months;
};

import { DAYS_IN_MONTHS } from "../../internal/time/constants/DAYS_IN_MONTHS";
import { MonthName } from "../../internal/time/types/MonthName";
import { Days } from "../types/Days";
import { Months } from "../types/Months";
import { Years } from "../types/Years";
import { isLeapYear } from "./isLeapYear";

export interface StartForMonthsToDays {
  month: MonthName;
  year: Years;
}

export const monthsToDays = /* #__PURE__ */ (
  months: Months,
  start?: StartForMonthsToDays
) => {
  if (start === undefined) {
    return (months * 30.4375) as Days;
  }

  const { month: startMonth, year } = start;
  let days = 0;
  let index = DAYS_IN_MONTHS.findIndex(({ month }) => month === startMonth);
  let currentYear = year;

  while (months > 0) {
    let { day: daysInMonth } = DAYS_IN_MONTHS[index];
    if (index === 1 && isLeapYear(currentYear)) {
      daysInMonth++;
    }

    if (months > 1) {
      days += daysInMonth;
      months = (months - 1) as Months;
    } else {
      days += daysInMonth * months;
      months = 0 as Months;
    }

    if (index === DAYS_IN_MONTHS.length - 1) {
      index = 0;
      currentYear = (currentYear + 1) as Years;
    } else {
      index++;
    }
  }

  return days as Days;
};

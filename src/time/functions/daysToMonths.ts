import { Days } from "../types/Days";
import { Months } from "../types/Months";
import { Years } from "../types/Years";
import { isLeapYear } from "./isLeapYear";

export type StartForDaysToMonths = {
  month:
    | "January"
    | "February"
    | "March"
    | "April"
    | "May"
    | "June"
    | "July"
    | "August"
    | "September"
    | "October"
    | "November"
    | "December";
  year: Years;
};

const DAYS_IN_MONTHS: {
  day: number;
  month: StartForDaysToMonths["month"];
}[] = [
  {
    day: 31,
    month: "January",
  },
  {
    day: 28,
    month: "February",
  },
  {
    day: 31,
    month: "March",
  },
  {
    day: 30,
    month: "April",
  },
  {
    day: 31,
    month: "May",
  },
  {
    day: 30,
    month: "June",
  },
  {
    day: 31,
    month: "July",
  },
  {
    day: 31,
    month: "August",
  },
  {
    day: 30,
    month: "September",
  },
  {
    day: 31,
    month: "October",
  },
  {
    day: 30,
    month: "November",
  },
  {
    day: 31,
    month: "December",
  },
];

export const daysToMonths = (days: Days, start?: StartForDaysToMonths) => {
  if (start === undefined) {
    return (days / 30.4167) as Months;
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

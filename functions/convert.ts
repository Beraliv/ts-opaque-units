import { Equal, Expect } from "@type-challenges/utils";
import { Centuries } from "../types/Centuries";
import { Days } from "../types/Days";
import { Decades } from "../types/Decades";
import { Hours } from "../types/Hours";
import { Millenniums } from "../types/Millenniums";
import { Milliseconds } from "../types/Milliseconds";
import { Minutes } from "../types/Minutes";
import { Months } from "../types/Months";
import { Seconds } from "../types/Seconds";
import { Weeks } from "../types/Weeks";
import { Years } from "../types/Years";
import { daysToMonths, StartForDaysToMonths } from "./daysToMonths";
import { monthsToDays } from "./monthsToDays";

const measurements = [
  "milliseconds",
  "seconds",
  "minutes",
  "hours",
  "days",
  "weeks",
  "months",
  "years",
  "decades",
  "centuries",
  "millenniums",
] as const;
const ascendingSteps = [1, 1000, 60, 60, 24, 7, NaN, 12, 10, 10, 10];
const descendingSteps = [1000, 60, 60, 24, 7, NaN, 12, 10, 10, 10, 1];

type TimeType = [
  Milliseconds,
  Seconds,
  Minutes,
  Hours,
  Days,
  Weeks,
  Months,
  Years,
  Decades,
  Centuries,
  Millenniums
];

type MeasurementType = typeof measurements[number];

type MeasurementAndTimeMapping = {
  milliseconds: Milliseconds;
  seconds: Seconds;
  minutes: Minutes;
  hours: Hours;
  days: Days;
  weeks: Weeks;
  months: Months;
  years: Years;
  decades: Decades;
  centuries: Centuries;
  millenniums: Millenniums;
};

// validate weeks don't forget anything here
type cases = [
  Expect<Equal<keyof MeasurementAndTimeMapping, MeasurementType>>,
  Expect<Equal<MeasurementAndTimeMapping[MeasurementType], TimeType[number]>>
];

export function convert<
  From extends keyof MeasurementAndTimeMapping,
  To extends keyof MeasurementAndTimeMapping
>(
  value: MeasurementAndTimeMapping[From],
  from: From,
  to: To,
  start?: StartForDaysToMonths
): MeasurementAndTimeMapping[To] {
  let result = value as number;
  let startIndex = measurements.findIndex(
    (measurement) => measurement === from
  );
  let endIndex = measurements.findIndex((measurement) => measurement === to);

  if (
    (from === "weeks" && endIndex >= 6) ||
    (startIndex >= 6 && to === "weeks")
  ) {
    throw new Error(
      `ImplementationTypeError: does NOT support ${from} => ${to}`
    );
  }

  let nextStep = false;
  if (startIndex < endIndex) {
    for (let index = startIndex + 1; index <= endIndex; index++) {
      const step = ascendingSteps[index];
      if (nextStep) {
        nextStep = false;
      } else if (step !== step) {
        // months is NaN (weeks => months)
        nextStep = true;
        result = daysToMonths(result as Days, start);
      } else {
        result /= step;
      }
    }
  } else if (startIndex > endIndex) {
    for (let index = startIndex - 1; index >= endIndex; index--) {
      const step = descendingSteps[index];
      if (nextStep) {
        nextStep = false;
      } else if (step !== step) {
        // weeks is NaN (weeks <= months)
        nextStep = true;
        result /= descendingSteps[index - 1];
        result = monthsToDays(result as Months, start);
      } else {
        result *= step;
      }
    }
  }

  return result as MeasurementAndTimeMapping[To];
}

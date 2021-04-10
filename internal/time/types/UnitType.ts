import { Centuries } from "../../../src/time/types/Centuries";
import { Days } from "../../../src/time/types/Days";
import { Decades } from "../../../src/time/types/Decades";
import { Hours } from "../../../src/time/types/Hours";
import { Millenniums } from "../../../src/time/types/Millenniums";
import { Milliseconds } from "../../../src/time/types/Milliseconds";
import { Minutes } from "../../../src/time/types/Minutes";
import { Months } from "../../../src/time/types/Months";
import { Seconds } from "../../../src/time/types/Seconds";
import { Weeks } from "../../../src/time/types/Weeks";
import { Years } from "../../../src/time/types/Years";

export type UnitType =
  | Milliseconds
  | Seconds
  | Minutes
  | Hours
  | Days
  | Weeks
  | Months
  | Years
  | Decades
  | Centuries
  | Millenniums;

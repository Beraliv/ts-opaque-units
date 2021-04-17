import { Centuries } from "../../../time/types/Centuries";
import { Days } from "../../../time/types/Days";
import { Decades } from "../../../time/types/Decades";
import { Hours } from "../../../time/types/Hours";
import { Millenniums } from "../../../time/types/Millenniums";
import { Milliseconds } from "../../../time/types/Milliseconds";
import { Minutes } from "../../../time/types/Minutes";
import { Months } from "../../../time/types/Months";
import { Seconds } from "../../../time/types/Seconds";
import { Weeks } from "../../../time/types/Weeks";
import { Years } from "../../../time/types/Years";

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

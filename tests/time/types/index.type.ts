import { Expect, Equal } from "@type-challenges/utils";
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

/**
 * @example
 * declare const to: To;
 * declare const what: What;
 * to = what // if Assignable<What, To> equals true, then allowed ✅
 */
type Assignable<What, To> = What extends To ? true : false;

declare let msecs: Milliseconds;
declare let secs: Seconds;
declare let mins: Minutes;
declare let hours: Hours;
declare let days: Days;
declare let weeks: Weeks;
declare let months: Months;
declare let years: Years;
declare let decades: Decades;
declare let millenniums: Millenniums;

// @ts-expect-error
msecs = secs;
// @ts-expect-error
secs = mins;
// @ts-expect-error
mins = hours;
// @ts-expect-error
hours = days;
// @ts-expect-error
days = weeks;
// @ts-expect-error
weeks = months;
// @ts-expect-error
months = years;
// @ts-expect-error
years = decades;
// @ts-expect-error
decades = millenniums;

msecs = msecs;
secs = secs;
mins = mins;
hours = hours;
days = days;
weeks = weeks;
months = months;
years = years;
decades = decades;
millenniums = millenniums;

type cases = [
  // msecs and secs
  Expect<Equal<Assignable<Milliseconds, Milliseconds>, true>>,
  Expect<Equal<Assignable<Milliseconds, Seconds>, false>>,
  Expect<Equal<Assignable<Seconds, Milliseconds>, false>>,
  // secs and mins
  Expect<Equal<Assignable<Seconds, Seconds>, true>>,
  Expect<Equal<Assignable<Seconds, Minutes>, false>>,
  Expect<Equal<Assignable<Minutes, Seconds>, false>>,
  // mins and hours
  Expect<Equal<Assignable<Minutes, Minutes>, true>>,
  Expect<Equal<Assignable<Minutes, Hours>, false>>,
  Expect<Equal<Assignable<Hours, Minutes>, false>>,
  // hours and days
  Expect<Equal<Assignable<Hours, Hours>, true>>,
  Expect<Equal<Assignable<Hours, Days>, false>>,
  Expect<Equal<Assignable<Days, Hours>, false>>,
  // days and weeks
  Expect<Equal<Assignable<Days, Days>, true>>,
  Expect<Equal<Assignable<Days, Weeks>, false>>,
  Expect<Equal<Assignable<Weeks, Days>, false>>,
  // weeks and months
  Expect<Equal<Assignable<Weeks, Weeks>, true>>,
  Expect<Equal<Assignable<Weeks, Months>, false>>,
  Expect<Equal<Assignable<Months, Weeks>, false>>,
  // months and years
  Expect<Equal<Assignable<Months, Months>, true>>,
  Expect<Equal<Assignable<Months, Years>, false>>,
  Expect<Equal<Assignable<Years, Months>, false>>,
  // years and decades
  Expect<Equal<Assignable<Years, Years>, true>>,
  Expect<Equal<Assignable<Years, Decades>, false>>,
  Expect<Equal<Assignable<Decades, Years>, false>>,
  // decades and millenniums
  Expect<Equal<Assignable<Decades, Decades>, true>>,
  Expect<Equal<Assignable<Decades, Millenniums>, false>>,
  Expect<Equal<Assignable<Millenniums, Decades>, false>>,
  Expect<Equal<Assignable<Millenniums, Millenniums>, true>>
];

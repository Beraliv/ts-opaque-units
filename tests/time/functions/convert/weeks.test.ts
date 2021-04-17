import {
  Centuries,
  Days,
  Decades,
  Hours,
  Millenniums,
  Milliseconds,
  Minutes,
  Months,
  Seconds,
  Weeks,
  Years,
} from "../../../../src";
import { convert } from "../../../../src/time/functions/convert";

describe(convert.name, () => {
  test("weeks => milliseconds", () => {
    const actual = convert(1 as Weeks, "weeks", "milliseconds");
    const expected = 604_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => seconds", () => {
    const actual = convert(1 as Weeks, "weeks", "seconds");
    const expected = 604_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => minutes", () => {
    const actual = convert(1 as Weeks, "weeks", "minutes");
    const expected = 10_080 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => hours", () => {
    const actual = convert(1 as Weeks, "weeks", "hours");
    const expected = 168 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => days", () => {
    const actual = convert(1 as Weeks, "weeks", "days");
    const expected = 7 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => weeks", () => {
    const actual = convert(1 as Weeks, "weeks", "weeks");
    const expected = 1 as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => months (without passing start date)", () => {
    const actual = convert(213.0625 as Weeks, "weeks", "months");
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 month (for January)", () => {
    const actual = convert((4 + 3 / 7) as Weeks, "weeks", "months", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 month (for February)", () => {
    const actual = convert(4 as Weeks, "weeks", "months", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 month (for February, leap year)", () => {
    const actual = convert((4 + 1 / 7) as Weeks, "weeks", "months", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 month (for March)", () => {
    const actual = convert((4 + 3 / 7) as Weeks, "weeks", "months", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 month (for April)", () => {
    const actual = convert((4 + 2 / 7) as Weeks, "weeks", "months", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 month (for May)", () => {
    const actual = convert((4 + 3 / 7) as Weeks, "weeks", "months", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 month (for June)", () => {
    const actual = convert((4 + 2 / 7) as Weeks, "weeks", "months", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 month (for July)", () => {
    const actual = convert((4 + 3 / 7) as Weeks, "weeks", "months", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 month (for August)", () => {
    const actual = convert((4 + 3 / 7) as Weeks, "weeks", "months", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 month (for September)", () => {
    const actual = convert((4 + 2 / 7) as Weeks, "weeks", "months", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 month (for October)", () => {
    const actual = convert((4 + 3 / 7) as Weeks, "weeks", "months", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 month (for November)", () => {
    const actual = convert((4 + 2 / 7) as Weeks, "weeks", "months", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 month (for December)", () => {
    const actual = convert((4 + 3 / 7) as Weeks, "weeks", "months", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 2 months", () => {
    const actual = convert((8 + 6 / 7) as Weeks, "weeks", "months", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 2 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 6 months", () => {
    const actual = convert((25 + 6 / 7) as Weeks, "weeks", "months", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 6 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 0.5 months", () => {
    const actual = convert((2 + 1 / 7) as Weeks, "weeks", "months", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 0.5 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 48 months", () => {
    const actual = convert((208 + 5 / 7) as Weeks, "weeks", "months", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = 48 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 642 months", () => {
    const actual = convert((2781 + 4 / 7) as Weeks, "weeks", "months", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = 642 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => years (without passing start date)", () => {
    const actual = convert((52 + 1.25 / 7) as Weeks, "weeks", "years");
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 year (for 2021)", () => {
    const actual = convert((52 + 1 / 7) as Weeks, "weeks", "years", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 1 year (for 2020, leap year)", () => {
    const actual = convert((52 + 2 / 7) as Weeks, "weeks", "years", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => 4 years (for 2020)", () => {
    const actual = convert((208 + 5 / 7) as Weeks, "weeks", "years", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 4 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => decades (for 2020)", () => {
    const actual = convert((521 + 6 / 7) as Weeks, "weeks", "decades", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Decades;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => centuries (for 2020)", () => {
    const actual = convert((5_217 + 5 / 7) as Weeks, "weeks", "centuries", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Centuries;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("weeks => millenniums (for 2020)", () => {
    const actual = convert((52_177 + 3 / 7) as Weeks, "weeks", "millenniums", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Millenniums;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

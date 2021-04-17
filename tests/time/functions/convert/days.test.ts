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
  test("days => milliseconds", () => {
    const actual = convert(1 as Days, "days", "milliseconds");
    const expected = 86_400_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => seconds", () => {
    const actual = convert(1 as Days, "days", "seconds");
    const expected = 86_400 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => minutes", () => {
    const actual = convert(1 as Days, "days", "minutes");
    const expected = 1_440 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => hours", () => {
    const actual = convert(1 as Days, "days", "hours");
    const expected = 24 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => days", () => {
    const actual = convert(1 as Days, "days", "days");
    const expected = 1 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => weeks", () => {
    const actual = convert(7 as Days, "days", "weeks");
    const expected = 1 as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => months (without passing start date)", () => {
    const actual = convert(30.4375 as Days, "days", "months");
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 month (for January)", () => {
    const actual = convert(31 as Days, "days", "months", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 month (for February)", () => {
    const actual = convert(28 as Days, "days", "months", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 month (for February, leap year)", () => {
    const actual = convert(29 as Days, "days", "months", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 month (for March)", () => {
    const actual = convert(31 as Days, "days", "months", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 month (for April)", () => {
    const actual = convert(30 as Days, "days", "months", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 month (for May)", () => {
    const actual = convert(31 as Days, "days", "months", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 month (for June)", () => {
    const actual = convert(30 as Days, "days", "months", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 month (for July)", () => {
    const actual = convert(31 as Days, "days", "months", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 month (for August)", () => {
    const actual = convert(31 as Days, "days", "months", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 month (for September)", () => {
    const actual = convert(30 as Days, "days", "months", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 month (for October)", () => {
    const actual = convert(31 as Days, "days", "months", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 month (for November)", () => {
    const actual = convert(30 as Days, "days", "months", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 month (for December)", () => {
    const actual = convert(31 as Days, "days", "months", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 2 months", () => {
    const actual = convert(62 as Days, "days", "months", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 2 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 6 months", () => {
    const actual = convert(181 as Days, "days", "months", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 6 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 0.5 months", () => {
    const actual = convert(15 as Days, "days", "months", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 0.5 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 48 months", () => {
    const actual = convert(1_461 as Days, "days", "months", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = 48 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 642 months", () => {
    const actual = convert(19_541 as Days, "days", "months", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = 642 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => years (without passing start date)", () => {
    const actual = convert(365.25 as Days, "days", "years");
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 year (for 2021)", () => {
    const actual = convert(365 as Days, "days", "years", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 1 year (for 2020, leap year)", () => {
    const actual = convert(366 as Days, "days", "years", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => 4 years (for 2020)", () => {
    const actual = convert(1_461 as Days, "days", "years", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 4 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => decades (for 2020)", () => {
    const actual = convert(3_653 as Days, "days", "decades", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Decades;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => centuries (for 2020)", () => {
    const actual = convert(36_524 as Days, "days", "centuries", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Centuries;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("days => millenniums (for 2020)", () => {
    const actual = convert(365_242 as Days, "days", "millenniums", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Millenniums;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

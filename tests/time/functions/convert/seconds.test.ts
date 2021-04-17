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
  test("seconds => milliseconds", () => {
    const actual = convert(1 as Seconds, "seconds", "milliseconds");
    const expected = 1_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => seconds", () => {
    const actual = convert(1 as Seconds, "seconds", "seconds");
    const expected = 1 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => minutes", () => {
    const actual = convert(60 as Seconds, "seconds", "minutes");
    const expected = 1 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => hours", () => {
    const actual = convert(3_600 as Seconds, "seconds", "hours");
    const expected = 1 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => days", () => {
    const actual = convert(86_400 as Seconds, "seconds", "days");
    const expected = 1 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => weeks", () => {
    const actual = convert(604_800 as Seconds, "seconds", "weeks");
    const expected = 1 as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => months (without passing start date)", () => {
    const actual = convert(2_629_800 as Seconds, "seconds", "months");
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 month (for January)", () => {
    const actual = convert(2_678_400 as Seconds, "seconds", "months", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 month (for February)", () => {
    const actual = convert(2_419_200 as Seconds, "seconds", "months", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 month (for February, leap year)", () => {
    const actual = convert(2_505_600 as Seconds, "seconds", "months", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 month (for March)", () => {
    const actual = convert(2_678_400 as Seconds, "seconds", "months", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 month (for April)", () => {
    const actual = convert(2_592_000 as Seconds, "seconds", "months", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 month (for May)", () => {
    const actual = convert(2_678_400 as Seconds, "seconds", "months", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 month (for June)", () => {
    const actual = convert(2_592_000 as Seconds, "seconds", "months", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 month (for July)", () => {
    const actual = convert(2_678_400 as Seconds, "seconds", "months", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 month (for August)", () => {
    const actual = convert(2_678_400 as Seconds, "seconds", "months", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 month (for September)", () => {
    const actual = convert(2_592_000 as Seconds, "seconds", "months", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 month (for October)", () => {
    const actual = convert(2_678_400 as Seconds, "seconds", "months", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 month (for November)", () => {
    const actual = convert(2_592_000 as Seconds, "seconds", "months", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 month (for December)", () => {
    const actual = convert(2_678_400 as Seconds, "seconds", "months", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 2 months", () => {
    const actual = convert(5_356_800 as Seconds, "seconds", "months", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 2 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 6 months", () => {
    const actual = convert(15_638_400 as Seconds, "seconds", "months", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 6 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 0.5 months", () => {
    const actual = convert(1_296_000 as Seconds, "seconds", "months", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 0.5 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 48 months", () => {
    const actual = convert(126_230_400 as Seconds, "seconds", "months", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = 48 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 642 months", () => {
    const actual = convert(1_688_342_400 as Seconds, "seconds", "months", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = 642 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => years (without passing start date)", () => {
    const actual = convert(31_557_600 as Seconds, "seconds", "years");
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 year (for 2021)", () => {
    const actual = convert(31_536_000 as Seconds, "seconds", "years", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 1 year (for 2020, leap year)", () => {
    const actual = convert(31_622_400 as Seconds, "seconds", "years", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => 4 years (for 2020)", () => {
    const actual = convert(126_230_400 as Seconds, "seconds", "years", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 4 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => decades (for 2020)", () => {
    const actual = convert(315_619_200 as Seconds, "seconds", "decades", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Decades;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => decades (for 2020)", () => {
    const actual = convert(3_155_673_600 as Seconds, "seconds", "centuries", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Centuries;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => centuries (for 2020)", () => {
    const actual = convert(3_155_673_600 as Seconds, "seconds", "centuries", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Centuries;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("seconds => millenniums (for 2020)", () => {
    const actual = convert(
      31_556_908_800 as Seconds,
      "seconds",
      "millenniums",
      { month: "January", year: 2020 as Years }
    );
    const expected = 1 as Millenniums;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

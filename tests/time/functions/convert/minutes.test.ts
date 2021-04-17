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
  test("minutes => milliseconds", () => {
    const actual = convert(1 as Minutes, "minutes", "milliseconds");
    const expected = 60_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => seconds", () => {
    const actual = convert(1 as Minutes, "minutes", "seconds");
    const expected = 60 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => minutes", () => {
    const actual = convert(1 as Minutes, "minutes", "minutes");
    const expected = 1 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => hours", () => {
    const actual = convert(60 as Minutes, "minutes", "hours");
    const expected = 1 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => days", () => {
    const actual = convert(1_440 as Minutes, "minutes", "days");
    const expected = 1 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => weeks", () => {
    const actual = convert(10_080 as Minutes, "minutes", "weeks");
    const expected = 1 as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => months (without passing start date)", () => {
    const actual = convert(43_830 as Minutes, "minutes", "months");
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 month (for January)", () => {
    const actual = convert(44_640 as Minutes, "minutes", "months", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 month (for February)", () => {
    const actual = convert(40_320 as Minutes, "minutes", "months", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 month (for February, leap year)", () => {
    const actual = convert(41_760 as Minutes, "minutes", "months", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 month (for March)", () => {
    const actual = convert(44_640 as Minutes, "minutes", "months", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 month (for April)", () => {
    const actual = convert(43_200 as Minutes, "minutes", "months", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 month (for May)", () => {
    const actual = convert(44_640 as Minutes, "minutes", "months", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 month (for June)", () => {
    const actual = convert(43_200 as Minutes, "minutes", "months", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 month (for July)", () => {
    const actual = convert(44_640 as Minutes, "minutes", "months", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 month (for August)", () => {
    const actual = convert(44_640 as Minutes, "minutes", "months", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 month (for September)", () => {
    const actual = convert(43_200 as Minutes, "minutes", "months", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 month (for October)", () => {
    const actual = convert(44_640 as Minutes, "minutes", "months", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 month (for November)", () => {
    const actual = convert(43_200 as Minutes, "minutes", "months", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 month (for December)", () => {
    const actual = convert(44_640 as Minutes, "minutes", "months", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 2 months", () => {
    const actual = convert(89_280 as Minutes, "minutes", "months", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 2 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 6 months", () => {
    const actual = convert(260_640 as Minutes, "minutes", "months", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 6 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 0.5 months", () => {
    const actual = convert(21_600 as Minutes, "minutes", "months", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 0.5 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 48 months", () => {
    const actual = convert(2_103_840 as Minutes, "minutes", "months", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = 48 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 642 months", () => {
    const actual = convert(28_139_040 as Minutes, "minutes", "months", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = 642 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => years (without passing start date)", () => {
    const actual = convert(525_960 as Minutes, "minutes", "years");
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 year (for 2021)", () => {
    const actual = convert(525_600 as Minutes, "minutes", "years", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 1 year (for 2020, leap year)", () => {
    const actual = convert(527_040 as Minutes, "minutes", "years", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => 4 years (for 2020)", () => {
    const actual = convert(2_103_840 as Minutes, "minutes", "years", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 4 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => decades (for 2020)", () => {
    const actual = convert(5_260_320 as Minutes, "minutes", "decades", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Decades;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => centuries (for 2020)", () => {
    const actual = convert(52_594_560 as Minutes, "minutes", "centuries", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Centuries;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("minutes => millenniums (for 2020)", () => {
    const actual = convert(525_948_480 as Minutes, "minutes", "millenniums", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Millenniums;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

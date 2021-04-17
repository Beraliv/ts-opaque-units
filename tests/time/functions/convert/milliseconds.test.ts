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
  test("milliseconds => milliseconds", () => {
    const actual = convert(
      1_000 as Milliseconds,
      "milliseconds",
      "milliseconds"
    );
    const expected = 1_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => seconds", () => {
    const actual = convert(1_000 as Milliseconds, "milliseconds", "seconds");
    const expected = 1 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => minutes", () => {
    const actual = convert(60_000 as Milliseconds, "milliseconds", "minutes");
    const expected = 1 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => hours", () => {
    const actual = convert(3_600_000 as Milliseconds, "milliseconds", "hours");
    const expected = 1 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => days", () => {
    const actual = convert(86_400_000 as Milliseconds, "milliseconds", "days");
    const expected = 1 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => weeks", () => {
    const actual = convert(
      604_800_000 as Milliseconds,
      "milliseconds",
      "weeks"
    );
    const expected = 1 as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => months (without passing start date)", () => {
    const actual = convert(
      2_629_800_000 as Milliseconds,
      "milliseconds",
      "months"
    );
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 month (for January)", () => {
    const actual = convert(
      2_678_400_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "January", year: 2021 as Years }
    );
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 month (for February)", () => {
    const actual = convert(
      2_419_200_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "February", year: 2021 as Years }
    );
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 month (for February, leap year)", () => {
    const actual = convert(
      2_505_600_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "February", year: 2016 as Years }
    );
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 month (for March)", () => {
    const actual = convert(
      2_678_400_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "March", year: 2021 as Years }
    );
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 month (for April)", () => {
    const actual = convert(
      2_592_000_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "April", year: 2021 as Years }
    );
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 month (for May)", () => {
    const actual = convert(
      2_678_400_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "May", year: 2021 as Years }
    );
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 month (for June)", () => {
    const actual = convert(
      2_592_000_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "June", year: 2021 as Years }
    );
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 month (for July)", () => {
    const actual = convert(
      2_678_400_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "July", year: 2021 as Years }
    );
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 month (for August)", () => {
    const actual = convert(
      2_678_400_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "August", year: 2021 as Years }
    );
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 month (for September)", () => {
    const actual = convert(
      2_592_000_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "September", year: 2021 as Years }
    );
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 month (for October)", () => {
    const actual = convert(
      2_678_400_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "October", year: 2021 as Years }
    );
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 month (for November)", () => {
    const actual = convert(
      2_592_000_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "November", year: 2021 as Years }
    );
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 month (for December)", () => {
    const actual = convert(
      2_678_400_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "December", year: 2021 as Years }
    );
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 2 months", () => {
    const actual = convert(
      5_356_800_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "July", year: 2021 as Years }
    );
    const expected = 2 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 6 months", () => {
    const actual = convert(
      15_638_400_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "September", year: 2021 as Years }
    );
    const expected = 6 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 0.5 months", () => {
    const actual = convert(
      1_296_000_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "November", year: 2021 as Years }
    );
    const expected = 0.5 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 48 months", () => {
    const actual = convert(
      126_230_400_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "March", year: 1946 as Years }
    );
    const expected = 48 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 642 months", () => {
    const actual = convert(
      1_688_342_400_000 as Milliseconds,
      "milliseconds",
      "months",
      { month: "October", year: 1967 as Years }
    );
    const expected = 642 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => years (without passing start date)", () => {
    const actual = convert(
      31_557_600_000 as Milliseconds,
      "milliseconds",
      "years"
    );
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 year (for 2021)", () => {
    const actual = convert(
      31_536_000_000 as Milliseconds,
      "milliseconds",
      "years",
      { month: "January", year: 2021 as Years }
    );
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 1 year (for 2020, leap year)", () => {
    const actual = convert(
      31_622_400_000 as Milliseconds,
      "milliseconds",
      "years",
      { month: "January", year: 2020 as Years }
    );
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => 4 years (for 2020)", () => {
    const actual = convert(
      126_230_400_000 as Milliseconds,
      "milliseconds",
      "years",
      { month: "January", year: 2020 as Years }
    );
    const expected = 4 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => decades (for 2020)", () => {
    const actual = convert(
      315_619_200_000 as Milliseconds,
      "milliseconds",
      "decades",
      { month: "January", year: 2020 as Years }
    );
    const expected = 1 as Decades;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => centuries (for 2020)", () => {
    const actual = convert(
      3_155_673_600_000 as Milliseconds,
      "milliseconds",
      "centuries",
      { month: "January", year: 2020 as Years }
    );
    const expected = 1 as Centuries;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("milliseconds => millenniums (for 2020)", () => {
    const actual = convert(
      31_556_908_800_000 as Milliseconds,
      "milliseconds",
      "millenniums",
      { month: "January", year: 2020 as Years }
    );
    const expected = 1 as Millenniums;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

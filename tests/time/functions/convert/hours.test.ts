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
  test("hours => milliseconds", () => {
    const actual = convert(1 as Hours, "hours", "milliseconds");
    const expected = 3_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => seconds", () => {
    const actual = convert(1 as Hours, "hours", "seconds");
    const expected = 3_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => minutes", () => {
    const actual = convert(1 as Hours, "hours", "minutes");
    const expected = 60 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => hours", () => {
    const actual = convert(1 as Hours, "hours", "hours");
    const expected = 1 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => days", () => {
    const actual = convert(24 as Hours, "hours", "days");
    const expected = 1 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => weeks", () => {
    const actual = convert(168 as Hours, "hours", "weeks");
    const expected = 1 as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => months (without passing start date)", () => {
    const actual = convert(730.5 as Hours, "hours", "months");
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 month (for January)", () => {
    const actual = convert(744 as Hours, "hours", "months", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 month (for February)", () => {
    const actual = convert(672 as Hours, "hours", "months", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 month (for February, leap year)", () => {
    const actual = convert(696 as Hours, "hours", "months", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 month (for March)", () => {
    const actual = convert(744 as Hours, "hours", "months", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 month (for April)", () => {
    const actual = convert(720 as Hours, "hours", "months", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 month (for May)", () => {
    const actual = convert(744 as Hours, "hours", "months", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 month (for June)", () => {
    const actual = convert(720 as Hours, "hours", "months", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 month (for July)", () => {
    const actual = convert(744 as Hours, "hours", "months", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 month (for August)", () => {
    const actual = convert(744 as Hours, "hours", "months", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 month (for September)", () => {
    const actual = convert(720 as Hours, "hours", "months", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 month (for October)", () => {
    const actual = convert(744 as Hours, "hours", "months", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 month (for November)", () => {
    const actual = convert(720 as Hours, "hours", "months", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 month (for December)", () => {
    const actual = convert(744 as Hours, "hours", "months", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 2 months", () => {
    const actual = convert(1_488 as Hours, "hours", "months", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 2 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 6 months", () => {
    const actual = convert(4_344 as Hours, "hours", "months", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 6 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 0.5 months", () => {
    const actual = convert(360 as Hours, "hours", "months", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 0.5 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 48 months", () => {
    const actual = convert(35_064 as Hours, "hours", "months", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = 48 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 642 months", () => {
    const actual = convert(468_984 as Hours, "hours", "months", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = 642 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => years (without passing start date)", () => {
    const actual = convert(8_766 as Hours, "hours", "years");
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 year (for 2021)", () => {
    const actual = convert(8_760 as Hours, "hours", "years", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 1 year (for 2020, leap year)", () => {
    const actual = convert(8_784 as Hours, "hours", "years", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => 4 years (for 2020)", () => {
    const actual = convert(35_064 as Hours, "hours", "years", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 4 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => decades (for 2020)", () => {
    const actual = convert(87_672 as Hours, "hours", "decades", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Decades;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => centuries (for 2020)", () => {
    const actual = convert(876_576 as Hours, "hours", "centuries", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Centuries;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("hours => millenniums (for 2020)", () => {
    const actual = convert(8_765_808 as Hours, "hours", "millenniums", {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 1 as Millenniums;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

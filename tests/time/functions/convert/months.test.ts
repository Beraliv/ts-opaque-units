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
  test("months => milliseconds (without passing start date)", () => {
    const actual = convert(1 as Months, "months", "milliseconds");
    const expected = 2_629_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });
  test("1 month => milliseconds (for January)", () => {
    const actual = convert(1 as Months, "months", "milliseconds", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 2_678_400_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => milliseconds (for February)", () => {
    const actual = convert(1 as Months, "months", "milliseconds", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 2_419_200_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => milliseconds (for February, leap year)", () => {
    const actual = convert(1 as Months, "months", "milliseconds", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 2_505_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => milliseconds (for March)", () => {
    const actual = convert(1 as Months, "months", "milliseconds", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 2_678_400_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => milliseconds (for April)", () => {
    const actual = convert(1 as Months, "months", "milliseconds", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 2_592_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => milliseconds (for May)", () => {
    const actual = convert(1 as Months, "months", "milliseconds", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 2_678_400_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => milliseconds (for June)", () => {
    const actual = convert(1 as Months, "months", "milliseconds", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 2_592_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => milliseconds (for July)", () => {
    const actual = convert(1 as Months, "months", "milliseconds", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 2_678_400_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => milliseconds (for August)", () => {
    const actual = convert(1 as Months, "months", "milliseconds", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 2_678_400_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => milliseconds (for September)", () => {
    const actual = convert(1 as Months, "months", "milliseconds", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 2_592_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => milliseconds (for October)", () => {
    const actual = convert(1 as Months, "months", "milliseconds", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 2_678_400_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => milliseconds (for November)", () => {
    const actual = convert(1 as Months, "months", "milliseconds", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 2_592_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => milliseconds (for December)", () => {
    const actual = convert(1 as Months, "months", "milliseconds", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 2_678_400_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("months => seconds (without passing start date)", () => {
    const actual = convert(1 as Months, "months", "seconds");
    const expected = 2_629_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => seconds (for January)", () => {
    const actual = convert(1 as Months, "months", "seconds", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 2_678_400 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => seconds (for February)", () => {
    const actual = convert(1 as Months, "months", "seconds", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 2_419_200 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => seconds (for February, leap year)", () => {
    const actual = convert(1 as Months, "months", "seconds", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 2_505_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => seconds (for March)", () => {
    const actual = convert(1 as Months, "months", "seconds", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 2_678_400 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => seconds (for April)", () => {
    const actual = convert(1 as Months, "months", "seconds", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 2_592_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => seconds (for May)", () => {
    const actual = convert(1 as Months, "months", "seconds", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 2_678_400 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => seconds (for June)", () => {
    const actual = convert(1 as Months, "months", "seconds", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 2_592_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => seconds (for July)", () => {
    const actual = convert(1 as Months, "months", "seconds", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 2_678_400 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => seconds (for August)", () => {
    const actual = convert(1 as Months, "months", "seconds", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 2_678_400 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => seconds (for September)", () => {
    const actual = convert(1 as Months, "months", "seconds", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 2_592_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => seconds (for October)", () => {
    const actual = convert(1 as Months, "months", "seconds", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 2_678_400 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => seconds (for November)", () => {
    const actual = convert(1 as Months, "months", "seconds", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 2_592_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => seconds (for December)", () => {
    const actual = convert(1 as Months, "months", "seconds", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 2_678_400 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("months => minutes (without passing start date)", () => {
    const actual = convert(1 as Months, "months", "minutes");
    const expected = 43_830 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => minutes (for January)", () => {
    const actual = convert(1 as Months, "months", "minutes", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 44_640 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => minutes (for February)", () => {
    const actual = convert(1 as Months, "months", "minutes", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 40_320 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => minutes (for February, leap year)", () => {
    const actual = convert(1 as Months, "months", "minutes", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 41_760 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => minutes (for March)", () => {
    const actual = convert(1 as Months, "months", "minutes", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 44_640 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => minutes (for April)", () => {
    const actual = convert(1 as Months, "months", "minutes", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 43_200 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => minutes (for May)", () => {
    const actual = convert(1 as Months, "months", "minutes", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 44_640 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => minutes (for June)", () => {
    const actual = convert(1 as Months, "months", "minutes", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 43_200 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => minutes (for July)", () => {
    const actual = convert(1 as Months, "months", "minutes", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 44_640 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => minutes (for August)", () => {
    const actual = convert(1 as Months, "months", "minutes", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 44_640 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => minutes (for September)", () => {
    const actual = convert(1 as Months, "months", "minutes", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 43_200 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => minutes (for October)", () => {
    const actual = convert(1 as Months, "months", "minutes", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 44_640 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => minutes (for November)", () => {
    const actual = convert(1 as Months, "months", "minutes", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 43_200 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => minutes (for December)", () => {
    const actual = convert(1 as Months, "months", "minutes", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 44_640 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("months => hours (without passing start date)", () => {
    const actual = convert(1 as Months, "months", "hours");
    const expected = 730.5 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => hours (for January)", () => {
    const actual = convert(1 as Months, "months", "hours", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 744 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => hours (for February)", () => {
    const actual = convert(1 as Months, "months", "hours", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 672 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => hours (for February, leap year)", () => {
    const actual = convert(1 as Months, "months", "hours", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 696 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => hours (for March)", () => {
    const actual = convert(1 as Months, "months", "hours", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 744 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => hours (for April)", () => {
    const actual = convert(1 as Months, "months", "hours", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 720 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => hours (for May)", () => {
    const actual = convert(1 as Months, "months", "hours", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 744 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => hours (for June)", () => {
    const actual = convert(1 as Months, "months", "hours", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 720 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => hours (for July)", () => {
    const actual = convert(1 as Months, "months", "hours", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 744 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => hours (for August)", () => {
    const actual = convert(1 as Months, "months", "hours", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 744 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => hours (for September)", () => {
    const actual = convert(1 as Months, "months", "hours", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 720 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => hours (for October)", () => {
    const actual = convert(1 as Months, "months", "hours", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 744 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => hours (for November)", () => {
    const actual = convert(1 as Months, "months", "hours", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 720 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => hours (for December)", () => {
    const actual = convert(1 as Months, "months", "hours", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 744 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("months => days (without passing start date)", () => {
    const actual = convert(1 as Months, "months", "days");
    const expected = 30.4375 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => days (for January)", () => {
    const actual = convert(1 as Months, "months", "days", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 31 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => days (for February)", () => {
    const actual = convert(1 as Months, "months", "days", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 28 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => days (for February, leap year)", () => {
    const actual = convert(1 as Months, "months", "days", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 29 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => days (for March)", () => {
    const actual = convert(1 as Months, "months", "days", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 31 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => days (for April)", () => {
    const actual = convert(1 as Months, "months", "days", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 30 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => days (for May)", () => {
    const actual = convert(1 as Months, "months", "days", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 31 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => days (for June)", () => {
    const actual = convert(1 as Months, "months", "days", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 30 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => days (for July)", () => {
    const actual = convert(1 as Months, "months", "days", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 31 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => days (for August)", () => {
    const actual = convert(1 as Months, "months", "days", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 31 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => days (for September)", () => {
    const actual = convert(1 as Months, "months", "days", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 30 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => days (for October)", () => {
    const actual = convert(1 as Months, "months", "days", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 31 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => days (for November)", () => {
    const actual = convert(1 as Months, "months", "days", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 30 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => days (for December)", () => {
    const actual = convert(1 as Months, "months", "days", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 31 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("2 months => days", () => {
    const actual = convert(2 as Months, "months", "days", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 62 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("6 months => days", () => {
    const actual = convert(6 as Months, "months", "days", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 181 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("0.5 months => days", () => {
    const actual = convert(0.5 as Months, "months", "days", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 15 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("48 months => days", () => {
    const actual = convert(48 as Months, "months", "days", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = 1_461 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("642 months => days", () => {
    const actual = convert(642 as Months, "months", "days", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = 19_541 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("months => weeks (without passing start date)", () => {
    const actual = convert(1 as Months, "months", "weeks");
    const expected = 4.348214285714286 as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => weeks (for January)", () => {
    const actual = convert(1 as Months, "months", "weeks", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = (4 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => weeks (for February)", () => {
    const actual = convert(1 as Months, "months", "weeks", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 4 as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => weeks (for February, leap year)", () => {
    const actual = convert(1 as Months, "months", "weeks", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = (4 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => weeks (for March)", () => {
    const actual = convert(1 as Months, "months", "weeks", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = (4 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => weeks (for April)", () => {
    const actual = convert(1 as Months, "months", "weeks", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = (4 + 2 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => weeks (for May)", () => {
    const actual = convert(1 as Months, "months", "weeks", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = (4 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => weeks (for June)", () => {
    const actual = convert(1 as Months, "months", "weeks", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = (4 + 2 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => weeks (for July)", () => {
    const actual = convert(1 as Months, "months", "weeks", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = (4 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => weeks (for August)", () => {
    const actual = convert(1 as Months, "months", "weeks", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = (4 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => weeks (for September)", () => {
    const actual = convert(1 as Months, "months", "weeks", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = (4 + 2 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => weeks (for October)", () => {
    const actual = convert(1 as Months, "months", "weeks", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = (4 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => weeks (for November)", () => {
    const actual = convert(1 as Months, "months", "weeks", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = (4 + 2 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 month => weeks (for December)", () => {
    const actual = convert(1 as Months, "months", "weeks", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = (4 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("2 months => weeks", () => {
    const actual = convert(2 as Months, "months", "weeks", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = (8 + 6 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("6 months => weeks", () => {
    const actual = convert(6 as Months, "months", "weeks", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = (25 + 6 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("0.5 months => weeks", () => {
    const actual = convert(0.5 as Months, "months", "weeks", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = (2 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("48 months => weeks", () => {
    const actual = convert(48 as Months, "months", "weeks", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = (208 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("642 months => weeks", () => {
    const actual = convert(642 as Months, "months", "weeks", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = (2791 + 4 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("months => months", () => {
    const actual = convert(1 as Months, "months", "months");
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("months => years", () => {
    const actual = convert(12 as Months, "months", "years");
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("months => 4 years", () => {
    const actual = convert(48 as Months, "months", "years");
    const expected = 4 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("months => decades", () => {
    const actual = convert(120 as Months, "months", "decades");
    const expected = 1 as Decades;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("months => centuries", () => {
    const actual = convert(1_200 as Months, "months", "centuries");
    const expected = 1 as Centuries;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("months => millenniums", () => {
    const actual = convert(12_000 as Months, "months", "millenniums");
    const expected = 1 as Millenniums;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

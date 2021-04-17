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
  test("1 year => milliseconds (without passing start date)", () => {
    const actual = convert(1 as Years, "years", "milliseconds");
    const expected = 31_557_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });
  test("1 year => milliseconds (from January)", () => {
    const actual = convert(1 as Years, "years", "milliseconds", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 31_536_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => milliseconds (from February)", () => {
    const actual = convert(1 as Years, "years", "milliseconds", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 31_536_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => milliseconds (from February, leap year)", () => {
    const actual = convert(1 as Years, "years", "milliseconds", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 31_622_400_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => milliseconds (from March)", () => {
    const actual = convert(1 as Years, "years", "milliseconds", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 31_536_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => milliseconds (from April)", () => {
    const actual = convert(1 as Years, "years", "milliseconds", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 31_536_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => milliseconds (from May)", () => {
    const actual = convert(1 as Years, "years", "milliseconds", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 31_536_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => milliseconds (from June)", () => {
    const actual = convert(1 as Years, "years", "milliseconds", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 31_536_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => milliseconds (from July)", () => {
    const actual = convert(1 as Years, "years", "milliseconds", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 31_536_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => milliseconds (from August)", () => {
    const actual = convert(1 as Years, "years", "milliseconds", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 31_536_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => milliseconds (from September)", () => {
    const actual = convert(1 as Years, "years", "milliseconds", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 31_536_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => milliseconds (from October)", () => {
    const actual = convert(1 as Years, "years", "milliseconds", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 31_536_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => milliseconds (from November)", () => {
    const actual = convert(1 as Years, "years", "milliseconds", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 31_536_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => milliseconds (from December)", () => {
    const actual = convert(1 as Years, "years", "milliseconds", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 31_536_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => seconds (without passing start date)", () => {
    const actual = convert(1 as Years, "years", "seconds");
    const expected = 31_557_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => seconds (from January)", () => {
    const actual = convert(1 as Years, "years", "seconds", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 31_536_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => seconds (from February)", () => {
    const actual = convert(1 as Years, "years", "seconds", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 31_536_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => seconds (from February, leap year)", () => {
    const actual = convert(1 as Years, "years", "seconds", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 31_622_400 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => seconds (from March)", () => {
    const actual = convert(1 as Years, "years", "seconds", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 31_536_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => seconds (from April)", () => {
    const actual = convert(1 as Years, "years", "seconds", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 31_536_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => seconds (from May)", () => {
    const actual = convert(1 as Years, "years", "seconds", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 31_536_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => seconds (from June)", () => {
    const actual = convert(1 as Years, "years", "seconds", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 31_536_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => seconds (from July)", () => {
    const actual = convert(1 as Years, "years", "seconds", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 31_536_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => seconds (from August)", () => {
    const actual = convert(1 as Years, "years", "seconds", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 31_536_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => seconds (from September)", () => {
    const actual = convert(1 as Years, "years", "seconds", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 31_536_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => seconds (from October)", () => {
    const actual = convert(1 as Years, "years", "seconds", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 31_536_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => seconds (from November)", () => {
    const actual = convert(1 as Years, "years", "seconds", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 31_536_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => seconds (from December)", () => {
    const actual = convert(1 as Years, "years", "seconds", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 31_536_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => minutes (without passing start date)", () => {
    const actual = convert(1 as Years, "years", "minutes");
    const expected = 525_960 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => minutes (from January)", () => {
    const actual = convert(1 as Years, "years", "minutes", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 525_600 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => minutes (from February)", () => {
    const actual = convert(1 as Years, "years", "minutes", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 525_600 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => minutes (from February, leap year)", () => {
    const actual = convert(1 as Years, "years", "minutes", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 527_040 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => minutes (from March)", () => {
    const actual = convert(1 as Years, "years", "minutes", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 525_600 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => minutes (from April)", () => {
    const actual = convert(1 as Years, "years", "minutes", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 525_600 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => minutes (from May)", () => {
    const actual = convert(1 as Years, "years", "minutes", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 525_600 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => minutes (from June)", () => {
    const actual = convert(1 as Years, "years", "minutes", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 525_600 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => minutes (from July)", () => {
    const actual = convert(1 as Years, "years", "minutes", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 525_600 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => minutes (from August)", () => {
    const actual = convert(1 as Years, "years", "minutes", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 525_600 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => minutes (from September)", () => {
    const actual = convert(1 as Years, "years", "minutes", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 525_600 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => minutes (from October)", () => {
    const actual = convert(1 as Years, "years", "minutes", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 525_600 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => minutes (from November)", () => {
    const actual = convert(1 as Years, "years", "minutes", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 525_600 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => minutes (from December)", () => {
    const actual = convert(1 as Years, "years", "minutes", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 525_600 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("years => hours (without passing start date)", () => {
    const actual = convert(1 as Years, "years", "hours");
    const expected = 8_766 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => hours (from January)", () => {
    const actual = convert(1 as Years, "years", "hours", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 8_760 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => hours (from February)", () => {
    const actual = convert(1 as Years, "years", "hours", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 8_760 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => hours (from February, leap year)", () => {
    const actual = convert(1 as Years, "years", "hours", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 8_784 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => hours (from March)", () => {
    const actual = convert(1 as Years, "years", "hours", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 8_760 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => hours (from April)", () => {
    const actual = convert(1 as Years, "years", "hours", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 8_760 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => hours (from May)", () => {
    const actual = convert(1 as Years, "years", "hours", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 8_760 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => hours (from June)", () => {
    const actual = convert(1 as Years, "years", "hours", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 8_760 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => hours (from July)", () => {
    const actual = convert(1 as Years, "years", "hours", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 8_760 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => hours (from August)", () => {
    const actual = convert(1 as Years, "years", "hours", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 8_760 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => hours (from September)", () => {
    const actual = convert(1 as Years, "years", "hours", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 8_760 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => hours (from October)", () => {
    const actual = convert(1 as Years, "years", "hours", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 8_760 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => hours (from November)", () => {
    const actual = convert(1 as Years, "years", "hours", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 8_760 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => hours (from December)", () => {
    const actual = convert(1 as Years, "years", "hours", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 8_760 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => days (without passing start date)", () => {
    const actual = convert(1 as Years, "years", "days");
    const expected = 365.25 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => days (from January)", () => {
    const actual = convert(1 as Years, "years", "days", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 365 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => days (from February)", () => {
    const actual = convert(1 as Years, "years", "days", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 365 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => days (from February, leap year)", () => {
    const actual = convert(1 as Years, "years", "days", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 366 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => days (from March)", () => {
    const actual = convert(1 as Years, "years", "days", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 365 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => days (from April)", () => {
    const actual = convert(1 as Years, "years", "days", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 365 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => days (from May)", () => {
    const actual = convert(1 as Years, "years", "days", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 365 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => days (from June)", () => {
    const actual = convert(1 as Years, "years", "days", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 365 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => days (from July)", () => {
    const actual = convert(1 as Years, "years", "days", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 365 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => days (from August)", () => {
    const actual = convert(1 as Years, "years", "days", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 365 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => days (from September)", () => {
    const actual = convert(1 as Years, "years", "days", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 365 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => days (from October)", () => {
    const actual = convert(1 as Years, "years", "days", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 365 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => days (from November)", () => {
    const actual = convert(1 as Years, "years", "days", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 365 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => days (from December)", () => {
    const actual = convert(1 as Years, "years", "days", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 365 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("2 / 12 years => days", () => {
    const actual = convert((2 / 12) as Years, "years", "days", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 62 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("0.5 years => days", () => {
    const actual = convert(0.5 as Years, "years", "days", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 181 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 / 24 years => days", () => {
    const actual = convert((1 / 24) as Years, "years", "days", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 15 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("4 years => days", () => {
    const actual = convert(4 as Years, "years", "days", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = 1_461 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("53.5 years => days", () => {
    const actual = convert(53.5 as Years, "years", "days", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = 19_541 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => weeks (without passing start date)", () => {
    const actual = convert(1 as Years, "years", "weeks");
    const expected = 52.17857142857143 as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => weeks (from January)", () => {
    const actual = convert(1 as Years, "years", "weeks", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = (52 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => weeks (from February)", () => {
    const actual = convert(1 as Years, "years", "weeks", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = (52 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => weeks (from February, leap year)", () => {
    const actual = convert(1 as Years, "years", "weeks", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = (52 + 2 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => weeks (from March)", () => {
    const actual = convert(1 as Years, "years", "weeks", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = (52 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => weeks (from April)", () => {
    const actual = convert(1 as Years, "years", "weeks", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = (52 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => weeks (from May)", () => {
    const actual = convert(1 as Years, "years", "weeks", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = (52 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => weeks (from June)", () => {
    const actual = convert(1 as Years, "years", "weeks", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = (52 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => weeks (from July)", () => {
    const actual = convert(1 as Years, "years", "weeks", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = (52 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => weeks (from August)", () => {
    const actual = convert(1 as Years, "years", "weeks", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = (52 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => weeks (from September)", () => {
    const actual = convert(1 as Years, "years", "weeks", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = (52 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => weeks (from October)", () => {
    const actual = convert(1 as Years, "years", "weeks", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = (52 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => weeks (from November)", () => {
    const actual = convert(1 as Years, "years", "weeks", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = (52 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 year => weeks (from December)", () => {
    const actual = convert(1 as Years, "years", "weeks", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = (52 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("2 / 12 years => weeks", () => {
    const actual = convert((2 / 12) as Years, "years", "weeks", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = (8 + 6 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("0.5 years => weeks", () => {
    const actual = convert(0.5 as Years, "years", "weeks", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = (25 + 6 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 / 24 years => weeks", () => {
    const actual = convert((1 / 24) as Years, "years", "weeks", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = (2 + 1 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("4 years => weeks", () => {
    const actual = convert(4 as Years, "years", "weeks", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = (208 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("53.5 years => weeks", () => {
    const actual = convert(53.5 as Years, "years", "weeks", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = (2791 + 4 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("years => months", () => {
    const actual = convert(1 as Years, "years", "months");
    const expected = 12 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("years => years", () => {
    const actual = convert(1 as Years, "years", "years");
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("years => decades", () => {
    const actual = convert(10 as Years, "years", "decades");
    const expected = 1 as Decades;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("years => centuries", () => {
    const actual = convert(100 as Years, "years", "centuries");
    const expected = 1 as Centuries;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("years => millenniums", () => {
    const actual = convert(1_000 as Years, "years", "millenniums");
    const expected = 1 as Millenniums;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

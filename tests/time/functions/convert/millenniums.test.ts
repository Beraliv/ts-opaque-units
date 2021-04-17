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
  test("1 millennium => milliseconds (without passing start date)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "milliseconds");
    const expected = 31_557_600_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });
  test("1 millennium => milliseconds (from January)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "milliseconds", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => milliseconds (from February)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "milliseconds", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => milliseconds (from February, leap year)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "milliseconds", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 31_556_908_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => milliseconds (from March)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "milliseconds", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => milliseconds (from April)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "milliseconds", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => milliseconds (from May)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "milliseconds", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => milliseconds (from June)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "milliseconds", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => milliseconds (from July)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "milliseconds", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => milliseconds (from August)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "milliseconds", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => milliseconds (from September)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "milliseconds", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => milliseconds (from October)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "milliseconds", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => milliseconds (from November)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "milliseconds", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => milliseconds (from December)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "milliseconds", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => seconds (without passing start date)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "seconds");
    const expected = 31_557_600_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => seconds (from January)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "seconds", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => seconds (from February)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "seconds", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => seconds (from February, leap year)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "seconds", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 31_556_908_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => seconds (from March)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "seconds", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => seconds (from April)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "seconds", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => seconds (from May)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "seconds", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => seconds (from June)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "seconds", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => seconds (from July)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "seconds", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => seconds (from August)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "seconds", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => seconds (from September)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "seconds", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => seconds (from October)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "seconds", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => seconds (from November)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "seconds", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => seconds (from December)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "seconds", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 31_556_908_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => minutes (without passing start date)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "minutes");
    const expected = 525_960_000 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => minutes (from January)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "minutes", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 525_948_480 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => minutes (from February)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "minutes", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 525_948_480 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => minutes (from February, leap year)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "minutes", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 525_948_480 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => minutes (from March)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "minutes", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 525_948_480 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => minutes (from April)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "minutes", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 525_948_480 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => minutes (from May)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "minutes", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 525_948_480 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => minutes (from June)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "minutes", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 525_948_480 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => minutes (from July)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "minutes", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 525_948_480 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => minutes (from August)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "minutes", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 525_948_480 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => minutes (from September)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "minutes", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 525_948_480 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => minutes (from October)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "minutes", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 525_948_480 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => minutes (from November)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "minutes", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 525_948_480 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => minutes (from December)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "minutes", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 525_948_480 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("millenniums => hours (without passing start date)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "hours");
    const expected = 8_766_000 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => hours (from January)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "hours", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 8_765_808 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => hours (from February)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "hours", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 8_765_808 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => hours (from February, leap year)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "hours", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 8_765_808 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => hours (from March)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "hours", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 8_765_808 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => hours (from April)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "hours", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 8_765_808 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => hours (from May)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "hours", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 8_765_808 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => hours (from June)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "hours", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 8_765_808 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => hours (from July)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "hours", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 8_765_808 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => hours (from August)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "hours", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 8_765_808 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => hours (from September)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "hours", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 8_765_808 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => hours (from October)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "hours", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 8_765_808 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => hours (from November)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "hours", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 8_765_808 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => hours (from December)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "hours", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 8_765_808 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => days (without passing start date)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "days");
    const expected = 365_250 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => days (from January)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "days", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 365_242 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => days (from February)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "days", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 365_242 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => days (from February, leap year)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "days", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 365_242 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => days (from March)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "days", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 365_242 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => days (from April)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "days", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 365_242 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => days (from May)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "days", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 365_242 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => days (from June)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "days", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 365_242 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => days (from July)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "days", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 365_242 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => days (from August)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "days", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 365_242 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => days (from September)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "days", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 365_242 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => days (from October)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "days", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 365_242 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => days (from November)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "days", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 365_242 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => days (from December)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "days", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 365_242 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("0.05 millenniums => days", () => {
    const actual = convert(0.05 as Millenniums, "millenniums", "days", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 18_262 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("0.4 millenniums => days", () => {
    const actual = convert(0.4 as Millenniums, "millenniums", "days", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = 146_097 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("5.35 millenniums => days", () => {
    const actual = convert(5.35 as Millenniums, "millenniums", "days", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = 1_954_048 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => weeks (without passing start date)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "weeks");
    const expected = 52178.57142857143 as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => weeks (from January)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "weeks", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = (52_177 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => weeks (from February)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "weeks", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = (52_177 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => weeks (from February, leap year)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "weeks", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = (52_177 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => weeks (from March)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "weeks", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = (52_177 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => weeks (from April)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "weeks", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = (52_177 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => weeks (from May)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "weeks", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = (52_177 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => weeks (from June)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "weeks", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = (52_177 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => weeks (from July)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "weeks", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = (52_177 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => weeks (from August)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "weeks", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = (52_177 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => weeks (from September)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "weeks", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = (52_177 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => weeks (from October)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "weeks", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = (52_177 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => weeks (from November)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "weeks", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = (52_177 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 millennium => weeks (from December)", () => {
    const actual = convert(1 as Millenniums, "millenniums", "weeks", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = (52_177 + 3 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("0.004 millenniums => weeks", () => {
    const actual = convert(0.004 as Millenniums, "millenniums", "weeks", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = (208 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("5.35 millenniums => weeks", () => {
    const actual = convert(5.35 as Millenniums, "millenniums", "weeks", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = (279_149 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("millenniums => months", () => {
    const actual = convert(1 as Millenniums, "millenniums", "months");
    const expected = 12_000 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("millenniums => years", () => {
    const actual = convert(1 as Millenniums, "millenniums", "years");
    const expected = 1_000 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("millenniums => decades", () => {
    const actual = convert(1 as Millenniums, "millenniums", "decades");
    const expected = 100 as Decades;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("millenniums => centuries", () => {
    const actual = convert(1 as Millenniums, "millenniums", "centuries");
    const expected = 10 as Centuries;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("millenniums => millenniums", () => {
    const actual = convert(1 as Millenniums, "millenniums", "millenniums");
    const expected = 1 as Millenniums;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

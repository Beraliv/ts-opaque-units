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
  test("1 century => milliseconds (without passing start date)", () => {
    const actual = convert(1 as Centuries, "centuries", "milliseconds");
    const expected = 3_155_760_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });
  test("1 century => milliseconds (from January)", () => {
    const actual = convert(1 as Centuries, "centuries", "milliseconds", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => milliseconds (from February)", () => {
    const actual = convert(1 as Centuries, "centuries", "milliseconds", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => milliseconds (from February, leap year)", () => {
    const actual = convert(1 as Centuries, "centuries", "milliseconds", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 3_155_673_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => milliseconds (from March)", () => {
    const actual = convert(1 as Centuries, "centuries", "milliseconds", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => milliseconds (from April)", () => {
    const actual = convert(1 as Centuries, "centuries", "milliseconds", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => milliseconds (from May)", () => {
    const actual = convert(1 as Centuries, "centuries", "milliseconds", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => milliseconds (from June)", () => {
    const actual = convert(1 as Centuries, "centuries", "milliseconds", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => milliseconds (from July)", () => {
    const actual = convert(1 as Centuries, "centuries", "milliseconds", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => milliseconds (from August)", () => {
    const actual = convert(1 as Centuries, "centuries", "milliseconds", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => milliseconds (from September)", () => {
    const actual = convert(1 as Centuries, "centuries", "milliseconds", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => milliseconds (from October)", () => {
    const actual = convert(1 as Centuries, "centuries", "milliseconds", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => milliseconds (from November)", () => {
    const actual = convert(1 as Centuries, "centuries", "milliseconds", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => milliseconds (from December)", () => {
    const actual = convert(1 as Centuries, "centuries", "milliseconds", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => seconds (without passing start date)", () => {
    const actual = convert(1 as Centuries, "centuries", "seconds");
    const expected = 3_155_760_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => seconds (from January)", () => {
    const actual = convert(1 as Centuries, "centuries", "seconds", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => seconds (from February)", () => {
    const actual = convert(1 as Centuries, "centuries", "seconds", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => seconds (from February, leap year)", () => {
    const actual = convert(1 as Centuries, "centuries", "seconds", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 3_155_673_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => seconds (from March)", () => {
    const actual = convert(1 as Centuries, "centuries", "seconds", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => seconds (from April)", () => {
    const actual = convert(1 as Centuries, "centuries", "seconds", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => seconds (from May)", () => {
    const actual = convert(1 as Centuries, "centuries", "seconds", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => seconds (from June)", () => {
    const actual = convert(1 as Centuries, "centuries", "seconds", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => seconds (from July)", () => {
    const actual = convert(1 as Centuries, "centuries", "seconds", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => seconds (from August)", () => {
    const actual = convert(1 as Centuries, "centuries", "seconds", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => seconds (from September)", () => {
    const actual = convert(1 as Centuries, "centuries", "seconds", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => seconds (from October)", () => {
    const actual = convert(1 as Centuries, "centuries", "seconds", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => seconds (from November)", () => {
    const actual = convert(1 as Centuries, "centuries", "seconds", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => seconds (from December)", () => {
    const actual = convert(1 as Centuries, "centuries", "seconds", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 3_155_673_600 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => minutes (without passing start date)", () => {
    const actual = convert(1 as Centuries, "centuries", "minutes");
    const expected = 52_596_000 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => minutes (from January)", () => {
    const actual = convert(1 as Centuries, "centuries", "minutes", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 52_594_560 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => minutes (from February)", () => {
    const actual = convert(1 as Centuries, "centuries", "minutes", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 52_594_560 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => minutes (from February, leap year)", () => {
    const actual = convert(1 as Centuries, "centuries", "minutes", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 52_594_560 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => minutes (from March)", () => {
    const actual = convert(1 as Centuries, "centuries", "minutes", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 52_594_560 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => minutes (from April)", () => {
    const actual = convert(1 as Centuries, "centuries", "minutes", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 52_594_560 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => minutes (from May)", () => {
    const actual = convert(1 as Centuries, "centuries", "minutes", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 52_594_560 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => minutes (from June)", () => {
    const actual = convert(1 as Centuries, "centuries", "minutes", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 52_594_560 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => minutes (from July)", () => {
    const actual = convert(1 as Centuries, "centuries", "minutes", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 52_594_560 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => minutes (from August)", () => {
    const actual = convert(1 as Centuries, "centuries", "minutes", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 52_594_560 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => minutes (from September)", () => {
    const actual = convert(1 as Centuries, "centuries", "minutes", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 52_594_560 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => minutes (from October)", () => {
    const actual = convert(1 as Centuries, "centuries", "minutes", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 52_594_560 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => minutes (from November)", () => {
    const actual = convert(1 as Centuries, "centuries", "minutes", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 52_594_560 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => minutes (from December)", () => {
    const actual = convert(1 as Centuries, "centuries", "minutes", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 52_594_560 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("centuries => hours (without passing start date)", () => {
    const actual = convert(1 as Centuries, "centuries", "hours");
    const expected = 876_600 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => hours (from January)", () => {
    const actual = convert(1 as Centuries, "centuries", "hours", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 876_576 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => hours (from February)", () => {
    const actual = convert(1 as Centuries, "centuries", "hours", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 876_576 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => hours (from February, leap year)", () => {
    const actual = convert(1 as Centuries, "centuries", "hours", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 876_576 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => hours (from March)", () => {
    const actual = convert(1 as Centuries, "centuries", "hours", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 876_576 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => hours (from April)", () => {
    const actual = convert(1 as Centuries, "centuries", "hours", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 876_576 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => hours (from May)", () => {
    const actual = convert(1 as Centuries, "centuries", "hours", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 876_576 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => hours (from June)", () => {
    const actual = convert(1 as Centuries, "centuries", "hours", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 876_576 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => hours (from July)", () => {
    const actual = convert(1 as Centuries, "centuries", "hours", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 876_576 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => hours (from August)", () => {
    const actual = convert(1 as Centuries, "centuries", "hours", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 876_576 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => hours (from September)", () => {
    const actual = convert(1 as Centuries, "centuries", "hours", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 876_576 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => hours (from October)", () => {
    const actual = convert(1 as Centuries, "centuries", "hours", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 876_576 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => hours (from November)", () => {
    const actual = convert(1 as Centuries, "centuries", "hours", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 876_576 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => hours (from December)", () => {
    const actual = convert(1 as Centuries, "centuries", "hours", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 876_576 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => days (without passing start date)", () => {
    const actual = convert(1 as Centuries, "centuries", "days");
    const expected = 36_525 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => days (from January)", () => {
    const actual = convert(1 as Centuries, "centuries", "days", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 36_524 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => days (from February)", () => {
    const actual = convert(1 as Centuries, "centuries", "days", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 36_524 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => days (from February, leap year)", () => {
    const actual = convert(1 as Centuries, "centuries", "days", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 36_524 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => days (from March)", () => {
    const actual = convert(1 as Centuries, "centuries", "days", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 36_524 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => days (from April)", () => {
    const actual = convert(1 as Centuries, "centuries", "days", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 36_524 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => days (from May)", () => {
    const actual = convert(1 as Centuries, "centuries", "days", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 36_524 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => days (from June)", () => {
    const actual = convert(1 as Centuries, "centuries", "days", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 36_524 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => days (from July)", () => {
    const actual = convert(1 as Centuries, "centuries", "days", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 36_524 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => days (from August)", () => {
    const actual = convert(1 as Centuries, "centuries", "days", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 36_524 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => days (from September)", () => {
    const actual = convert(1 as Centuries, "centuries", "days", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 36_524 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => days (from October)", () => {
    const actual = convert(1 as Centuries, "centuries", "days", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 36_524 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => days (from November)", () => {
    const actual = convert(1 as Centuries, "centuries", "days", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 36_524 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => days (from December)", () => {
    const actual = convert(1 as Centuries, "centuries", "days", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 36_524 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("0.05 centuries => days", () => {
    const actual = convert(0.05 as Centuries, "centuries", "days", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 1_826 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("0.4 centuries => days", () => {
    const actual = convert(0.4 as Centuries, "centuries", "days", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = 14_610 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("5.35 centuries => days", () => {
    const actual = convert(5.35 as Centuries, "centuries", "days", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = 195_405 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => weeks (without passing start date)", () => {
    const actual = convert(1 as Centuries, "centuries", "weeks");
    const expected = 5217.857142857143 as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => weeks (from January)", () => {
    const actual = convert(1 as Centuries, "centuries", "weeks", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = (5217 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => weeks (from February)", () => {
    const actual = convert(1 as Centuries, "centuries", "weeks", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = (5217 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => weeks (from February, leap year)", () => {
    const actual = convert(1 as Centuries, "centuries", "weeks", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = (5217 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => weeks (from March)", () => {
    const actual = convert(1 as Centuries, "centuries", "weeks", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = (5217 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => weeks (from April)", () => {
    const actual = convert(1 as Centuries, "centuries", "weeks", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = (5217 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => weeks (from May)", () => {
    const actual = convert(1 as Centuries, "centuries", "weeks", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = (5217 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => weeks (from June)", () => {
    const actual = convert(1 as Centuries, "centuries", "weeks", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = (5217 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => weeks (from July)", () => {
    const actual = convert(1 as Centuries, "centuries", "weeks", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = (5217 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => weeks (from August)", () => {
    const actual = convert(1 as Centuries, "centuries", "weeks", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = (5217 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => weeks (from September)", () => {
    const actual = convert(1 as Centuries, "centuries", "weeks", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = (5217 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => weeks (from October)", () => {
    const actual = convert(1 as Centuries, "centuries", "weeks", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = (5217 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => weeks (from November)", () => {
    const actual = convert(1 as Centuries, "centuries", "weeks", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = (5217 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 century => weeks (from December)", () => {
    const actual = convert(1 as Centuries, "centuries", "weeks", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = (5217 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("0.04 centuries => weeks", () => {
    const actual = convert(0.04 as Centuries, "centuries", "weeks", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = (208 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("5.35 centuries => weeks", () => {
    const actual = convert(5.35 as Centuries, "centuries", "weeks", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = 27_915 as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("centuries => months", () => {
    const actual = convert(1 as Centuries, "centuries", "months");
    const expected = 1_200 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("centuries => years", () => {
    const actual = convert(1 as Centuries, "centuries", "years");
    const expected = 100 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("centuries => decades", () => {
    const actual = convert(1 as Centuries, "centuries", "decades");
    const expected = 10 as Decades;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("centuries => centuries", () => {
    const actual = convert(1 as Centuries, "centuries", "centuries");
    const expected = 1 as Centuries;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("centuries => millenniums", () => {
    const actual = convert(10 as Centuries, "centuries", "millenniums");
    const expected = 1 as Millenniums;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

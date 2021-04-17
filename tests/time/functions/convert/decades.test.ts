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
  test("1 decade => milliseconds (without passing start date)", () => {
    const actual = convert(1 as Decades, "decades", "milliseconds");
    const expected = 315_576_000_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });
  test("1 decade => milliseconds (from January)", () => {
    const actual = convert(1 as Decades, "decades", "milliseconds", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 315_532_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => milliseconds (from February)", () => {
    const actual = convert(1 as Decades, "decades", "milliseconds", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 315_532_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => milliseconds (from February, leap year)", () => {
    const actual = convert(1 as Decades, "decades", "milliseconds", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 315_619_200_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => milliseconds (from March)", () => {
    const actual = convert(1 as Decades, "decades", "milliseconds", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 315_532_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => milliseconds (from April)", () => {
    const actual = convert(1 as Decades, "decades", "milliseconds", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 315_532_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => milliseconds (from May)", () => {
    const actual = convert(1 as Decades, "decades", "milliseconds", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 315_532_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => milliseconds (from June)", () => {
    const actual = convert(1 as Decades, "decades", "milliseconds", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 315_532_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => milliseconds (from July)", () => {
    const actual = convert(1 as Decades, "decades", "milliseconds", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 315_532_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => milliseconds (from August)", () => {
    const actual = convert(1 as Decades, "decades", "milliseconds", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 315_532_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => milliseconds (from September)", () => {
    const actual = convert(1 as Decades, "decades", "milliseconds", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 315_532_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => milliseconds (from October)", () => {
    const actual = convert(1 as Decades, "decades", "milliseconds", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 315_532_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => milliseconds (from November)", () => {
    const actual = convert(1 as Decades, "decades", "milliseconds", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 315_532_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => milliseconds (from December)", () => {
    const actual = convert(1 as Decades, "decades", "milliseconds", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 315_532_800_000 as Milliseconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => seconds (without passing start date)", () => {
    const actual = convert(1 as Decades, "decades", "seconds");
    const expected = 315_576_000 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => seconds (from January)", () => {
    const actual = convert(1 as Decades, "decades", "seconds", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 315_532_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => seconds (from February)", () => {
    const actual = convert(1 as Decades, "decades", "seconds", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 315_532_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => seconds (from February, leap year)", () => {
    const actual = convert(1 as Decades, "decades", "seconds", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 315_619_200 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => seconds (from March)", () => {
    const actual = convert(1 as Decades, "decades", "seconds", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 315_532_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => seconds (from April)", () => {
    const actual = convert(1 as Decades, "decades", "seconds", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 315_532_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => seconds (from May)", () => {
    const actual = convert(1 as Decades, "decades", "seconds", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 315_532_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => seconds (from June)", () => {
    const actual = convert(1 as Decades, "decades", "seconds", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 315_532_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => seconds (from July)", () => {
    const actual = convert(1 as Decades, "decades", "seconds", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 315_532_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => seconds (from August)", () => {
    const actual = convert(1 as Decades, "decades", "seconds", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 315_532_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => seconds (from September)", () => {
    const actual = convert(1 as Decades, "decades", "seconds", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 315_532_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => seconds (from October)", () => {
    const actual = convert(1 as Decades, "decades", "seconds", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 315_532_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => seconds (from November)", () => {
    const actual = convert(1 as Decades, "decades", "seconds", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 315_532_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => seconds (from December)", () => {
    const actual = convert(1 as Decades, "decades", "seconds", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 315_532_800 as Seconds;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => minutes (without passing start date)", () => {
    const actual = convert(1 as Decades, "decades", "minutes");
    const expected = 5_259_600 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => minutes (from January)", () => {
    const actual = convert(1 as Decades, "decades", "minutes", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 5_258_880 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => minutes (from February)", () => {
    const actual = convert(1 as Decades, "decades", "minutes", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 5_258_880 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => minutes (from February, leap year)", () => {
    const actual = convert(1 as Decades, "decades", "minutes", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 5_260_320 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => minutes (from March)", () => {
    const actual = convert(1 as Decades, "decades", "minutes", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 5_258_880 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => minutes (from April)", () => {
    const actual = convert(1 as Decades, "decades", "minutes", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 5_258_880 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => minutes (from May)", () => {
    const actual = convert(1 as Decades, "decades", "minutes", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 5_258_880 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => minutes (from June)", () => {
    const actual = convert(1 as Decades, "decades", "minutes", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 5_258_880 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => minutes (from July)", () => {
    const actual = convert(1 as Decades, "decades", "minutes", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 5_258_880 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => minutes (from August)", () => {
    const actual = convert(1 as Decades, "decades", "minutes", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 5_258_880 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => minutes (from September)", () => {
    const actual = convert(1 as Decades, "decades", "minutes", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 5_258_880 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => minutes (from October)", () => {
    const actual = convert(1 as Decades, "decades", "minutes", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 5_258_880 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => minutes (from November)", () => {
    const actual = convert(1 as Decades, "decades", "minutes", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 5_258_880 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => minutes (from December)", () => {
    const actual = convert(1 as Decades, "decades", "minutes", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 5_258_880 as Minutes;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("decades => hours (without passing start date)", () => {
    const actual = convert(1 as Decades, "decades", "hours");
    const expected = 87_660 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => hours (from January)", () => {
    const actual = convert(1 as Decades, "decades", "hours", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 87_648 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => hours (from February)", () => {
    const actual = convert(1 as Decades, "decades", "hours", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 87_648 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => hours (from February, leap year)", () => {
    const actual = convert(1 as Decades, "decades", "hours", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 87_672 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => hours (from March)", () => {
    const actual = convert(1 as Decades, "decades", "hours", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 87_648 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => hours (from April)", () => {
    const actual = convert(1 as Decades, "decades", "hours", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 87_648 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => hours (from May)", () => {
    const actual = convert(1 as Decades, "decades", "hours", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 87_648 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => hours (from June)", () => {
    const actual = convert(1 as Decades, "decades", "hours", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 87_648 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => hours (from July)", () => {
    const actual = convert(1 as Decades, "decades", "hours", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 87_648 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => hours (from August)", () => {
    const actual = convert(1 as Decades, "decades", "hours", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 87_648 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => hours (from September)", () => {
    const actual = convert(1 as Decades, "decades", "hours", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 87_648 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => hours (from October)", () => {
    const actual = convert(1 as Decades, "decades", "hours", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 87_648 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => hours (from November)", () => {
    const actual = convert(1 as Decades, "decades", "hours", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 87_648 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => hours (from December)", () => {
    const actual = convert(1 as Decades, "decades", "hours", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 87_648 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => days (without passing start date)", () => {
    const actual = convert(1 as Decades, "decades", "days");
    const expected = 3652.5 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => days (from January)", () => {
    const actual = convert(1 as Decades, "decades", "days", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 3_652 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => days (from February)", () => {
    const actual = convert(1 as Decades, "decades", "days", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 3_652 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => days (from February, leap year)", () => {
    const actual = convert(1 as Decades, "decades", "days", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 3_653 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => days (from March)", () => {
    const actual = convert(1 as Decades, "decades", "days", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 3_652 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => days (from April)", () => {
    const actual = convert(1 as Decades, "decades", "days", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 3_652 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => days (from May)", () => {
    const actual = convert(1 as Decades, "decades", "days", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 3_652 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => days (from June)", () => {
    const actual = convert(1 as Decades, "decades", "days", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 3_652 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => days (from July)", () => {
    const actual = convert(1 as Decades, "decades", "days", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 3_652 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => days (from August)", () => {
    const actual = convert(1 as Decades, "decades", "days", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 3_652 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => days (from September)", () => {
    const actual = convert(1 as Decades, "decades", "days", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 3_652 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => days (from October)", () => {
    const actual = convert(1 as Decades, "decades", "days", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 3_652 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => days (from November)", () => {
    const actual = convert(1 as Decades, "decades", "days", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 3_652 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => days (from December)", () => {
    const actual = convert(1 as Decades, "decades", "days", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 3_652 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("0.05 decades => days", () => {
    const actual = convert(0.05 as Decades, "decades", "days", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 181 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("0.4 decades => days", () => {
    const actual = convert(0.4 as Decades, "decades", "days", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = 1_461 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("5.35 decades => days", () => {
    const actual = convert(5.35 as Decades, "decades", "days", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = 19_541 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => weeks (without passing start date)", () => {
    const actual = convert(1 as Decades, "decades", "weeks");
    const expected = 521.7857142857143 as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => weeks (from January)", () => {
    const actual = convert(1 as Decades, "decades", "weeks", {
      month: "January",
      year: 2021 as Years,
    });
    const expected = (521 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => weeks (from February)", () => {
    const actual = convert(1 as Decades, "decades", "weeks", {
      month: "February",
      year: 2021 as Years,
    });
    const expected = (521 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => weeks (from February, leap year)", () => {
    const actual = convert(1 as Decades, "decades", "weeks", {
      month: "February",
      year: 2016 as Years,
    });
    const expected = (521 + 6 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => weeks (from March)", () => {
    const actual = convert(1 as Decades, "decades", "weeks", {
      month: "March",
      year: 2021 as Years,
    });
    const expected = (521 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => weeks (from April)", () => {
    const actual = convert(1 as Decades, "decades", "weeks", {
      month: "April",
      year: 2021 as Years,
    });
    const expected = (521 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => weeks (from May)", () => {
    const actual = convert(1 as Decades, "decades", "weeks", {
      month: "May",
      year: 2021 as Years,
    });
    const expected = (521 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => weeks (from June)", () => {
    const actual = convert(1 as Decades, "decades", "weeks", {
      month: "June",
      year: 2021 as Years,
    });
    const expected = (521 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => weeks (from July)", () => {
    const actual = convert(1 as Decades, "decades", "weeks", {
      month: "July",
      year: 2021 as Years,
    });
    const expected = (521 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => weeks (from August)", () => {
    const actual = convert(1 as Decades, "decades", "weeks", {
      month: "August",
      year: 2021 as Years,
    });
    const expected = (521 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => weeks (from September)", () => {
    const actual = convert(1 as Decades, "decades", "weeks", {
      month: "September",
      year: 2021 as Years,
    });
    const expected = (521 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => weeks (from October)", () => {
    const actual = convert(1 as Decades, "decades", "weeks", {
      month: "October",
      year: 2021 as Years,
    });
    const expected = (521 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => weeks (from November)", () => {
    const actual = convert(1 as Decades, "decades", "weeks", {
      month: "November",
      year: 2021 as Years,
    });
    const expected = (521 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("1 decade => weeks (from December)", () => {
    const actual = convert(1 as Decades, "decades", "weeks", {
      month: "December",
      year: 2021 as Years,
    });
    const expected = (521 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("0.4 decades => weeks", () => {
    const actual = convert(0.4 as Decades, "decades", "weeks", {
      month: "March",
      year: 1946 as Years,
    });
    const expected = (208 + 5 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("5.35 decades => weeks", () => {
    const actual = convert(5.35 as Decades, "decades", "weeks", {
      month: "October",
      year: 1967 as Years,
    });
    const expected = (2791 + 4 / 7) as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("decades => months", () => {
    const actual = convert(1 as Decades, "decades", "months");
    const expected = 120 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("decades => years", () => {
    const actual = convert(1 as Decades, "decades", "years");
    const expected = 10 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("decades => decades", () => {
    const actual = convert(1 as Decades, "decades", "decades");
    const expected = 1 as Decades;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("decades => centuries", () => {
    const actual = convert(10 as Decades, "decades", "centuries");
    const expected = 1 as Centuries;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("decades => millenniums", () => {
    const actual = convert(100 as Decades, "decades", "millenniums");
    const expected = 1 as Millenniums;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

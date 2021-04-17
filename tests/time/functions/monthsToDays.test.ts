import { monthsToDays } from "../../../src/time/functions/monthsToDays";
import { Days } from "../../../src/time/types/Days";
import { Months } from "../../../src/time/types/Months";
import { Years } from "../../../src/time/types/Years";

describe(monthsToDays.name, () => {
  test("returns 0 for 0", () => {
    const actual = monthsToDays(0 as Months);
    const expected = 0 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 30.4375 for 1 month without passing start date", () => {
    const actual = monthsToDays(1 as Months);
    const expected = 30.4375 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 31 for 1 month from January 2021", () => {
    const actual = monthsToDays(1 as Months, {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 31 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 28 for 1 month from February 2021", () => {
    const actual = monthsToDays(1 as Months, {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 28 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 28 for <1 month February 2016 (leap year)", () => {
    const actual = monthsToDays(0.9655172413793104 as Months, {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 28 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 31 for 1 month from March 2021", () => {
    const actual = monthsToDays(1 as Months, {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 31 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 30 for 1 month from April 2021", () => {
    const actual = monthsToDays(1 as Months, {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 30 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 31 for 1 month from May 2021", () => {
    const actual = monthsToDays(1 as Months, {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 31 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 30 for 1 month from June 2021", () => {
    const actual = monthsToDays(1 as Months, {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 30 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 62 for 2 months from July 2021", () => {
    const actual = monthsToDays(2 as Months, {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 62 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 76 days for <2.5 years from August 2021", () => {
    const actual = monthsToDays(2.4838709677419355 as Months, {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 76 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 181 for 6 months from September 2021", () => {
    const actual = monthsToDays(6 as Months, {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 181 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 15 for <0.5 months from October 2021", () => {
    const actual = monthsToDays(0.4838709677419355 as Months, {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 15 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 15 for 0.5 months from November 2021", () => {
    const actual = monthsToDays(0.5 as Months, {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 15 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 10 for <0.5 months from December 2021", () => {
    const actual = monthsToDays(0.3225806451612903 as Months, {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 10 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 1461 for 48 months from March 1946", () => {
    const actual = monthsToDays(48 as Months, {
      month: "March",
      year: 1946 as Years,
    });
    const expected = 1461 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

import { daysToMonths } from "../../../src/time/functions/daysToMonths";
import { Days } from "../../../src/time/types/Days";
import { Months } from "../../../src/time/types/Months";
import { Years } from "../../../src/time/types/Years";

describe(daysToMonths.name, () => {
  test("returns 0 for 0", () => {
    const actual = daysToMonths(0 as Days);
    const expected = 0 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 1 for 30.4375 days without passing start date", () => {
    const actual = daysToMonths(30.4375 as Days);
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 1 for 31 days from January 2021", () => {
    const actual = daysToMonths(31 as Days, {
      month: "January",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 1 for 28 days from February 2021", () => {
    const actual = daysToMonths(28 as Days, {
      month: "February",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns <1 for 28 days from February 2016 (leap year)", () => {
    const actual = daysToMonths(28 as Days, {
      month: "February",
      year: 2016 as Years,
    });
    const expected = 0.9655172413793104 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 1 for 31 days from March 2021", () => {
    const actual = daysToMonths(31 as Days, {
      month: "March",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 1 for 30 days from April 2021", () => {
    const actual = daysToMonths(30 as Days, {
      month: "April",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 1 for 31 days from May 2021", () => {
    const actual = daysToMonths(31 as Days, {
      month: "May",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 1 for 30 days from June 2021", () => {
    const actual = daysToMonths(30 as Days, {
      month: "June",
      year: 2021 as Years,
    });
    const expected = 1 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 2 for 62 days from July 2021", () => {
    const actual = daysToMonths(62 as Days, {
      month: "July",
      year: 2021 as Years,
    });
    const expected = 2 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns <2.5 for 76 days from August 2021", () => {
    const actual = daysToMonths(76 as Days, {
      month: "August",
      year: 2021 as Years,
    });
    const expected = 2.4838709677419355 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 6 for 181 days from September 2021", () => {
    const actual = daysToMonths(181 as Days, {
      month: "September",
      year: 2021 as Years,
    });
    const expected = 6 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns <0.5 for 15 days from October 2021", () => {
    const actual = daysToMonths(15 as Days, {
      month: "October",
      year: 2021 as Years,
    });
    const expected = 0.4838709677419355 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 0.5 for 15 days from November 2021", () => {
    const actual = daysToMonths(15 as Days, {
      month: "November",
      year: 2021 as Years,
    });
    const expected = 0.5 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns <0.5 for 10 days from December 2021", () => {
    const actual = daysToMonths(10 as Days, {
      month: "December",
      year: 2021 as Years,
    });
    const expected = 0.3225806451612903 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 48 for 1461 from March 1946", () => {
    const actual = daysToMonths(1461 as Days, {
      month: "March",
      year: 1946 as Years,
    });
    const expected = 48 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 642 for 19541 days from October 1967", () => {
    const actual = daysToMonths(19541 as Days, {
      month: "October",
      year: 1967 as Years,
    });
    const expected = 642 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 12000 for 365242 days from January 2020", () => {
    const actual = daysToMonths(365242 as Days, {
      month: "January",
      year: 2020 as Years,
    });
    const expected = 12000 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

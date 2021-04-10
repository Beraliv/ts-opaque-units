import { daysToYears } from "../../../src/time/functions/daysToYears";
import { Days } from "../../../src/time/types/Days";
import { Years } from "../../../src/time/types/Years";

describe(daysToYears.name, () => {
  test("returns 0 for 0", () => {
    const actual = daysToYears(0 as Days);
    const expected = 0 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 1 for 365.25 days without passing start date", () => {
    const actual = daysToYears(365.25 as Days);
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns -1 for 365.25 days ago without passing start date", () => {
    const actual = daysToYears(-365.25 as Days);
    const expected = -1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 0.5 for 183 days from 2020 (leap year)", () => {
    const actual = daysToYears(183 as Days, {
      year: 2020 as Years,
    });
    const expected = 0.5 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 1 for 366 days from 2020 (leap year)", () => {
    const actual = daysToYears(366 as Days, {
      year: 2020 as Years,
    });
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 1 for 365 days from 2021", () => {
    const actual = daysToYears(365 as Days, {
      year: 2021 as Years,
    });
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 4 for 1461 days from 1946", () => {
    const actual = daysToYears(1461 as Days, {
      year: 1946 as Years,
    });
    const expected = 4 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 53.5 for 19541 days from 1967", () => {
    const actual = daysToYears(19541 as Days, {
      year: 1967 as Years,
    });
    const expected = 53.5 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

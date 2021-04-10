import { yearsToDays } from "../../../src/time/functions/yearsToDays";
import { Days } from "../../../src/time/types/Days";
import { Years } from "../../../src/time/types/Years";

describe(yearsToDays.name, () => {
  test("returns 0 for 0", () => {
    const actual = yearsToDays(0 as Years);
    const expected = 0 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 365.25 for 1 year without passing start date", () => {
    const actual = yearsToDays(1 as Years);
    const expected = 365.25 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns -365.25 for 1 year ago without passing start date", () => {
    const actual = yearsToDays(-1 as Years);
    const expected = -365.25 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 183 for 0.5 year from 2020 (leap year)", () => {
    const actual = yearsToDays(0.5 as Years, {
      year: 2020 as Years,
    });
    const expected = 183 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 366 for 1 year from 2020 (leap year)", () => {
    const actual = yearsToDays(1 as Years, {
      year: 2020 as Years,
    });
    const expected = 366 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 365 for 1 year from 2021", () => {
    const actual = yearsToDays(1 as Years, {
      year: 2021 as Years,
    });
    const expected = 365 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 1461 for 48 months from March 1946", () => {
    const actual = yearsToDays(4 as Years, {
      year: 1946 as Years,
    });
    const expected = 1461 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns 19541 for 53.5 years from 1967", () => {
    const actual = yearsToDays(53.5 as Years, {
      year: 1967 as Years,
    });
    const expected = 19541 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

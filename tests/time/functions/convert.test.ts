import { convert } from "../../../src/time/functions/convert";
import { Centuries } from "../../../src/time/types/Centuries";
import { Days } from "../../../src/time/types/Days";
import { Decades } from "../../../src/time/types/Decades";
import { Hours } from "../../../src/time/types/Hours";
import { Millenniums } from "../../../src/time/types/Millenniums";
import { Milliseconds } from "../../../src/time/types/Milliseconds";
import { Minutes } from "../../../src/time/types/Minutes";
import { Months } from "../../../src/time/types/Months";
import { Seconds } from "../../../src/time/types/Seconds";
import { Weeks } from "../../../src/time/types/Weeks";
import { Years } from "../../../src/time/types/Years";

describe(convert.name, () => {
  test("returns value for the same start and end", () => {
    expect(convert(6 as Days, "days", "days")).toEqual(6);
    expect(convert(7 as Weeks, "weeks", "weeks")).toEqual(7);
    expect(convert(8 as Months, "months", "months")).toEqual(8);
    expect(convert(9 as Years, "years", "years")).toEqual(9);
    expect(convert(10 as Decades, "decades", "decades")).toEqual(10);
    expect(convert(11 as Centuries, "centuries", "centuries")).toEqual(11);
    expect(convert(12 as Millenniums, "millenniums", "millenniums")).toEqual(
      12
    );
  });

  test("throw error for weeks => months and vice versa", () => {
    expect(() => convert(1 as Weeks, "weeks", "months")).toThrow(
      `ImplementationTypeError: does NOT support weeks => months`
    );

    expect(() => convert(1 as Months, "months", "weeks")).toThrow(
      `ImplementationTypeError: does NOT support months => weeks`
    );
  });

  test("throw error for weeks => years and vice versa", () => {
    expect(() => convert(1 as Weeks, "weeks", "years")).toThrow(
      `ImplementationTypeError: does NOT support weeks => years`
    );

    expect(() => convert(1 as Years, "years", "weeks")).toThrow(
      `ImplementationTypeError: does NOT support years => weeks`
    );
  });

  test("throw error for weeks => decades and vice versa", () => {
    expect(() => convert(1 as Weeks, "weeks", "decades")).toThrow(
      `ImplementationTypeError: does NOT support weeks => decades`
    );

    expect(() => convert(1 as Decades, "decades", "weeks")).toThrow(
      `ImplementationTypeError: does NOT support decades => weeks`
    );
  });

  test("throw error for weeks => centuries and vice versa", () => {
    expect(() => convert(1 as Weeks, "weeks", "centuries")).toThrow(
      `ImplementationTypeError: does NOT support weeks => centuries`
    );

    expect(() => convert(1 as Centuries, "centuries", "weeks")).toThrow(
      `ImplementationTypeError: does NOT support centuries => weeks`
    );
  });

  test("throw error for weeks => millenniums and vice versa", () => {
    expect(() => convert(1 as Weeks, "weeks", "millenniums")).toThrow(
      `ImplementationTypeError: does NOT support weeks => millenniums`
    );

    expect(() => convert(1 as Millenniums, "millenniums", "weeks")).toThrow(
      `ImplementationTypeError: does NOT support millenniums => weeks`
    );
  });

  test("returns millenniums from centuries", () => {
    const actual = convert(10 as Centuries, "centuries", "millenniums");
    const expected = 1 as Millenniums;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns centuries from millenniums", () => {
    const actual = convert(1 as Millenniums, "millenniums", "centuries");
    const expected = 10 as Centuries;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns centuries from decades", () => {
    const actual = convert(10 as Decades, "decades", "centuries");
    const expected = 1 as Centuries;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns decades from centuries", () => {
    const actual = convert(1 as Centuries, "centuries", "decades");
    const expected = 10 as Decades;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns decades from years", () => {
    const actual = convert(10 as Years, "years", "decades");
    const expected = 1 as Decades;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns years from decades", () => {
    const actual = convert(1 as Decades, "decades", "years");
    const expected = 10 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns years from months", () => {
    const actual = convert(12 as Months, "months", "years");
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns months from years", () => {
    const actual = convert(1 as Years, "years", "months");
    const expected = 12 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns years from months", () => {
    const actual = convert(12 as Months, "months", "years");
    const expected = 1 as Years;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns months from years", () => {
    const actual = convert(1 as Years, "years", "months");
    const expected = 12 as Months;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns weeks from days", () => {
    const actual = convert(7 as Days, "days", "weeks");
    const expected = 1 as Weeks;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns days from weeks", () => {
    const actual = convert(1 as Weeks, "weeks", "days");
    const expected = 7 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns days from hours", () => {
    const actual = convert(24 as Hours, "hours", "days");
    const expected = 1 as Days;

    expect(actual).toEqual<typeof actual>(expected);
  });

  test("returns hours from days", () => {
    const actual = convert(1 as Days, "days", "hours");
    const expected = 24 as Hours;

    expect(actual).toEqual<typeof actual>(expected);
  });
});

import { isLeapYear } from "../../../src/time/functions/isLeapYear";
import { Years } from "../../../src/time/types/Years";

describe(isLeapYear.name, () => {
  test("returns true for % 400 === 0", () => {
    expect(isLeapYear(400 as Years)).toEqual(true);
    expect(isLeapYear(800 as Years)).toEqual(true);
    expect(isLeapYear(1200 as Years)).toEqual(true);
    expect(isLeapYear(1600 as Years)).toEqual(true);
    expect(isLeapYear(2000 as Years)).toEqual(true);
    expect(isLeapYear(2400 as Years)).toEqual(true);
  });

  test("returns false for % 400 !== 0 but % 100 === 0", () => {
    expect(isLeapYear(500 as Years)).toEqual(false);
    expect(isLeapYear(600 as Years)).toEqual(false);
    expect(isLeapYear(700 as Years)).toEqual(false);
    expect(isLeapYear(900 as Years)).toEqual(false);
    expect(isLeapYear(1000 as Years)).toEqual(false);
    expect(isLeapYear(1100 as Years)).toEqual(false);
    expect(isLeapYear(1300 as Years)).toEqual(false);
    expect(isLeapYear(1400 as Years)).toEqual(false);
    expect(isLeapYear(1500 as Years)).toEqual(false);
    expect(isLeapYear(1700 as Years)).toEqual(false);
    expect(isLeapYear(1800 as Years)).toEqual(false);
    expect(isLeapYear(1900 as Years)).toEqual(false);
    expect(isLeapYear(2100 as Years)).toEqual(false);
    expect(isLeapYear(2200 as Years)).toEqual(false);
    expect(isLeapYear(2300 as Years)).toEqual(false);
  });

  test("returns true for % 400 !== 0 and % 100 !== 0 but % 4 === 0", () => {
    expect(isLeapYear(2004 as Years)).toEqual(true);
    expect(isLeapYear(2008 as Years)).toEqual(true);
    expect(isLeapYear(2012 as Years)).toEqual(true);
    expect(isLeapYear(2016 as Years)).toEqual(true);
    expect(isLeapYear(2020 as Years)).toEqual(true);
    expect(isLeapYear(2024 as Years)).toEqual(true);
    expect(isLeapYear(2028 as Years)).toEqual(true);
    expect(isLeapYear(2032 as Years)).toEqual(true);
    expect(isLeapYear(2036 as Years)).toEqual(true);
    expect(isLeapYear(2040 as Years)).toEqual(true);
    expect(isLeapYear(2044 as Years)).toEqual(true);
    expect(isLeapYear(2048 as Years)).toEqual(true);
    expect(isLeapYear(2052 as Years)).toEqual(true);
    expect(isLeapYear(2056 as Years)).toEqual(true);
    expect(isLeapYear(2060 as Years)).toEqual(true);
  });

  test("returns false for % 400 !== 0 and % 100 !== 0 and % 4 !== 0", () => {
    expect(isLeapYear(2005 as Years)).toEqual(false);
    expect(isLeapYear(2006 as Years)).toEqual(false);
    expect(isLeapYear(2007 as Years)).toEqual(false);
    expect(isLeapYear(2009 as Years)).toEqual(false);
    expect(isLeapYear(2010 as Years)).toEqual(false);
    expect(isLeapYear(2011 as Years)).toEqual(false);
    expect(isLeapYear(2013 as Years)).toEqual(false);
    expect(isLeapYear(2014 as Years)).toEqual(false);
    expect(isLeapYear(2015 as Years)).toEqual(false);
    expect(isLeapYear(2017 as Years)).toEqual(false);
    expect(isLeapYear(2018 as Years)).toEqual(false);
    expect(isLeapYear(2019 as Years)).toEqual(false);
    expect(isLeapYear(2021 as Years)).toEqual(false);
    expect(isLeapYear(2022 as Years)).toEqual(false);
    expect(isLeapYear(2023 as Years)).toEqual(false);
    expect(isLeapYear(2025 as Years)).toEqual(false);
    expect(isLeapYear(2026 as Years)).toEqual(false);
    expect(isLeapYear(2027 as Years)).toEqual(false);
    expect(isLeapYear(2029 as Years)).toEqual(false);
    expect(isLeapYear(2030 as Years)).toEqual(false);
    expect(isLeapYear(2031 as Years)).toEqual(false);
    expect(isLeapYear(2033 as Years)).toEqual(false);
    expect(isLeapYear(2034 as Years)).toEqual(false);
    expect(isLeapYear(2035 as Years)).toEqual(false);
    expect(isLeapYear(2037 as Years)).toEqual(false);
    expect(isLeapYear(2038 as Years)).toEqual(false);
    expect(isLeapYear(2039 as Years)).toEqual(false);
    expect(isLeapYear(2041 as Years)).toEqual(false);
    expect(isLeapYear(2042 as Years)).toEqual(false);
    expect(isLeapYear(2043 as Years)).toEqual(false);
    expect(isLeapYear(2045 as Years)).toEqual(false);
    expect(isLeapYear(2046 as Years)).toEqual(false);
    expect(isLeapYear(2047 as Years)).toEqual(false);
    expect(isLeapYear(2049 as Years)).toEqual(false);
    expect(isLeapYear(2050 as Years)).toEqual(false);
    expect(isLeapYear(2051 as Years)).toEqual(false);
    expect(isLeapYear(2053 as Years)).toEqual(false);
    expect(isLeapYear(2054 as Years)).toEqual(false);
    expect(isLeapYear(2055 as Years)).toEqual(false);
    expect(isLeapYear(2057 as Years)).toEqual(false);
    expect(isLeapYear(2058 as Years)).toEqual(false);
    expect(isLeapYear(2059 as Years)).toEqual(false);
    expect(isLeapYear(2061 as Years)).toEqual(false);
    expect(isLeapYear(2062 as Years)).toEqual(false);
    expect(isLeapYear(2063 as Years)).toEqual(false);
  });
});

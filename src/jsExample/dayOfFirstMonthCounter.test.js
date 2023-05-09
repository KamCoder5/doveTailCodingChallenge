const dayOfFirstMonthCounter = require("./dayOfFirstMonthCounter");

describe("dayOfFirstMonthCounter", () => {
  it("returns the correct count when given a valid day of the week string", () => {
    expect(dayOfFirstMonthCounter("Monday", 2000, 2010)).toBe(10);
    expect(dayOfFirstMonthCounter("Tuesday", 1901, 1950)).toBe(300);
    expect(dayOfFirstMonthCounter("Wednesday", 2000, 2050)).toBe(250);
  });

  it("throws an error when given a non-string first parameter", () => {
    expect(() => dayOfFirstMonthCounter(7, 2000, 2010)).toThrow(TypeError);
    expect(() => dayOfFirstMonthCounter([], 1901, 1950)).toThrow(TypeError);
    expect(() => dayOfFirstMonthCounter(null, 2000, 2050)).toThrow(TypeError);
  });

  it("throws an error when given an invalid day of the week string", () => {
    expect(() => dayOfFirstMonthCounter("foo", 2000, 2010)).toThrow(Error);
    expect(() => dayOfFirstMonthCounter("Tuesdayz", 1901, 1950)).toThrow(Error);
    expect(() => dayOfFirstMonthCounter("wednesday", 2000, 2050)).toThrow(
      Error
    );
  });

  it("returns 0 when no matching days are found", () => {
    expect(dayOfFirstMonthCounter("Saturday", 1901, 1910)).toBe(0);
    expect(dayOfFirstMonthCounter("Sunday", 1950, 1960)).toBe(0);
  });

  it("returns 0 when fromYearDate is greater than toYearDate", () => {
    expect(dayOfFirstMonthCounter("Monday", 2010, 2000)).toBe(0);
  });

  it("returns the correct count when given an uppercase day of the week string", () => {
    expect(dayOfFirstMonthCounter("FRIDAY", 1901, 2000)).toBe(102);
  });

  it('returns the correct count when given a day of the week string with an "s" at the end', () => {
    expect(dayOfFirstMonthCounter("Mondays", 2000, 2010)).toBe(2);
  });
});

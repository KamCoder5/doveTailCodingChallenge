const tuesdaysOfFirstMonthCounter = require("./tuesdaysOfFirstMonthCounter");

describe("tuesdaysOfFirstMonthCounter", () => {
  it("returns the correct count when called for a different century", () => {
    expect(tuesdaysOfFirstMonthCounter(1801, 1900)).toBe(171);
  });

  it("returns 0 if no Tuesdays fall on the first of the month", () => {
    const mockGetDay = jest.spyOn(Date.prototype, "getDay");
    mockGetDay.mockReturnValueOnce(0); // set the first day of the month to a Sunday
    expect(tuesdaysOfFirstMonthCounter()).toBe(0);
    mockGetDay.mockRestore(); // restore the original Date.prototype.getDay() method
  });

  it("returns the correct count when no years are provided", () => {
    expect(tuesdaysOfFirstMonthCounter(undefined, undefined)).toBe(171);
  });

  it("returns 0 if the years are invalid", () => {
    expect(tuesdaysOfFirstMonthCounter("abcd", "efgh")).toBe(0);
  });

  it("returns 0 if the years are in reverse order", () => {
    expect(tuesdaysOfFirstMonthCounter(2000, 1901)).toBe(0);
  });
});

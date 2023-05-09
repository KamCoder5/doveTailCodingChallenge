const sundaysOfFirstMonthCounter = require("./sundaysOfFirstMonthCounter");

describe("sundaysOfFirstMonthCounter", () => {
  it("returns the correct count when the date range is limited", () => {
    expect(sundaysOfFirstMonthCounter(1901, 1901)).toBe(2);
    expect(sundaysOfFirstMonthCounter(1901, 1902)).toBe(3);
    expect(sundaysOfFirstMonthCounter(1901, 1903)).toBe(4);
  });

  it("returns 0 when no Sundays fall on the first of the month", () => {
    expect(sundaysOfFirstMonthCounter(1902, 1902)).toBe(0);
  });

  it("returns 0 when called with invalid parameters", () => {
    expect(sundaysOfFirstMonthCounter("foo", "bar")).toBe(0);
    expect(sundaysOfFirstMonthCounter(2000, 1901)).toBe(0);
  });

  it("logs the correct message to the console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    sundaysOfFirstMonthCounter();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Number of Sunday that fell on the first of the month during the twentieth century: ",
      171
    );
  });
});

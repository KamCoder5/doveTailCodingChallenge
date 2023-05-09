const tuesdaysOfFirstMonthCounter = require("./tuesdaysOfFirstMonthCounter");

describe("tuesdaysOfFirstMonthCounter", () => {
  it("returns the correct count when called", () => {
    expect(tuesdaysOfFirstMonthCounter()).toBe(171);
  });

  it("returns a number value", () => {
    expect(typeof tuesdaysOfFirstMonthCounter()).toBe("number");
  });
});

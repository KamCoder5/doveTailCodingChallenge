const sundaysOfFirstMonthCounter = require("./sundaysOfFirstMonthCounter.js");
test("should return a number", () => {
  expect(typeof sundaysOfFirstMonthCounter()).toBe("number");
});

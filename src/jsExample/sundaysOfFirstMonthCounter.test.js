const sundaysOfFirstMonthCounter = require("./sundaysOfFirstMonthCounter");

test("Number of Sundays should be a number", () => {
  expect(typeof sundaysOfFirstMonthCounter()).toBe("number");
});

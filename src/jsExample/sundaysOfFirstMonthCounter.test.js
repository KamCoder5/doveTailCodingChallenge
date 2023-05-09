const sundaysOfFirstMonthCounter = require("./sundaysOfFirstMonthCounter");

test("returns a number", () => {
  const result = sundaysOfFirstMonthCounter();
  expect(typeof result).toBe("number");
});

test("Number of Sundays should be a 171", () => {
  expect(sundaysOfFirstMonthCounter()).toBe(171);
});

const tuesdaysOfFirstMonthCounter = () => {
  let tuesdayCount = 0;
  for (let year = 1901; year <= 2000; year++) {
    for (let month = 0; month < 12; month++) {
      const firstDay = new Date(year, month, 1);
      if (firstDay.getDay() === 2) {
        tuesdayCount++;
      }
    }
  }
  console.log("type of: ", typeof tuesdayCount);
  console.log(
    "Number of Tuesday that fell on the first of the month during the twentieth century: ",
    tuesdayCount
  );

  return tuesdayCount;
};

module.exports = tuesdaysOfFirstMonthCounter;

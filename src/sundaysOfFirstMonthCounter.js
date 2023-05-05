const sundaysOfFirstMonthCounter = () => {
  let sundayCount = 0;
  for (let year = 1901; year <= 2000; year++) {
    for (let month = 0; month < 12; month++) {
      const firstDay = new Date(year, month, 1);
      if (firstDay.getDay() === 6) {
        sundayCount++;
      }
    }
  }
  console.log("type of: ", typeof sundayCount);
  console.log(
    "Number of Sunday that fell on the first of the month during the twentieth century: ",
    sundayCount
  );

  return sundayCount;
};

module.exports = sundaysOfFirstMonthCounter;

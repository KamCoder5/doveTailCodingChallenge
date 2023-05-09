const dayOfFirstMonthCounter = (dayOfTheWeek, fromYearDate, toYearDate) => {
  const daysOfTheWeek = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  let totalDaysCount = 0;
  const endsWithS = dayOfTheWeek.toLowerCase().endsWith("s");
  const targetDay =
    daysOfTheWeek[
      endsWithS
        ? dayOfTheWeek.slice(0, -1).toLowerCase()
        : dayOfTheWeek.toLowerCase()
    ];

  const dayOfWeekString = endsWithS ? dayOfTheWeek.slice(0, -1) : dayOfTheWeek;

  for (let year = fromYearDate; year <= toYearDate; year++) {
    for (let month = 0; month < 12; month++) {
      const firstDay = new Date(year, month, 1);

      if (firstDay.getDay() === targetDay) {
        totalDaysCount++;
      }
    }
  }

  console.log(
    `Number of ${dayOfWeekString}s that fell on the first of the month during the twentieth century: ${totalDaysCount} `
  );

  return totalDaysCount;
};

dayOfFirstMonthCounter("Friday", 1901, 2000);

module.exports = dayOfFirstMonthCounter;

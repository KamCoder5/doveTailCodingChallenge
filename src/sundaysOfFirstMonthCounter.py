import datetime

def sundaysOfFirstMonthCounter():
    sundayCount = 0
    for year in range(1901, 2001):
        for month in range(1, 13):
            firstDay = datetime.date(year, month, 1)
            if firstDay.weekday() == 6:
                day = firstDay.strftime("%A")
                print(day)
                sundayCount += 1
    return sundayCount


sundaysOfFirstMonthCounter()
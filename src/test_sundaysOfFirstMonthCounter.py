import pytest
from sundaysOfFirstMonthCounter import sundaysOfFirstMonthCounter

def test_sundaysOfFirstMonthCounter():
    assert sundaysOfFirstMonthCounter(1901, 1901) == 2
    assert sundaysOfFirstMonthCounter(1901, 1902) == 3
    assert sundaysOfFirstMonthCounter(1901, 1903) == 4
    assert sundaysOfFirstMonthCounter(1902, 1902) == 0
    assert sundaysOfFirstMonthCounter("foo", "bar") == 0
    assert sundaysOfFirstMonthCounter(2000, 1901) == 0

    with pytest.raises(SystemExit):
        sundaysOfFirstMonthCounter(1901, "foo")

    with pytest.raises(SystemExit):
        sundaysOfFirstMonthCounter(2001, 1901)

    with pytest.raises(SystemExit):
        sundaysOfFirstMonthCounter(1890, 2001)

    with pytest.raises(SystemExit):
        sundaysOfFirstMonthCounter(1901, 2100)

    assert sundaysOfFirstMonthCounter(1901, 2000) == 171
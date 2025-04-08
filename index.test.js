const {
  consecutiveDates,
  orderDates,
  nextDate,
  whensYourBirthday,
  weekdayInFuture
} = require('./index'); // Adjust path as needed

describe('Date Utility Functions', () => {
  test('consecutiveDates returns 3 dates starting from today', () => {
    const result = consecutiveDates(3);
    expect(result).toHaveLength(3);
    expect(typeof result[0]).toBe('string');
  });

  test('orderDates returns dates in ascending order', () => {
    const result = orderDates('2025-12-25', '2025-01-01');
    expect(result).toEqual(['2025-01-01', '2025-12-25']);
  });

  test('nextDate returns the next upcoming date', () => {
    const today = new Date();
    const future1 = new Date(today);
    future1.setDate(today.getDate() + 1);
    const future2 = new Date(today);
    future2.setDate(today.getDate() + 3);
    const dates = [future2.toISOString(), future1.toISOString()];
    const result = nextDate(dates);
    expect(result).toBe(future1.toISOString().split('T')[0]);
  });

  test('whensYourBirthday returns a future birthday', () => {
    const thisYear = new Date().getFullYear();
    const result = whensYourBirthday(`${thisYear - 20}-12-31`);
    const birthday = new Date(result);
    expect(birthday.getMonth()).toBe(11); // December
    expect(birthday.getDate()).toBe(31);
    expect(birthday.getFullYear()).toBeGreaterThanOrEqual(thisYear);
  });

  test('weekdayInFuture returns a valid upcoming weekday', () => {
    const result = weekdayInFuture('Friday');
    const date = new Date(result);
    expect(date.getDay()).toBe(5); // 5 = Friday
  });
});

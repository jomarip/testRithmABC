import { divide, multiply } from 'precise-math';

export function padZeroToNumberLessThanTen(num: number) {
  return num < 10 ? '0' + num : num;
}

export const DateFormaterUTC = (date: Date) => {
  const dateFormat =
    [
      date.getFullYear(),
      padZeroToNumberLessThanTen(date.getDate()),
      padZeroToNumberLessThanTen(date.getMonth() + 1),
    ].join('-') +
    ' ' +
    [
      padZeroToNumberLessThanTen(date.getHours()),
      padZeroToNumberLessThanTen(date.getMinutes()),
    ].join(':') +
    ' UTC';
  return dateFormat;
};

export function remainingTime(startDate: Date, endDate: Date) {
  const remaining = endDate.getTime() - startDate.getTime();
  const days = Math.floor(divide(remaining, multiply(1000, 60, 60, 24)));
  const hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  return { diffDays: days, diffHours: hours, diffMinutes: minutes };
}

export const enUSDateFormat = (date: Date) => {
  const options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };
  //@ts-ignore
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  return formattedDate;
};

import * as dateFns from 'date-fns';

export const formatMonthAndDay = (date: Date | string): string => {
  return dateFns.format(date, 'MMMM do');
}

export const formatTime = (date: Date | string): string => {
  return dateFns.format(date, 'h:mm a').toLowerCase();
}

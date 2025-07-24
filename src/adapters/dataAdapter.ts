import * as dateFns from 'date-fns';

export const formatMonthAndDay = (date: Date | string): string => {
  return dateFns.format(date, 'MMMM do');
}


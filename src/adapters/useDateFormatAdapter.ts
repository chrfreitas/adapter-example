import { format, isValid } from 'date-fns';
import { useMemo } from 'react';

export const useDateFormatAdapter = (date: string, dateFormat: string = 'YYYY-MM-DD') => {
  return useMemo(() => {
    const dateObj = new Date(date);
    
    if (!isValid(dateObj)) return 'Invalid date';

    return format(dateObj, dateFormat);
  }, [date, dateFormat]);
};

import React from 'react';
import { formatMonthAndDay, formatTime } from '../adapters/dataAdapter';

export const CurrentDate = () => {
  const today = new Date();
  const currentDateFormatted = formatMonthAndDay(today);
  const currentTimeFormatted = formatTime(today);

  return (
    <div>It's {currentTimeFormatted} on {currentDateFormatted}</div>
  );
};

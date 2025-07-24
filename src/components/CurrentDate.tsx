import React from 'react';
import { formatMonthAndDay } from '../adapters/dataAdapter';

export const CurrentDate = () => {
  const today = new Date();
  const currentDateFormatted = formatMonthAndDay(today);

  return (
    <div>It's 1pm on {currentDateFormatted}</div>
  );
};

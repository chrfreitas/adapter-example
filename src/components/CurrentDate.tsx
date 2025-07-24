import React from 'react';
import { formatMonthAndDay, formatTime } from '../adapters/dataAdapter';

export const CurrentDate = () => {
  const today = new Date();
  const currentDateFormatted = formatMonthAndDay(today);
  const currentTimeFormatted = formatTime(today);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center text-4xl font-bold text-neutral-900">
        It's {currentTimeFormatted} on {currentDateFormatted}
      </div>
    </div>
  );
};

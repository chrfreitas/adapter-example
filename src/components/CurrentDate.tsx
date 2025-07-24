import React from 'react';
import { useDateFormatAdapter } from '../adapters/useDateFormatAdapter';


export const CurrentDate = () => {
  const currentDate = useDateFormatAdapter(new Date().toISOString(), 'MMMM do');

  return (
    <div>It's 1pm on {currentDate}</div>
  );
};

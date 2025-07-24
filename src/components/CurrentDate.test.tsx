import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { CurrentDate } from './CurrentDate';

jest.mock('../adapters/dataAdapter', () => ({
  formatMonthAndDay: jest.fn(() => 'December 25th'),
  formatTime: jest.fn(() => '1:00 PM')
}));

describe('CurrentDate', () => {
  it('displays the current date and time in the correct format', () => {
    render(<CurrentDate />);
    
    expect(screen.getByText(/It's 1:00 PM.*on December 25th/)).toBeInTheDocument();
  });
});

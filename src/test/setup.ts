import '@testing-library/jest-dom';

global.testUtils = {
  mockDate: (date: string) => {
    jest.spyOn(global, 'Date').mockImplementation(() => new Date(date) as any);
  },
  restoreDate: () => {
    jest.restoreAllMocks();
  }
}; 
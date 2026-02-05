Object.defineProperty(window, 'scroll', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    scroll: jest.fn(),
  })),
});

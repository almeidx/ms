import ms from '..';

describe('ms() long', () => {
  it('should work with the long option', () => {
    expect(ms(10000)).toBe('10s');
    expect(ms(10000, true)).toBe('10 seconds');
  });
});

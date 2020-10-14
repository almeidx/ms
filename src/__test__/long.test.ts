import ms from '..';

describe('ms() long', () => {
  it('should work with the long option', () => {
    expect(ms(60000, true)).toBe('1 minute');
    expect(ms(2 * 60000, true)).toBe('2 minutes');
    expect(ms(-3 * 60000, true)).toBe('-3 minutes');
    expect(ms(ms('10 hours'), true)).toBe('10 hours');
  });
});

import ms from '..';

describe('ms() long', () => {
  it('should work with the exact option', () => {
    expect(ms(60400, false, true)).toBe('1.0066666666666666m');
    expect(ms(2 * 60400, false, true)).toBe('2.013333333333333m');
    expect(ms(-3 * 60400, false, true)).toBe('-3.02m');
    expect(ms(60600, false, true)).toBe('1.01m');
    expect(ms(2 * 60600, false, true)).toBe('2.02m');
    expect(ms(-3 * 60600, false, true)).toBe('-3.03m');

    expect(ms(60400, true, true)).toBe('1.0066666666666666 minute');
    expect(ms(2 * 60400, true, true)).toBe('2.013333333333333 minutes');
    expect(ms(-3 * 60400, true, true)).toBe('-3.02 minutes');
    expect(ms(60600, true, true)).toBe('1.01 minute');
    expect(ms(2 * 60600, true, true)).toBe('2.02 minutes');
    expect(ms(-3 * 60600, true, true)).toBe('-3.03 minutes');
  });
});

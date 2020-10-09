import ms from '..';

describe('ms()', () => {
  it('should work with valid inputs', () => {
    expect(ms('1m')).toBe(60000);
    expect(ms('5h')).toBe(18000000);
    expect(ms('2d')).toBe(172800000);
    expect(ms('1w')).toBe(604800000);
  });
});

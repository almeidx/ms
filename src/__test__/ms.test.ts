import ms from '..';

describe('ms()', () => {
  it('should work with valid inputs', () => {
    expect(ms('2 days')).toBe(172800000);
    expect(ms('1d')).toBe(86400000);
    expect(ms('10h')).toBe(36000000);
    expect(ms('2.5 hrs')).toBe(9000000);
    expect(ms('2h')).toBe(7200000);
    expect(ms('1m')).toBe(60000);
    expect(ms('5s')).toBe(5000);
    expect(ms('1y')).toBe(31557600000);
    expect(ms('100')).toBe(100);
    expect(ms('-3 days')).toBe(-259200000);
    expect(ms('-1h')).toBe(-3600000);
    expect(ms('-200')).toBe(-200);

    expect(ms(60000)).toBe('1m');
    expect(ms(2 * 60000)).toBe('2m');
    expect(ms(-3 * 60000)).toBe('-3m');
    expect(ms(ms('10 hours'))).toBe('10h');
  });
});

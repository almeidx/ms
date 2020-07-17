'use strict';

/* eslint-disable no-undef */

/**
 * Dependencies.
 */

if (typeof require !== 'undefined') {
  expect = require('expect.js');
  ms = require('../src');
}

// strings

describe('ms(string)', () => {
  it('should not throw an error', () => {
    expect(() => {
      ms('1m');
    }).to.not.throwError();
  });

  it('should preserve ms', () => {
    expect(ms('100')).to.be(100);
  });

  it('should convert from m to ms', () => {
    expect(ms('1m')).to.be(60000);
  });

  it('should convert from h to ms', () => {
    expect(ms('1h')).to.be(3600000);
  });

  it('should convert d to ms', () => {
    expect(ms('2d')).to.be(172800000);
  });

  it('should convert w to ms', () => {
    expect(ms('3w')).to.be(1814400000);
  });

  it('should convert s to ms', () => {
    expect(ms('1s')).to.be(1000);
  });

  it('should convert ms to ms', () => {
    expect(ms('100ms')).to.be(100);
  });

  it('should work with decimals', () => {
    expect(ms('1.5h')).to.be(5400000);
  });

  it('should work with multiple spaces', () => {
    expect(ms('1   s')).to.be(1000);
  });

  it('should return NaN if invalid', () => {
    expect(isNaN(ms('☃'))).to.be(true);
    expect(isNaN(ms('10-.5'))).to.be(true);
  });

  it('should be case-insensitive', () => {
    expect(ms('1.5H')).to.be(5400000);
  });

  it('should work with numbers starting with .', () => {
    expect(ms('.5ms')).to.be(0.5);
  });

  it('should work with negative integers', () => {
    expect(ms('-100ms')).to.be(-100);
  });

  it('should work with negative decimals', () => {
    expect(ms('-1.5h')).to.be(-5400000);
    expect(ms('-10.5h')).to.be(-37800000);
  });

  it('should work with negative decimals starting with "."', () => {
    expect(ms('-.5h')).to.be(-1800000);
  });
});

// long strings

describe('ms(long string)', () => {
  it('should not throw an error', () => {
    expect(() => {
      ms('53 milliseconds');
    }).to.not.throwError();
  });

  it('should convert milliseconds to ms', () => {
    expect(ms('53 milliseconds')).to.be(53);
  });

  it('should convert msecs to ms', () => {
    expect(ms('17 msecs')).to.be(17);
  });

  it('should convert sec to ms', () => {
    expect(ms('1 sec')).to.be(1000);
  });

  it('should convert from min to ms', () => {
    expect(ms('1 min')).to.be(60000);
  });

  it('should convert from hr to ms', () => {
    expect(ms('1 hr')).to.be(3600000);
  });

  it('should convert days to ms', () => {
    expect(ms('2 days')).to.be(172800000);
  });

  it('should work with decimals', () => {
    expect(ms('1.5 hours')).to.be(5400000);
  });

  it('should work with negative integers', () => {
    expect(ms('-100 milliseconds')).to.be(-100);
  });

  it('should work with negative decimals', () => {
    expect(ms('-1.5 hours')).to.be(-5400000);
  });

  it('should work with negative decimals starting with "."', () => {
    expect(ms('-.5 hr')).to.be(-1800000);
  });
});

// numbers

describe('ms(number, { long: true })', () => {
  it('should not throw an error', () => {
    expect(() => {
      ms(500, { long: true });
    }).to.not.throwError();
  });

  it('should support milliseconds', () => {
    expect(ms(500, { long: true })).to.be('500 ms');

    expect(ms(-500, { long: true })).to.be('-500 ms');
  });

  it('should support seconds', () => {
    expect(ms(1000, { long: true })).to.be('1 second');
    expect(ms(1200, { long: true })).to.be('1 second');
    expect(ms(10000, { long: true })).to.be('10 seconds');

    expect(ms(-1000, { long: true })).to.be('-1 second');
    expect(ms(-1200, { long: true })).to.be('-1 second');
    expect(ms(-10000, { long: true })).to.be('-10 seconds');
  });

  it('should support minutes', () => {
    expect(ms(60 * 1000, { long: true })).to.be('1 minute');
    expect(ms(60 * 1200, { long: true })).to.be('1 minute');
    expect(ms(60 * 10000, { long: true })).to.be('10 minutes');

    expect(ms(-1 * 60 * 1000, { long: true })).to.be('-1 minute');
    expect(ms(-1 * 60 * 1200, { long: true })).to.be('-1 minute');
    expect(ms(-1 * 60 * 10000, { long: true })).to.be('-10 minutes');
  });

  it('should support hours', () => {
    expect(ms(60 * 60 * 1000, { long: true })).to.be('1 hour');
    expect(ms(60 * 60 * 1200, { long: true })).to.be('1 hour');
    expect(ms(60 * 60 * 10000, { long: true })).to.be('10 hours');

    expect(ms(-1 * 60 * 60 * 1000, { long: true })).to.be('-1 hour');
    expect(ms(-1 * 60 * 60 * 1200, { long: true })).to.be('-1 hour');
    expect(ms(-1 * 60 * 60 * 10000, { long: true })).to.be('-10 hours');
  });

  it('should support days', () => {
    expect(ms(24 * 60 * 60 * 1000, { long: true })).to.be('1 day');
    expect(ms(24 * 60 * 60 * 1200, { long: true })).to.be('1 day');
    expect(ms(24 * 60 * 60 * 10000, { long: true })).to.be('10 days');

    expect(ms(-1 * 24 * 60 * 60 * 1000, { long: true })).to.be('-1 day');
    expect(ms(-1 * 24 * 60 * 60 * 1200, { long: true })).to.be('-1 day');
    expect(ms(-1 * 24 * 60 * 60 * 10000, { long: true })).to.be('-10 days');
  });

  it('should round', () => {
    expect(ms(234234234, { long: true })).to.be('3 days');

    expect(ms(-234234234, { long: true })).to.be('-3 days');
  });
});

// numbers

describe('ms(number)', () => {
  it('should not throw an error', () => {
    expect(() => {
      ms(500);
    }).to.not.throwError();
  });

  it('should support milliseconds', () => {
    expect(ms(500)).to.be('500ms');

    expect(ms(-500)).to.be('-500ms');
  });

  it('should support seconds', () => {
    expect(ms(1000)).to.be('1s');
    expect(ms(10000)).to.be('10s');

    expect(ms(-1000)).to.be('-1s');
    expect(ms(-10000)).to.be('-10s');
  });

  it('should support minutes', () => {
    expect(ms(60 * 1000)).to.be('1m');
    expect(ms(60 * 10000)).to.be('10m');

    expect(ms(-1 * 60 * 1000)).to.be('-1m');
    expect(ms(-1 * 60 * 10000)).to.be('-10m');
  });

  it('should support hours', () => {
    expect(ms(60 * 60 * 1000)).to.be('1h');
    expect(ms(60 * 60 * 10000)).to.be('10h');

    expect(ms(-1 * 60 * 60 * 1000)).to.be('-1h');
    expect(ms(-1 * 60 * 60 * 10000)).to.be('-10h');
  });

  it('should support days', () => {
    expect(ms(24 * 60 * 60 * 1000)).to.be('1d');
    expect(ms(24 * 60 * 60 * 10000)).to.be('10d');

    expect(ms(-1 * 24 * 60 * 60 * 1000)).to.be('-1d');
    expect(ms(-1 * 24 * 60 * 60 * 10000)).to.be('-10d');
  });

  it('should round', () => {
    expect(ms(234234234)).to.be('3d');

    expect(ms(-234234234)).to.be('-3d');
  });
});

// numbers with decimal

describe('ms(number, { long: true, decimal: n })', () => {
  it('should not throw an error', () => {
    expect(() => {
      ms(500, { decimal: 1, long: true });
    }).to.not.throwError();
  });

  it('should support milliseconds', () => {
    expect(ms(500, { decimal: 1, long: true })).to.be('500 ms');

    expect(ms(-500, { decimal: 1, long: true })).to.be('-500 ms');
  });

  it('should support seconds', () => {
    expect(ms(1000, { decimal: 1, long: true })).to.be('1 second');
    expect(ms(1200, { decimal: 1, long: true })).to.be('1.2 second');
    expect(ms(1234, { decimal: 2, long: true })).to.be('1.23 second');
    expect(ms(10000, { decimal: 1, long: true })).to.be('10 seconds');

    expect(ms(-1000, { decimal: 1, long: true })).to.be('-1 second');
    expect(ms(-1200, { decimal: 1, long: true })).to.be('-1.2 second');
    expect(ms(-10000, { decimal: 1, long: true })).to.be('-10 seconds');
  });

  it('should support minutes', () => {
    expect(ms(60 * 1000, { decimal: 1, long: true })).to.be('1 minute');
    expect(ms(60 * 1200, { decimal: 1, long: true })).to.be('1.2 minute');
    expect(ms(60 * 10000, { decimal: 1, long: true })).to.be('10 minutes');

    expect(ms(-1 * 60 * 1000, { decimal: 1, long: true })).to.be('-1 minute');
    expect(ms(-1 * 60 * 1200, { decimal: 1, long: true })).to.be('-1.2 minute');
    expect(ms(-1 * 60 * 10000, { decimal: 1, long: true })).to.be(
      '-10 minutes',
    );
  });

  it('should support hours', () => {
    expect(ms(60 * 60 * 1000, { decimal: 1, long: true })).to.be('1 hour');
    expect(ms(60 * 60 * 1200, { decimal: 1, long: true })).to.be('1.2 hour');
    expect(ms(60 * 60 * 10000, { decimal: 1, long: true })).to.be('10 hours');

    expect(ms(-1 * 60 * 60 * 1000, { decimal: 1, long: true })).to.be(
      '-1 hour',
    );
    expect(ms(-1 * 60 * 60 * 1200, { decimal: 1, long: true })).to.be(
      '-1.2 hour',
    );
    expect(ms(-1 * 60 * 60 * 10000, { decimal: 1, long: true })).to.be(
      '-10 hours',
    );
  });

  it('should support days', () => {
    expect(ms(24 * 60 * 60 * 1000, { decimal: 1, long: true })).to.be('1 day');
    expect(ms(24 * 60 * 60 * 1200, { decimal: 1, long: true })).to.be(
      '1.2 day',
    );
    expect(ms(24 * 60 * 60 * 10000, { decimal: 1, long: true })).to.be(
      '10 days',
    );

    expect(ms(-1 * 24 * 60 * 60 * 1000, { decimal: 1, long: true })).to.be(
      '-1 day',
    );
    expect(ms(-1 * 24 * 60 * 60 * 1200, { decimal: 1, long: true })).to.be(
      '-1.2 day',
    );
    expect(ms(-1 * 24 * 60 * 60 * 10000, { decimal: 1, long: true })).to.be(
      '-10 days',
    );
  });

  it('should round with 2 decimal place', () => {
    expect(ms(234234234, { decimal: 2, long: true })).to.be('2.71 days');

    expect(ms(-234234234, { decimal: 2, long: true })).to.be('-2.71 days');
  });

  it('should round with up to 3 decimal place', () => {
    expect(ms(234234234, { decimal: 3, long: true })).to.be('2.711 days');
    expect(ms(234234234, { decimal: 1, long: true0 })).to.be('2.711 days');

    expect(ms(-234234234, { decimal: 3, long: true })).to.be('-2.711 days');
    expect(ms(-234234234, { decimal: 1, long: true0 })).to.be('-2.711 days');

    expect(ms(ms('10.54321 hours'), { decimal: 1, long: true })).to.be(
      '10.5 hours',
    );
    expect(ms(-3 * 66121, { decimal: 1, long: true })).to.be('-3.3 minutes');
  });
});

// numbers

describe('ms(number, { decimal: n })', () => {
  it('should not throw an error', () => {
    expect(() => {
      ms(500, { decimal: 1 });
    }).to.not.throwError();
  });

  it('should support milliseconds', () => {
    expect(ms(500, { decimal: 1 })).to.be('500ms');

    expect(ms(-500, { decimal: 1 })).to.be('-500ms');
  });

  it('should support seconds', () => {
    expect(ms(1000, { decimal: 1 })).to.be('1s');
    expect(ms(1200, { decimal: 1 })).to.be('1.2s');
    expect(ms(10000, { decimal: 1 })).to.be('10s');

    expect(ms(-1000, { decimal: 1 })).to.be('-1s');
    expect(ms(-1200, { decimal: 1 })).to.be('-1.2s');
    expect(ms(-10000, { decimal: 1 })).to.be('-10s');
  });

  it('should support minutes', () => {
    expect(ms(60 * 1000, { decimal: 1 })).to.be('1m');
    expect(ms(60 * 1200, { decimal: 1 })).to.be('1.2m');
    expect(ms(60 * 10000, { decimal: 1 })).to.be('10m');

    expect(ms(-1 * 60 * 1000, { decimal: 1 })).to.be('-1m');
    expect(ms(-1 * 60 * 1200, { decimal: 1 })).to.be('-1.2m');
    expect(ms(-1 * 60 * 10000, { decimal: 1 })).to.be('-10m');
  });

  it('should support hours', () => {
    expect(ms(60 * 60 * 1000, { decimal: 1 })).to.be('1h');
    expect(ms(60 * 60 * 1200, { decimal: 1 })).to.be('1.2h');
    expect(ms(60 * 60 * 10000, { decimal: 1 })).to.be('10h');

    expect(ms(-1 * 60 * 60 * 1000, { decimal: 1 })).to.be('-1h');
    expect(ms(-1 * 60 * 60 * 1200, { decimal: 1 })).to.be('-1.2h');
    expect(ms(-1 * 60 * 60 * 10000, { decimal: 1 })).to.be('-10h');
  });

  it('should support days', () => {
    expect(ms(24 * 60 * 60 * 1000, { decimal: 1 })).to.be('1d');
    expect(ms(24 * 60 * 60 * 1200, { decimal: 1 })).to.be('1.2d');
    expect(ms(24 * 60 * 60 * 10000, { decimal: 1 })).to.be('10d');

    expect(ms(-1 * 24 * 60 * 60 * 1000, { decimal: 1 })).to.be('-1d');
    expect(ms(-1 * 24 * 60 * 60 * 1200, { decimal: 1 })).to.be('-1.2d');
    expect(ms(-1 * 24 * 60 * 60 * 10000, { decimal: 1 })).to.be('-10d');
  });

  it('should round with 2 decimal place', () => {
    expect(ms(234234234, { decimal: 2 })).to.be('2.71d');

    expect(ms(-234234234, { decimal: 2 })).to.be('-2.71d');
  });

  it('should round with up to 3 decimal place', () => {
    expect(ms(234234234, { decimal: 3 })).to.be('2.711d');
    expect(ms(234234234, { decimal: 10 })).to.be('2.711d');

    expect(ms(-234234234, { decimal: 3 })).to.be('-2.711d');
    expect(ms(-234234234, { decimal: 10 })).to.be('-2.711d');

    expect(ms(ms('10.54321 hours'), { decimal: 1 })).to.be('10.5h');
    expect(ms(-3 * 66121, { decimal: 1 })).to.be('-3.3m');
  });
});

// invalid inputs

describe('ms(invalid inputs)', () => {
  it('should throw an error, when ms("")', () => {
    expect(() => {
      ms('');
    }).to.throwError();
  });

  it('should throw an error, when ms(undefined)', () => {
    expect(() => {
      ms(undefined);
    }).to.throwError();
  });

  it('should throw an error, when ms(null)', () => {
    expect(() => {
      ms(null);
    }).to.throwError();
  });

  it('should throw an error, when ms([])', () => {
    expect(() => {
      ms([]);
    }).to.throwError();
  });

  it('should throw an error, when ms({})', () => {
    expect(() => {
      ms({});
    }).to.throwError();
  });

  it('should throw an error, when ms(NaN)', () => {
    expect(() => {
      ms(NaN);
    }).to.throwError();
  });

  it('should throw an error, when ms(Infinity)', () => {
    expect(() => {
      ms(Infinity);
    }).to.throwError();
  });

  it('should throw an error, when ms(-Infinity)', () => {
    expect(() => {
      ms(-Infinity);
    }).to.throwError();
  });
});

import ms from '..';

describe('ms() with invalid inputs', () => {
	it('should throw an error, when ms("")', () => {
		expect(() => ms('')).toThrowError();
	});

	it('should throw an error, when ms(NaN)', () => {
		expect(() => ms(NaN)).toThrowError();
	});

	it('should throw an error, when ms(Infinity)', () => {
		expect(() => ms(Infinity)).toThrowError();
	});

	it('should throw an error, when ms(-Infinity)', () => {
		expect(() => ms(-Infinity)).toThrowError();
	});
});

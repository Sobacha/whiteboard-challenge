var highests = require('../lib/solution');

describe('Solution module', function() {
	describe('highests function', function() {
		test(
			'highests function with an array that includes something other than numbers, return false',
			() => {expect(highests([1,2,3,''])).toBeFalsy()}
		);

		test(
			'if array length is 1, highests function returns highest and null',
			() => {expect(highests([1])).toEqual({firstHigh: 1, secondHigh: null})}
		);

		test(
			'if array is empty, return null',
			() => {expect(highests([])).toBe(null)}
		);
		
		test(
			'if array has all same values, return null for second highest',
			() => {expect(highests([1,1,1])).toEqual({firstHigh: 1, secondHigh: null})}
		);

		test(
			'if array has duplicated highest values, it returns different values for highest/second highest',
			() => {expect(highests([1,2,2])).toEqual({firstHigh: 2, secondHigh: 1})}

		);
	
		test(
			'if array has float numbers, it should work fine.',
			() => {expect(highests([1.1,2,0.2])).toEqual({firstHigh: 2, secondHigh: 1.1})}

		);
	});
});

'use strict'

const printPassengers = require('../lib/solution');

describe('Solution module', function() {
	describe('printPassengers function', function() {

		// valid test case
		const caboose = {name: 'caboose', value: 40, next: null};
		const car4 = {name: 'car4', value: 10, next: caboose};
		const car3 = {name: 'car3', value: 1, next: car4};
		const car2 = {name: 'car2', value: 5, next: car3};
		const car1 = {name: 'car1', value: 15, next: car2};
		const engine = {name: 'engine', value: 2, next: car1};
		
		/*const train = {
			engine: {name: 'engine', value: 2, next:
				{ car1: {name: 'car1', value: 15, next:
					{ car2: {name: 'car2', value: 5, next:
						{ car3: {name: 'car3', value: 1, next:
							{ car4: {name: 'car4', value: 10, next:
								{ caboose: {name: 'caboose', value: 40, next: null}
								}
							}}
						}}
					}}
				}}
		}};*/
		test(
			'if a passing argument is not obj, return false',
			() => {expect(printPassengers('not obj')).toBeFalsy()}
		);

		test(
			'if a passing argument is empty, return null',
			() => {expect(printPassengers({})).toBe(null)}
		);

		test(
			'with valid input, return undefined',
			() => {expect(printPassengers(engine)).toBe(undefined)}
		);
		
		/*test(
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

		);*/
	});
});

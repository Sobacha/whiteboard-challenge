'use strict'

const traverse = require('../lib/solution');

describe('Solution module', function() {
	describe('traverse function', function() {

		// valid test case
		const caboose = {value: 40, next: null};
		const car4 = {value: 10, next: caboose};
		const car3 = {value: 1, next: car4};
		const car2 = {value: 5, next: car3};
		const car1 = {value: 15, next: car2};
		const engine = {value: 2, next: car1};
		
		test(
			'if a passing argument is not obj, return false',
			() => {expect(traverse('not obj')).toBeFalsy()}
		);

		test(
			'if a passing argument is empty, return null',
			() => {expect(traverse({})).toBe(null)}
		);

		test(
			'with valid input, return undefined',
			() => {expect(traverse(engine)).toBe(
				engine.value +
				car1.value +
				car2.value +
				car3.value +
				car4.value +
				caboose.value)}
		);	
	});
});

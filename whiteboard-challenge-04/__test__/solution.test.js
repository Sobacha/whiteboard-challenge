'use strict'

const returnIntersects = require('../lib/solution');

const expected1 = ['sue', 'kathy'];


describe('Solution module', function(){
	describe('returnIntersects function', function(){

		let arr1 = ['mike', 'sue', 'tom', 'kathy', 'henry'];
		let arr2 = ['howey', 'jim', 'sue', 'jennifer', 'kathy', 'hank', 'alex'];
		let arr3 = [];

		describe('valid inputs', function(){

			test(
				'should return an array with values where given two arrays intersect', () => {
				expect(returnIntersects(arr1, arr2)).toEqual(expected1);
			});

			test(
				'should return an empty array if an empty array is passed', () => {
				expect(returnIntersects(arr3, arr2).length).toEqual(0);
			});
		});


		describe('invalid inputs', function(){

			test(
				'should return empty array with not array argument', () => {
				expect(returnIntersects(arr1, '').length).toEqual(0);
			});
		});
	});
});

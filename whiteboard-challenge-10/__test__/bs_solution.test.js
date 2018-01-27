'use strict';


const BS = require('../lib/bs_solution');


describe('bs_solution module', () => {

  describe('BS function', () => {

    describe('valid input', () => {
      test(
        'should return correct answer when n exists in arr', () => {
          expect(BS(2, [1,2,3,4,5])).toEqual('{value: 2, index: 1}');
        });
      test(
        'should return null when n does not exist in arr', () => {
          expect(BS(0, [1,2,3,4,5])).toBeNull();
        });
      test(
        'should return correct answer when n exists in arr with duplicate value', () => {
          expect(BS(2, [1,2,2,3,4,5])).toEqual('{value: 2, index: 1}');
        });
    });

    describe('invalid input', () => {
      test(
        'empty array should throw an error ', () => {
          expect(() => { BS(0, []); }).toThrow('Non empty array need to be passed');
        });
      test(
        'should throw an error when index is not passed', () => {
          expect(() => { BS([1,10]); }).toThrow('Non empty array need to be passed');
        });
      test(
        'should throw an error when array is not passed', () => {
          expect(() => { BS(1); }).toThrow('Non empty array need to be passed');
        });
    });
  });
});

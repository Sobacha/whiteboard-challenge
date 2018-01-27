'use strict';


const bs = require('../lib/bs');


describe('bs module', () => {

  describe('bs function', () => {

    describe('valid input', () => {
      test(
        'should return correct answer when n exists in arr', () => {
          expect(bs(0, 4, 2, [1,2,3,4,5])).toEqual('{value: 2, index: 1}');
        });
      test(
        'should return correct answer when n exists in arr with duplicate value', () => {
          expect(bs(0, 4, 2, [1,2,2,3,4,5])).toEqual('{value: 2, index: 2}');
        });
      test(
        'should return null answer when n does not exist in arr', () => {
          expect(bs(0, 3, 1, [2,3,4,5])).toBeNull();
        });
    });

    describe('invalid input', () => {
      test(
        'empty array should return null', () => {
          expect(bs(0, 0, 0, [])).toBeNull();
        });
      test(
        'should throw an error when index is not number', () => {
          expect(() => { bs('', 1, 10, [1,10]);}).toThrow('Index for start and end must be number');
        });
    });
  });
});

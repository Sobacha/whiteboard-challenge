'use strict';

const rotate = require('../lib/solution');


describe('Solution module', () => {

  describe('rotate function', () => {

    describe('Valid input', () => {
      test('should return a correct answer with a square doubled array', () => {
        let arr = [[1,2,3], [4,5,6], [7,8,9]];
        let expected = [[7,4,1], [8,5,2], [9,6,3]];
        expect(rotate(arr)).toEqual(expected);
      });

      test('should return a correct answer with a rectangle doubled array', () => {
        let arr = [[1,2,3], [4,5,6], [7,8,9], [10,11,12]];
        let expected = [[10,7,4,1], [11,8,5,2], [12,9,6,3]];
        expect(rotate(arr)).toEqual(expected);
      });

      test('should return a correct answer with a doubled array with one inner array', () => {
        let arr = [[1,2,3]];
        let expected = [[1], [2], [3]];
        expect(rotate(arr)).toEqual(expected);
      });

    });

    describe('Invalid input', () => {

      test('should throw an error if input type is not array', () => {
        expect(() => rotate('')).toThrow('Invalid input');
      });

    });
  });
});

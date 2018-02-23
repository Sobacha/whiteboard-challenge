'use strict';

const sortAnagrams = require('../lib/solution');


describe('Solution module', () => {

  describe('sortAnagrams function', () => {

    describe('Valid input', () => {
      test('should return a correct answer with a valid array', () => {
        let arr = ['acre', 'act', 'race', 'cat', 'tac', 'care'];
        let expected = ['acre', 'care', 'race', 'act', 'cat', 'tac'];
        expect(sortAnagrams(arr)).toEqual(expected);
      });

      test('should return null with an empty array', () => {
        expect(sortAnagrams([])).toEqual(null);
      });

      test('should return a correct answer even if no anagram', () => {
        let arr = ['a', 'b', 'c', 'd'];
        let expected = ['a', 'b', 'c', 'd'];
        expect(sortAnagrams(arr)).toEqual(expected);
      });

    });

    describe('Invalid input', () => {

      test('should throw an error if input type is not array', () => {
        expect(() => sortAnagrams('')).toThrow('Invalid input');
      });

    });
  });
});

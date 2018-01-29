'use strict';

const calculateMissing = require('../lib/solution');

describe('Solution module', () => {
  describe('calculateMissing function', () => {

    let noMissArr, oneMissArr;

    beforeAll(() => {
      noMissArr = [];
      for(let i = 1; i < 101; i++){
        noMissArr.push(i);
      }
      //console.log(noMissArr);
      // 50 is missing
      oneMissArr = [];
      for(let i = 1; i < 50; i++){
        oneMissArr.push(i);
      }
      for(let i = 51; i < 101; i++){
        oneMissArr.push(i);
      }
    });
    //console.log(oneMissArr);
    describe('Valid input', () => {
      test('should return a missing number', () => {
        expect(calculateMissing(oneMissArr)).toEqual(50);
      });
    });

    describe('Invalid input', () => {
      test('should return null if no missing', () => {
        expect(calculateMissing(noMissArr)).toBeNull();
      });
      test('should return null if arr is empty', () => {
        expect(calculateMissing([])).toBeNull();
      });
      test('should throw an error if non array is passed', () => {
        expect(() => { calculateMissing('');}).toThrow('Array must be passed');
      });
    });

  });
});

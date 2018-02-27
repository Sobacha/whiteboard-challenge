'use strict';

const findIntersects = require('../lib/solution');



describe('Solution module', function(){
  describe('findIntersects function', function(){

    const expected1 = ['sue', 'kathy'];
    let arr1 = ['mike', 'sue', 'tom', 'kathy', 'henry'];
    let arr2 = ['howey', 'jim', 'sue', 'jennifer', 'kathy', 'hank', 'alex'];

    const expected2 = [1.1];
    let arr3 = [1, 0, 1.1];
    let arr4 = [100, 1.1, '0'];

    describe('valid inputs', function(){

      test(
        'should return an array with values where given two arrays intersect', () => {
          expect(findIntersects(arr1, arr2)).toEqual(expected1);
        });

      test(
        'should return an empty array if no intersect', () => {
          expect(findIntersects(arr3, [])).toEqual([]);
        });

      test(
        'should work correctly with float values', () => {
          expect(findIntersects(arr3, arr4)).toEqual(expected2);
        });
    });


    describe('invalid inputs', function(){

      test(
        'should throw an error if inputs are not instanceof Array', () => {
          expect(() => findIntersects(arr1, '')).toThrow('Invalid input');
        });
    });
  });
});

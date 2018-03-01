'use strict';

const fn = require('../lib/solution');



describe('Solution module', function(){

  describe('valid inputs', function(){

    test(
      'should return a correct value', () => {
        expect(fn(3, 1)).toEqual(3);
      });

    test(
      'should return a correct value(edge)', () => {
        expect(fn(10, 0)).toEqual(1);
      });

    test(
      'should return a correct a negative value(edge)', () => {
        expect(fn(-1, 3)).toEqual(1);
      });

    test(
      'should return a correct a float value(edge)', () => {
        expect(fn(1.1, 4)).toEqual(20);
      });
  });


  describe('invalid inputs', function(){

    test(
      'should throw an error if input is not number', () => {
        expect(() => fn('', 10)).toThrow('Invalid input');
      });
 
  });
});

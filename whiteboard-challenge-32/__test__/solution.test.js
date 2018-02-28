'use strict';

const {iter, recur} = require('../lib/solution');



describe('Solution module', function(){

  describe('valid inputs', function(){

    test(
      'should return a correct value', () => {
        expect(iter(3)).toEqual(2);
        expect(recur(3)).toEqual(2);
      });

    test(
      'should return a correct value(edge)', () => {
        expect(iter(1)).toEqual(1);
        expect(recur(1)).toEqual(1);
      });
  });


  describe('invalid inputs', function(){

    test(
      'should throw an error if input is not number', () => {
        expect(() => iter('')).toThrow('Invalid input');
        expect(() => recur('')).toThrow('Invalid input');
      });
 
    test(
      'should throw an error if input is float', () => {
        expect(() => iter(1.1)).toThrow('Invalid input');
        expect(() => recur(1.1)).toThrow('Invalid input');
      });

    test(
      'should throw an error if input is 0', () => {
        expect(() => iter(0)).toThrow('Invalid input');
        expect(() => recur(0)).toThrow('Invalid input');
      });
  });
});

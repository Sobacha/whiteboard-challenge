'use strict';


const checkBraces = require('../lib/checkBraces');


describe('checkBraces module', () => {

  describe('checkBraces function', () => {

    describe('valid input', () => {
      test(
        '{{}} should return true', () => {
          expect(checkBraces('{{}}')).toBe(true);
        });
      test(
        'empty string should throw an error', () => {
          expect(() => {checkBraces('');}).toThrow('String is required');
        });
      test(
        '}} should return false', () => {
          expect(checkBraces('}}')).toBe(false);
        });
      test(
        '{{}{{}{}}} should return true', () => {
          expect(checkBraces('{{}{{}{}}}')).toBe(true);
        });
      test(
        '{{}}{}{ should return false', () => {
          expect(checkBraces('{{}}{}{')).toBe(false);
        });
    });

    describe('invalid input', () => {
      test(
        'should throw an error if no argument passed', () => {
          expect(() => {checkBraces();}).toThrow('String is required');
        });
    });
  });
});

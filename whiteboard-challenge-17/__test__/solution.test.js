'use strict';

const kTree = require('../lib/kary-tree');
const sum = require('../lib/solution');


describe('Solution module', () => {

  describe('sum function', () => {

    describe('Valid input', () => {
      test('should return a correct answer', () => {
        let KT = new kTree();
        KT.insert(1);
        KT.insert(2,1);
        KT.insert(3,1);
        KT.insert(4,1);
        KT.insert(5,4);
        KT.insert(6,2);

        expect(sum(KT)).toBe(21);
      });

      test('should return an instance of number', () => {
        let KT = new kTree();
        KT.insert(1);
        KT.insert(2,1);
        KT.insert(3,1);
        KT.insert(4,1);
        KT.insert(5,4);
        KT.insert(6,2);

        expect(typeof sum(KT)).toBe('number');
      });

    });

    describe('Invalid input', () => {

      test('should throw an error if input type is wrong', () => {
        expect(() => sum('')).toThrow('Input needs to be tree instance');
      });

      test('should return null if root is null', () => {
        let KT = new kTree();
        expect(sum(KT)).toBeNull();
      });
    });
  });
});

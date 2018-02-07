'use strict';

const kTree = require('../lib/kary-tree');
const maxChild = require('../lib/solution');


describe('Solution module', () => {

  describe('maxChild function', () => {

    describe('Valid input', () => {
      test('should return a correct answer', () => {
        let KT = new kTree();
        KT.insert(1);
        KT.insert(2,1);
        KT.insert(3,1);
        KT.insert(4,1);
        KT.insert(5,4);
        KT.insert(6,2);

        expect(maxChild(KT).val).toBe(1);
      });

    });

    describe('Invalid input', () => {

      test('should throw an error if input type is wrong', () => {
        expect(() => maxChild('')).toThrow('Input needs to be tree instance');
      });

      test('should return null if root is null', () => {
        let KT = new kTree();
        expect(maxChild(KT)).toBeNull();
      });
    });
  });
});

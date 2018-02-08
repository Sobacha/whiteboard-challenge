'use strict';

const kTree = require('../lib/kary-tree');
const Sll = require('../lib/sll');
const karyTreeToSll = require('../lib/solution');


describe('Solution module', () => {

  describe('karyTreeToSll function', () => {

    describe('Valid input', () => {
      test('should return a correct answer', () => {
        let KT = new kTree();
        KT.insert(1);
        KT.insert(2,1);
        KT.insert(3,1);
        KT.insert(4,1);
        KT.insert(5,4);
        KT.insert(6,2);
        const res = karyTreeToSll(KT);

        expect(res.head.value).toBe(1);
        expect(res.head.next.value).toBe(2);
        expect(res.head.next.next.value).toBe(3);
        expect(res.head.next.next.next.value).toBe(4);
        expect(res.head.next.next.next.next.value).toBe(6);
        expect(res.head.next.next.next.next.next.value).toBe(5);
      });

      test('should return a instance of Sll', () => {
        let KT = new kTree();
        KT.insert(1);
        KT.insert(2,1);
        KT.insert(3,1);
        KT.insert(4,1);
        KT.insert(5,4);
        KT.insert(6,2);
        const res = karyTreeToSll(KT);

        expect(res instanceof Sll).toBe(true);

      });
    });

    describe('Invalid input', () => {

      test('should throw an error if input type is wrong', () => {
        expect(() => karyTreeToSll('')).toThrow('Input needs to be tree instance');
      });

      test('should return null if root is null', () => {
        let KT = new kTree();
        expect(karyTreeToSll(KT)).toBeNull();
      });
    });
  });
});

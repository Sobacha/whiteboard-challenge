'use strict';

const btToSortedSll = require('../lib/solution');
const BT = require('../lib/bt');
const TreeNode = require('../lib/tree-node');

describe('Solution module', () => {

  describe('btToSortedSll function', () => {

    describe('valid input', () => {
      test('should return correctly sorted sll', () => {
        const bt = new BT();
        const one = new TreeNode(5);
        const two = new TreeNode(2);
        const three = new TreeNode(12);
        const four = new TreeNode(-4);
        const five = new TreeNode(9);
        bt.root = one;
        bt.root.left = two;
        bt.root.right = three;
        bt.root.left.right = four;
        bt.root.right.left = five;

        const sll = btToSortedSll(bt);

        expect(sll.head.value).toEqual(-4);
        expect(sll.head.next.value).toEqual(2);
        expect(sll.head.next.next.value).toEqual(5);
        expect(sll.head.next.next.next.value).toEqual(9);
        expect(sll.head.next.next.next.next.value).toEqual(12);
      }); 
      test('should return empty SLL if input BT is empty', () => {
        const sll = btToSortedSll(new BT());

        expect(sll.head).toBeNull();
      });

    });

    describe('invalid input', () => {
      test('should throw an error if input is not instanceof BST', () => {
        expect(() => btToSortedSll('')).toThrow('Input is not instaceof Binary Tree');
      });
    });

  });

});

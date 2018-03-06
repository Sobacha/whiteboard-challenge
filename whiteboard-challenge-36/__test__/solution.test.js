'use strict';

const isSameBST = require('../lib/solution');
const BST = require('../lib/bst');
const TreeNode = require('../lib/tree-node');

describe('isSameBST', () => {

  describe('isSameBST function', () => {

    describe('valid input', () => {
      test('should return true if they are same', () => {
        const bst1 = new BST();
        const one1 = new TreeNode(5);
        const two1 = new TreeNode(2);
        const three1 = new TreeNode(12);
        const four1 = new TreeNode(-4);
        const five1 = new TreeNode(9);
        bst1.insert(one1);
        bst1.insert(two1);
        bst1.insert(three1);
        bst1.insert(four1);
        bst1.insert(five1);

        const bst2 = new BST();
        const one2 = new TreeNode(5);
        const two2 = new TreeNode(0);
        const three2 = new TreeNode(12);
        const four2 = new TreeNode(-10);
        const five2 = new TreeNode(9);
        bst2.insert(one2);
        bst2.insert(two2);
        bst2.insert(three2);
        bst2.insert(four2);
        bst2.insert(five2);

        expect(isSameBST(bst1, bst2)).toEqual(true);
      }); 
      test('should return false if they are not same', () => {
        const bst1 = new BST();
        const one1 = new TreeNode(5);
        const two1 = new TreeNode(2);
        const three1 = new TreeNode(12);
        const four1 = new TreeNode(-4);
        bst1.insert(one1);
        bst1.insert(two1);
        bst1.insert(three1);
        bst1.insert(four1);

        const bst2 = new BST();
        const one2 = new TreeNode(5);
        const two2 = new TreeNode(0);
        const three2 = new TreeNode(12);
        const four2 = new TreeNode(-10);
        const five2 = new TreeNode(9);
        bst2.insert(one2);
        bst2.insert(two2);
        bst2.insert(three2);
        bst2.insert(four2);
        bst2.insert(five2);

        expect(isSameBST(bst1, bst2)).toEqual(false);
      });

    });

    describe('invalid input', () => {
      test('should throw an error if input is not instanceof BST', () => {
        expect(() => isSameBST('', '')).toThrow('Invalid input');
      });
    });

  });

});

'use strict';

const TreeNode = require('../lib/tree-node');
const BST = require('../lib/bst');


describe('BST', () => {
  
  describe('BST constructor', () => {

    describe('valid input', () => {
      test('should create an instance of BST with default root', () => {
        const bst = new BST();

        expect(bst.root).toEqual(null);
      });      
      test('should create an instance of BST with root of user input value', () => {
        const root = new TreeNode(5);
        const bst = new BST(root);

        expect(bst.root).toEqual(root);
      });
    });

  });

  describe('BST insert', () => {

    describe('valid input', () => {
      test('should insert a node in a correct position (integer)', () => {
        const bst = new BST();
        const root = new TreeNode(5);
        const two = new TreeNode(2);
        const three = new TreeNode(12);
        const four = new TreeNode(-4);
        const five = new TreeNode(9);
        bst.insert(root);
        bst.insert(two);
        bst.insert(three);
        bst.insert(four);
        bst.insert(five);

        expect(bst.root.value).toEqual(root.value);
        expect(bst.root.left.value).toEqual(two.value);
        expect(bst.root.left.left.value).toEqual(four.value);
        expect(bst.root.right.value).toEqual(three.value);
        expect(bst.root.right.left.value).toEqual(five.value);
      });
      test('should insert a node in a correct position (float)', () => {
        const bst = new BST();
        const root = new TreeNode(5.5);
        const two = new TreeNode(2);
        const three = new TreeNode(12);
        const four = new TreeNode(-4);
        const five = new TreeNode(9.8);
        bst.insert(root);
        bst.insert(two);
        bst.insert(three);
        bst.insert(four);
        bst.insert(five);

        expect(bst.root.value).toEqual(root.value);
        expect(bst.root.left.value).toEqual(two.value);
        expect(bst.root.left.left.value).toEqual(four.value);
        expect(bst.root.right.value).toEqual(three.value);
        expect(bst.root.right.left.value).toEqual(five.value);
      });
    });

    describe('invalid input', () => {      
      test('should throw an error if typeof input is not TreeNode', () => {
        const bst = new BST();
        expect(() => bst.insert()).toThrow('Input needs to be an instanceof TreeNode');
      });
    });
    
  });

  describe('BST preOrderTraversal', () => {

    describe('valid input', () => {
      test('should return array', () => {
        const bst = new BST();
        const root = new TreeNode(5);
        const two = new TreeNode(2);
        const three = new TreeNode(12);
        const four = new TreeNode(-4);
        const five = new TreeNode(9);
        bst.insert(root);
        bst.insert(two);
        bst.insert(three);
        bst.insert(four);
        bst.insert(five);

        expect(bst.preOrderTraversal()).toEqual([0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1]);
      });
    });
  });
});

'use strict';

const isSameBST = require('./lib/solution');
const BST = require('./lib/bst');
const TreeNode = require('./lib/tree-node');

try{
  const bst1 = new BST();
  const root1 = new TreeNode(5);
  const two1 = new TreeNode(2);
  const three1 = new TreeNode(12);
  const four1 = new TreeNode(-4);
  const five1 = new TreeNode(9);
  bst1.insert(root1);
  bst1.insert(two1);
  bst1.insert(three1);
  bst1.insert(four1);
  bst1.insert(five1); 

  const bst2 = new BST();
  const root2 = new TreeNode(5);
  const two2 = new TreeNode(2);
  const three2 = new TreeNode(12);
  const four2 = new TreeNode(-4);
  const five2 = new TreeNode(9);
  bst2.insert(root2);
  bst2.insert(two2);
  bst2.insert(three2);
  bst2.insert(four2);
  bst2.insert(five2);

  console.log('Let\'s say we have two BST(bst1, bst2) that are same in structure and call isSameBST(bst1, bst2):\n', isSameBST(bst1, bst2));

  console.log('If input is not instanceof BST:');
  isSameBST('', '');
}catch(err){
  console.log(err.message);
}

'use strict';

const TreeNode = require('./lib/tree-node');
const BT = require('./lib/bt');
const btToSortedSll = require('./lib/solution');

try{
  const bt = new BT();
  const root = new TreeNode(5);
  const two = new TreeNode(2);
  const three = new TreeNode(12);
  const four = new TreeNode(-4);
  const five = new TreeNode(9);
  bt.root = root;
  root.left = two;
  root.right = three;
  two.left = four;
  three.left = five;

  console.log('Given a binary tree with values [5, 2, 12, -4, 9]:\n');
  let sll = btToSortedSll(bt);

  let cur = sll.head;
  while(cur){
    console.log('Value in sorted sll:\n', cur.value);
    cur = cur.next;
  }

  console.log('\nWhen input is not instaceof Binary Tree, it throws an error. Error MSG:');
  btToSortedSll('');
}catch(err){
  console.log(err.message);
}

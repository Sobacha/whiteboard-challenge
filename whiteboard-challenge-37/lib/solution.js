'use strict';

const TN = require('./tree-node');
const BT = require('./bt');
const BST = require('./bst');
const SLL = require('./sll');

function btToSortedSll(bt){
  if(!(bt instanceof BT)){
    throw new Error('Input is not instaceof Binary Tree');
  }

  let valArr = bt.preOrderTraversal();
  let bst = new BST();
  for(let i = 0; i < valArr.length; i++){
    bst.insert(new TN(valArr[i]));
  }

  valArr = bst.inOrderTraversal();
  let sll = new SLL();
  for(let i = 0; i < valArr.length; i++){
    sll.insertEnd(valArr[i]);
  }
  
  return sll;
}

module.exports = btToSortedSll;

'use strict';

const BST = require('./bst');


function isSameBST(bst1, bst2){
  if(!(bst1 instanceof BST) || !(bst2 instanceof BST)){
    throw new Error('Invalid input');
  }

  let bst1_arr = bst1.preOrderTraversal();
  let bst2_arr = bst2.preOrderTraversal();

  if(bst1_arr.length !== bst2_arr.length){
    return false;
  }
  for(let i = 0; i < bst1_arr.length; i++){
    if(bst1_arr[i] !== bst2_arr[i]){
      return false;
    }
  }
  return true;
}

module.exports = isSameBST;

'use strict';

class TreeNode{
  constructor(value, left = null, right = null){
    if(value === null || value === undefined){
      throw new Error('Value required');
    }
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

module.exports = TreeNode;

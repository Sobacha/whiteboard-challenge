'use strict';

const TreeNode = require('./tree-node');


class BST{
  constructor(root = null){
    this.root = root;
  }
  
  insert(node){
    if(!(node instanceof TreeNode)){
      throw new Error('Input needs to be an instanceof TreeNode');
    }
    if(this.root === null){
      this.root = node;
    }else{
      this._insert(this.root, node);
    }
  }
  
  _insert(root, node){
    if(node.value < root.value){
      if(!root.left){
        root.left = node;
      }else{
        this._insert(root.left, node);
      }
    }else{
      if(!root.right){
        root.right = node;
      }else{
        this._insert(root.right, node);
      }
    }
  }

  preOrderTraversal() {
    if(!this.root){
      return null;
    }
    let arr = [];
    this._preOrderTraversal(this.root, arr);
    return arr;
  }

  _preOrderTraversal(root, arr) {
    if(root === null){
      arr.push(1);
      return null;
    }

    arr.push(0);
    this._preOrderTraversal(root.left, arr);
    this._preOrderTraversal(root.right, arr);
  }
}

module.exports = BST;

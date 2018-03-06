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

  inOrderTraversal() {
    if(!this.root){
      return null;
    }
    let arr = [];
    this._inOrderTraversal(this.root, arr);
    return arr;
  }

  _inOrderTraversal(root, arr) {
    if(root === null){
      return null;
    }

    this._inOrderTraversal(root.left, arr);
    arr.push(root.value);
    this._inOrderTraversal(root.right, arr);
  }

}

module.exports = BST;

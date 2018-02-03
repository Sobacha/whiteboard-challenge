'use strict';

const kTree = require('../lib/kary-tree');


// look for the very bottom leaf
function findBottomNodes(tree) {
  if(!(tree instanceof kTree)) throw new Error('Input needs to be tree instance');
  if(tree.root.val === null) return null;

  let currentTN = tree.root;
  let resArr = [];

  tree.breadthFirst(currentTN => {
    if(currentTN.children.length === 0 && currentTN.val !== null) {
      resArr.push(currentTN);
    }
  });

  return resArr;
}

module.exports = findBottomNodes;

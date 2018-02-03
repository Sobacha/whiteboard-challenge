'use strict';

const karyT = require('./lib/kary-tree');

let karyTree = new karyT();
karyTree.insert(1);
karyTree.insert(2, 1);
karyTree.insert(3, 1);
karyTree.insert(4, 1);
karyTree.insert(5, 3);
karyTree.insert(6, 5);

karyTree.breadthFirst(node => {
  console.log(node.val);
})

karyTree.removeByVal(5);

karyTree.breadthFirst(node => {
  console.log(node.val);
})

console.log(karyTree.findBottomNodes());

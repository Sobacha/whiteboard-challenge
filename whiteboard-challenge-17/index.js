'use strict';

const karyT = require('./lib/kary-tree');
const sum = require('./lib/solution');


let karyTree = new karyT();
karyTree.insert(1);
karyTree.insert(2, 1);
karyTree.insert(3, 1);
karyTree.insert(4, 1);
karyTree.insert(5, 3);
karyTree.insert(6, 5);

console.log('Example tree:\n');
console.log('root.val is 1\n');
console.log('root.children are 2,3,4\n');
console.log('root.children 3\'s children is 5\n');
console.log('root.children 5\'s children is 6\n');
console.log('Here is the sum of tree');
console.log(sum(karyTree));


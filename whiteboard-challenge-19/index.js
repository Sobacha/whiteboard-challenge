'use strict';

const karyT = require('./lib/kary-tree');
const karyTreeToSll = require('./lib/solution');


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
console.log('Here is the sll that has all values in tree in breadth first order.');
const resSll = karyTreeToSll(karyTree);
console.log('First node', resSll.head);
console.log('Second node', resSll.head.next);
console.log('Third node', resSll.head.next.next);
console.log('Fourth node', resSll.head.next.next.next);
console.log('Fifth node', resSll.head.next.next.next.next);
console.log('Sixth node', resSll.head.next.next.next.next.next);


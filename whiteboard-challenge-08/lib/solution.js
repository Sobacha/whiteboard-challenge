'use strict';

const nd = require('./nd');
const sll = require('./sll');

// returns a new sll of intersects
module.exports = function(h1, h2){
  // type of head is not node
  if(!(h1 instanceof nd) || !(h2 instanceof nd)){
    throw new Error('Head(s) is(are) not a node!');
  }

  // otherwisei
  let res = new sll();
  // an array that keeps nodes that it has been gone through
  let nds = new Map();

  let current = h1;
  while(current){
    nds.set(current.value, true);
    current = current.next;
  }

  current = h2;
  while(current){
    // check if current is in nds
    if(nds.has(current.value)){
      res.insertEnd(current.value);
    }
    current = current.next;
  }

  return res;
}

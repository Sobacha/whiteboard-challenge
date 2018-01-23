'use strict';

const nd = require('./nd');

// returns true if a linked list is circular, otherwise false
module.exports = function(head){
  // type of head is not node
  if(!(head instanceof nd)){
    throw new Error('Head is not a node!');
  }

  // otherwise
  // an array that keeps nodes that it has been gone through
  let nds = new Map();

  let current = head;
  while(current){
    // check if current is in nds
    if(nds.has(current)){
      return true;
    }

    // current is not in nds
    nds.set(current, true);
    current = current.next;
  }

  return false;
}

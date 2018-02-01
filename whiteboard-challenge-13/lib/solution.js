'use strict';

const Stack = require('./stack');
const Node = require('./nd');

function dedupe(head){
  if(head.value === null || !(head instanceof Node)){
    throw new Error('Invalid input');
  }

  let stackOne = new Stack();
  let stackTwo = new Stack();

  stackOne.push(head.value);

  let current = head.next;
  while(current){
    if(stackOne.peek().value !== current.value){
      stackOne.push(current.value);
    }
    current = current.next;
  }

  current = stackOne.top;
  while(current){
    stackTwo.push(current.value);
    current = current.next;
  }

  return stackTwo.top;
}

module.exports = dedupe;

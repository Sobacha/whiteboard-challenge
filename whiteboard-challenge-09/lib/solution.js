'use strict'

const Sll = require('./sll');


function findNthNodeFromEnd(sll, n){
  if(!(sll instanceof Sll)){
    throw new Error('That is not a singly linked list');
  }
  if(typeof n !== 'number'){
    throw new Error('N needs to be a number');
  }
  if(n < 0){
    throw new Error('N needs to be 0 or more than 0');
  }

  let length = 0;
  let current = sll.head;
  while(current){
    length++;
    current = current.next;
  }

  if(n > length){
    throw new Error('N exceeds a length of sll');
  }

  let counter = length - n - 1;
  let nds = 0;
  current = sll.head;
  while(nds < counter){
    nds++;
    current = current.next;
  }

  return current;
}

module.exports = findNthNodeFromEnd;

'use strict';

const solution = require('./lib/solution');
const nd = require('./lib/nd');

const head = new nd(1);
const n2= new nd(2);
const n3 = new nd(3);
const n4 = new nd(4);
const n5 = new nd(5);
head.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = head;  

try{
  console.log(solution(head));
  solution('');
} catch(err) {
  console.log(err.message);
}

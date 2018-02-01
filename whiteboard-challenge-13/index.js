'use strict';

const dedupe = require('./lib/solution');
const node = require('./lib/nd');


try{
  // valid input
  let h = new node(1);
  let n1 = new node(1);
  let n2 = new node(1);
  let n3 = new node(1);
  let n4 = new node(2);
  let n5 = new node(1);
  let n6 = new node(3);
  let n7 = new node(4);
  let n8 = new node(1);
  h.next = n1;
  n1.next = n2;
  n2.next = n3;
  n3.next = n4;
  n4.next = n5;
  n5.next = n6;
  n6.next = n7;
  n7.next = n8;

  console.log(dedupe(h).value);

  // invalid input
  dedupe('');
}catch(err){
  console.log(err.message);
}

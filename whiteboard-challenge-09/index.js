'use strict'

const sll = require('./lib/sll');
const nd = require('./lib/nd');
const findNthNodeFromEnd = require('./lib/solution');


// create a sll object of ten nodes
var s = new sll();
s.insertHead(1);
var i = 2;
while(i < 11){
	s.insertEnd(i);
	i++;
}

// this should be 7
console.log(findNthNodeFromEnd(s, 3));

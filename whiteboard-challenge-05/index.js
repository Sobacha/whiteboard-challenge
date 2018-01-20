'use strict'

const sll = require('./lib/sll');
const nd = require('./lib/nd');
const findMid = require('./lib/solution');


// create a sll object of ten nodes
var s = new sll();
s.insertHead(1);
var i = 2;
while(i < 11){
	s.insertEnd(i);
	i++;
}

console.log(findMid(s));

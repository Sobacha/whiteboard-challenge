'use strict'

const sll = require('./lib/sll');
const solution = require('./lib/solution');


// create a sll object of ten nodes
var s = new sll();
s.insertHead(1);
var i = 2;
while(i < 11){
	s.insertEnd(i);
	i++;
}

// create another sll of 3 nodes
var ss = new sll();
ss.insertHead(1);
var ii = 2;
while(ii < 4){
	ss.insertEnd(i);
	ii++;
}

console.log(solution(s.head, ss.head));

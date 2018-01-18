'use strict'

const traverse = require('./lib/solution');

// valid test case
const caboose = {value: 40, next: null};
const car4 = {value: 10, next: caboose};
const car3 = {value: 1, next: car4};
const car2 = {value: 5, next: car3};
const car1 = {value: 15, next: car2};
const engine = {value: 2, next: car1};


console.log(traverse(engine));

'use strict';

//const utils = require('./lib/utils');

// map
const arr1 = [1, 4, 9, 16];
// pass a function to map
const map1 = arr1.map(x => x * 2);
console.log('Result: map on [1, 4, 9, 16]\n', map1);

// filter
var arr2 = ['item', 'time', 'elite', 'fgerfheulvfhr', 'destruction', 'presentation'];
const result = arr2.filter(y => y.length > 6);
console.log('\nResult: filter on [item, time, elite, fgerfheulvfhr, destruction, presentation]\n', result);

// reduce
const arr3 = [4, 3, 2, 1];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log('\nReducer is (accumulator, currentValue) => accumulator + currentValue');
console.log('\nResult: reducer on [4, 3, 2, 1]\n', arr3.reduce(reducer));
console.log('\nResult: reducer on [4, 3, 2, 1] with initial value 5\n', arr3.reduce(reducer, 5));


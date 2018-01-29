'use strict';

const calculateMissing = require('./lib/solution');

try{
  console.log(calculateMissing([1,2,3,5]));
  console.log(calculateMissing(''));
} catch(err) {
  console.log(err.message);
}


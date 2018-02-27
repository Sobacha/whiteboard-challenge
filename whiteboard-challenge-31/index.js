'use strict';

const findIntersects = require('./lib/solution');


try{
  let a1 = [1, 10, 1];
  let a2 = [2, 0, 10];
  console.log('Intersects of [1, 10, 1] and [2, 0, 10] is\n', findIntersects(a1, a2));

  console.log('\nIf either passing array is not instanceof Array, throws an error.\nTry \'\' and []');
  findIntersects('', []);
}catch(err){
  console.log(err.message);
}

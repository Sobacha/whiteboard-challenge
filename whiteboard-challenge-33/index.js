'use strict';

const fn = require('./lib/solution');

try{
  console.log('fn(2, 4) returns ', fn(2, 4));
  console.log('fn(2, \'\') throws an error: ');
  fn(2, '');
}catch(err){
  console.log(err.message);
}

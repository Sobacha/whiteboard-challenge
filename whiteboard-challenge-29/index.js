'use strict';

const sortAnagrams= require('./lib/solution');

try{
  let arr = ['acre', 'act', 'race', 'cat', 'tac', 'care'];
  console.log('Call sortAnagaram function on\n[acre, act, race, cat, tac, care]\n', sortAnagrams(arr));

  // should throw an error
  console.log('\nIt should throw an error if you pass a non array input like string\n');
  sortAnagrams('');
}catch(err){
  console.log(err.message);
}

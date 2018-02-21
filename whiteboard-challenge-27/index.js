'use strict';

const rotate = require('./lib/solution');

try{
  let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log('Rotate 2D square array 90 degrees to clockwise: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\n', rotate(arr));

  // should throw an error
  console.log('\nIt should throw an error if you pass a non array input like string\n');
  rotate('');
}catch(err){
  console.log(err.message);
}

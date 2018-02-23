'use strict';

// for now, assume it's a square and clockwise
module.exports = function rotate(doubledArr){

  // error
  if(!(doubledArr instanceof Array)){
    throw new Error('Invalid input');
  }


  const newRows = doubledArr[0].length;

  // create a new array for result
  let result = [];
  for(let i = 0; i < newRows; i++){
    result[i] = new Array();
  }

  // iterate over doubledArr and update result arr
  for(let y = 0; y < doubledArr[0].length; y++){
    for(let x = doubledArr.length-1; x >= 0; x--){
      result[y].push(doubledArr[x][y]);
    }
  }

  return result;
};

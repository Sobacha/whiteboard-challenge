' use strict';

function sortNumerically(a, b){
  return a - b;
}


function calculateMissing(array){
  if(!(Array.isArray(array))){
    throw new Error('Array must be passed');
  }

  array.sort(sortNumerically);
  //console.log(array);
  for(let i = 0; i < array.length-1; i++){
    //console.log(array[i]);
    if((array[i+1] - array[i]) !== 1){
      return array[i] + 1;
    }
  }
  return null;
}

module.exports = calculateMissing;

'use strict';


function findIntersect(arr1, arr2){
  if(!(arr1 instanceof Array) || !(arr2 instanceof Array)){
    throw new Error('Invalid input');
  }

  arr1 = new Set(arr1);
  arr2 = new Set(arr2);
  let intersectsSet = new Set([...arr1].filter(x => arr2.has(x)));
  return Array.from(intersectsSet);
}

module.exports = findIntersect;

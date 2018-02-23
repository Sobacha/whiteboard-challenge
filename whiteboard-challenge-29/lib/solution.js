'use strict';

function sortAnagrams(arr){
  if(!(arr instanceof Array)){
    throw new Error('Invalid input');
  }

  if(arr.length === 0){
    return null;
  }
  
  let hashMap = {};

  for(let i = 0; i < arr.length; i++){
    let sortedWord = arr[i].split('').sort().join('');
    if(hashMap[sortedWord]){
      hashMap[sortedWord].push(arr[i]);
    }else{
      hashMap[sortedWord] = [arr[i]];
    }
  }

  let res = [];
  for(var key in hashMap){
    res = res.concat(hashMap[key].sort());
  }

  return res;
}

module.exports = sortAnagrams;

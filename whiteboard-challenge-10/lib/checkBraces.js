'use strict';

const Stack = require('./stack');


function checkBraces(str){
  if(!str) throw new Error('String is required');
  if(typeof str !== 'string') throw new Error('Passing argument must be type of string');

  let stackX = new Stack();

  // put braces in stackX
  for(let i = 0; i < str.length; i++){
    if(str[i] === '{'){
      stackX.push(str[i]);
    }else if(str[i] === '}' && stackX.len === 0){
      return false;
    }else if(str[i] === '}' && stackX.len > 0){
      stackX.pop();
    }
  }

  if(stackX.len === 0) return true;
  return false;
}

module.exports = checkBraces;

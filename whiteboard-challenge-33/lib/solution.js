'use strict';

function fn(base, expo){
  if(typeof base !== 'number' || typeof expo !== 'number'){
    throw new Error('Invalid input');
  }

  let pow = Math.pow(base, expo);

  pow = pow.toString().split('');

  pow = pow.filter(charDigit => {
    if(charDigit === '-' || charDigit === '.'){
      return false;
    }
    return true;
  });

  let sum = 0;
  for(let i = 0; i < pow.length; i++){
    sum += parseInt(pow[i], 10);
  }
  return sum;
}

module.exports = fn;

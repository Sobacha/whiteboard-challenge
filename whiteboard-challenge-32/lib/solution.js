'use strict';


function iter(n) {
  if(n === 1){
    return 1;
  }
  if(typeof n !== 'number' || n % 1 !== 0 || n <= 0){
    throw new Error('Invalid input');
  }

  let prev = 0;
  let next = 1;
  let cur;
  for (let i = 1; i < n; i++) {
    cur = prev + next;
    prev = next;
    next = cur;
  }
  return cur;
}

function recur(n) {
  if(typeof n !== 'number' || n % 1 !== 0 || n <= 0){
    throw new Error('Invalid input');
  }

  if (n <= 2) {
    return 1;
  }
  return recur(n-1) + recur(n-2);
}

module.exports = {iter, recur};

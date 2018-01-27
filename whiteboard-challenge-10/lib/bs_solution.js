'use strict';

const bs = require('./bs');

module.exports = function (n, sortedArr){
  if(!sortedArr || sortedArr.length === 0) throw new Error('Non empty array need to be passed');
  if(typeof n !== 'number') throw new Error('N need to be a number');
  if(!Array.isArray(sortedArr)) throw new Error('Array needs to be instance of Array');

  try{
    return bs(0, sortedArr.length-1, n, sortedArr);
  } catch(err) {
    console.log(err.message);
    return;
  }
};

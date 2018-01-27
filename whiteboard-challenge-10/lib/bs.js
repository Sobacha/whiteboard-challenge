'use strict';

function bs (start, end, n, arr){
  if(typeof start !== 'number' || typeof end !== 'number') throw new Error('Index for start and end must be number');

  if(start >= end + 1) return null;
  if(arr.length === 0) return null;
  let midIdx = Math.floor((start+end) / 2);

  if(n === arr[midIdx]) return `{value: ${n}, index: ${midIdx}}`;
  if(n < arr[midIdx]) return bs(start, midIdx - 1, n, arr);
  if(n > arr[midIdx]) return bs(midIdx + 1, end, n, arr);
}

module.exports = bs;

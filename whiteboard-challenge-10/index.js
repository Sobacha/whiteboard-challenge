'use strict';

const checkBraces = require('./lib/checkBraces');
const bs = require('./lib/bs_solution');

// checkBraces
try{
  console.log(checkBraces('}{{}}'));
  console.log(checkBraces(''));
} catch(err) {
  console.log(err.message);
}

// bs
try{
  console.log(bs(1, [1,2,3,4,5]));
  console.log(bs(10, [1,2,3,4,5]));
  console.log(bs([1,2,3,4,5]));
} catch(err) {
  console.log(err.message);
}

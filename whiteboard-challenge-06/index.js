'use strict';

const loop = require('./lib/solution');

try {
  process.stdout.write('Calling function loop to print string ten times!\n');
  
  loop('10', (err, data) => {
    if(err){
      throw err;
    }
    process.stdout.write('callback\n');
  });

  process.stdout.write('Done!\n');
} catch(err) {
  process.stdout.write('Ooops! ' + err.message + '\n');
}

'use strict';


var itr = 0;

function loop(count, cb){

  if(typeof count !== 'number'){
    throw new Error('count needs to be a number!');
  }
  if(typeof cb !== 'function'){
    throw new Error('callback needs to be a function!');
  }
  if(count <= 0){
    throw new Error('count needs to be more than 0!');
  }

  //  console.log('before cb');
  cb();
  itr++;

  if(count > itr){
    loop(count, cb);
  }
  return;
}

module.exports = loop;

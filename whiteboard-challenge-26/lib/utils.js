'use strict';



Array.prototype.map = function(f){
  let resArr = [];
  for(let i = 0; i < this.length; i++){
    resArr.push(f(this[i]));
  }
  return resArr;
}

Array.prototype.filter = function(f){
  let resArr = [];
  for(let i = 0; i < this.length; i++){
    if(f(this[i])){
      resArr.push(this[i]);
    }
  }
  return resArr;
}

Array.prototype.reduce = function(f, initialValue){

  let accum, currentIdx;
  if(initialValue){
    currentIdx = 0;
    accum = initialValue;

    for(let i = currentIdx; i < this.length; i++){
      accum = f(accum, this[i]);
    }
  }else{
    currentIdx = 1;
    accum = this[0];

    for(let i = currentIdx; i < this.length; i++){
      accum = f(accum, this[i]);
    }
  }

  return accum;
}

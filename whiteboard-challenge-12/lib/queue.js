'use strict';

const Stack = require('./stack');


module.exports = class{
  constructor(maxLen = 1048){
    this.head = null;
    this.maxLen = maxLen;
    this.len = 0;
    this.enStack = new Stack();
    this.deStack = new Stack();
  }

  enqueue(val){
    try{
      while(this.deStack.len > 0){
        this.enStack.push(this.deStack.pop().value);
      }

      let newNode = this.enStack.push(val);

      if(!this.head){
        this.head = this.enStack.top;
      }
      this.len = this.enStack.len;


      return newNode;
    }catch(err){
      throw new Error('Queue overflow!');
    }
  }

  dequeue(){
    try{
      while(this.enStack.len > 1){
        this.deStack.push(this.enStack.pop().value);
      }

      this.head = this.deStack.top;
      this.len = this.deStack.len;
      return this.enStack.pop();
    }catch(err){
      throw new Error('Queue is empty!');
    }
  }
}

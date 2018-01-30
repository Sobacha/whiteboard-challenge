'use strict';

const Queue = require('./lib/queue');


try{
  console.log('Create a new instance of Queue');
  let q = new Queue();
  console.log('Length of new Queue is 0');
  console.log(q.len);
  console.log('Head of new Queue is null');
  console.log(q.head);
  console.log('Enequeue value 1');
  console.log(q.enqueue(1));
  console.log('Enequeue value 2');
  console.log(q.enqueue(2));
  console.log('Head of Queue is 1');
  console.log(q.head);
  console.log('Dequeue');
  console.log(q.dequeue());
  console.log('Now head is 2');
  console.log(q.head);
}catch(err){
  console.log(err.message);
}

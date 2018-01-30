#### Queue with two stacks

Queue is implemented with two stacks.

* ENQUEUE method: it inserts a value to a queue and returns it.
* DEQUEUE method: it remove a valure from a queue and returns it.

## How to install
Clone this repo on your computer
```
git clone <clone ssh of this repo>
```

Run the test
```
npm test
```

Usage
```
const Queue = require('<path_to_repo>/lib/queue');

// create new instance
let q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.dequeue(); // this returns 1


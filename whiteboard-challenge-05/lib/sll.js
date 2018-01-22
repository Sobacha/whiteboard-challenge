'use strict'

const Nd = require('./nd');


class SLL {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	insertHead(val) {
		let node = new Nd(val);
		node.next = this.head;
		this.head = node;
		// update this.length
		this.length++;
		return this;
	}

	insertEnd(val) {
		let node = new Nd(val);
		// update this.length
		this.length++;
		if(!this.head) {
			this.head = node;
			return this;
		}

/*		let currentNode = this.head;
		for(let i = 0; i < this.length-1; i++){
			currentNode = currentNode.next;
		}

*/		for(var itr = this.head; itr.next; itr = itr.next);
		itr.next = node;

		return this;
	}

	reverse() {
		let newThis = new SLL();
		let current = this.head;
		while(current){
			newThis.insertHead(current.value);
			current = current.next;
		}

		this.head = newThis.head;
		return this;
	}

	remove(n) {
		// invalid n
		if(n > this.length || n <= 0 || typeof n !== 'number'){
			return null;
		}

		// if n === 1 (remove head)
		if(n === 1){
			this.head = this.head.next;
			return this;
		}

		// find a node one before offset
		let pre = this.findNthNode(n-1);
		// point pre's next to offset's next node
		pre.next = pre.next.next;
		// update this.length
		this.length--;
		return this;
	}	

	findNthNode(n) {
		// invalid n
		if(n > this.length || n <= 0 || typeof n !== 'number'){
			return null;
		}

		// traverse linked list
		let count = 1; // count this.head as first node
		let currentNode = this.head;

		while(count < n){
//			console.log('count in Nth Node: ' + count);
			count++;
//			console.log('currentNode: ' + currentNode.value);
			currentNode = currentNode.next;
		}
//		console.log('nth node: ' + currentNode.value);
		return currentNode;
	}

        findNthNodeFromEnd(n) {
          // reverse
          this.reverse();
          // findNthNode
          let node = this.findNthNode(n);
          // reverse it back
          this.reverse();

          return node;
        }
}

module.exports = SLL;


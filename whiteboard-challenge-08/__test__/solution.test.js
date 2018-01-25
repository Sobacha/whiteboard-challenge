'use strict';

const nd = require('../lib/nd');
const solution = require('../lib/solution');


describe('Solution module', function(){
  describe('function that returns a new sll of intersects between two sll', function(){

    describe('valid inputs', function(){

      // create two sll objs (they share some values)
      const h1 = new nd(1);
      const n2 = new nd(2);
      const n3 = new nd(3);
      const n4 = new nd(4);
      const n5 = new nd(5);
      h1.next = n2;
      n2.next = n3;
      n3.next = n4;
      n4.next = n5;
      const h11 = new nd(1);
      const n22 = new nd(22);
      const n33 = new nd(3);
      const n44 = new nd(44);
      const n55 = new nd(5);
      h11.next = n22;
      n22.next = n33;
      n33.next = n44;
      n44.next = n55;
      
      test(
        'should return sll', () => {
        expect(solution(h1, h11).head.value).toBe(1);
        expect(solution(h1, h11).head.next.value).toBe(3);
        expect(solution(h1, h11).head.next.next.value).toBe(5);
      });
    });

    describe('invalid inputs', function(){
      // create two sll that don't share any value
      const h1 = new nd(1);
      const n2 = new nd(2);
      const n3 = new nd(3);
      const n4 = new nd(4);
      const n5 = new nd(5);
      h1.next = n2;
      n2.next = n3;
      n3.next = n4;
      n4.next = n5;
      const h11 = new nd(11);
      const n22 = new nd(22);
      const n33 = new nd(33);
      const n44 = new nd(44);
      const n55 = new nd(55);
      h11.next = n22;
      n22.next = n33;
      n33.next = n44;
      n44.next = n55;
      
      test(
        'should return empty sll', () => {
        expect(solution(h1, h11).head).toBe(null);
      });

      test(
        'should return error if head is not instance of node', () => {
        expect( () => { solution('', h1) } ).toThrow('Head(s) is(are) not a node!');
      });
    });
  });
});

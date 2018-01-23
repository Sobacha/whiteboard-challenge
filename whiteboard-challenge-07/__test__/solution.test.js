'use strict';

const nd = require('../lib/nd');
const solution = require('../lib/solution');


describe('Solution module', function(){
  describe('function that returns true or false if a sll is circular', function(){

    describe('valid inputs', function(){

      // create a circular sll obj (tail.next is head)
      const head = new nd(1);
      const n2= new nd(2);
      const n3 = new nd(3);
      const n4 = new nd(4);
      const n5 = new nd(5);
      head.next = n2;
      n2.next = n3;
      n3.next = n4;
      n4.next = n5;
      n5.next = head;
      
      test(
        'should return true with a circular sll (tail.next is head)', () => {
        expect(solution(head)).toBe(true);
      });

      // create a circular sll obj (tail.next is head)
      const head1 = new nd(1);
      const n22= new nd(2);
      const n33 = new nd(3);
      const n44 = new nd(4);
      const n55 = new nd(5);
      head1.next = n22;
      n22.next = n33;
      n33.next = n44;
      n44.next = n55;
      n55.next = head1;

      test(
        'should return true with a circular sll (tail.next is some node that is not head)', () => {
        expect(solution(head1)).toBe(true);
      });

      const head3 = new nd(1); 
      head3.next = head3;

      test(
        'should return true with a circular sll (head.next is head)', () => {
        expect(solution(head3)).toBe(true);
      });
      
    });

    describe('invalid input', function(){

      test(
        'should return error if head is not instance of node', () => {
        expect( () => { solution('') } ).toThrow('Head is not a node!');
      });
    });
  });
});

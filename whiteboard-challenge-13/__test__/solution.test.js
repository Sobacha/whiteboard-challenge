'use strict';

const Node = require('../lib/nd');
const dedupe = require('../lib/solution');


describe('Solution module', () => {
  describe('dedupe funciton', () => {

    // valid input
    var h = new Node(1);
    var n1 = new Node(1);
    var n2 = new Node(1);
    var n3 = new Node(1);
    var n4 = new Node(2);
    var n5 = new Node(1);
    var n6 = new Node(3);
    var n7 = new Node(4);
    var n8 = new Node(1);
    h.next = n1;
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    n5.next = n6;
    n6.next = n7;
    n7.next = n8;

    test('Valid input', () => {
      expect(dedupe(h).value).toBe(1);
      expect(dedupe(h).next.value).toBe(2);
      expect(dedupe(h).next.next.value).toBe(1);
      expect(dedupe(h).next.next.next.value).toBe(3);
      expect(dedupe(h).next.next.next.next.value).toBe(4);
      expect(dedupe(h).next.next.next.next.next.value).toBe(1);
    });

    test('Invlid input: input is not instanceof node', () => {
      expect(() => { dedupe(''); }).toThrow('Invalid input');
    });

    test('Invlid input: input is null', () => {
      expect(() => { dedupe(new Node()); }).toThrow('Invalid input');
    });

  });
});

'use strict'

const sll = require('../lib/sll');
const nd = require('../lib/nd');
const findNthNodeFromEnd = require('../lib/solution');


describe('Solution module', function(){
  describe('findNthNodeFromEnd function', function(){

    // create a sll obj
    let validSll = new sll();
    validSll.insertHead(1);
    // insert node in end os all
    for(let i = 2; i < 11; i++){
            validSll.insertEnd(i);			
    }

    describe('valid inputs', function(){

	test(
		'should return a node of value 7', () => {
		expect(findNthNodeFromEnd(validSll, 3).value).toEqual(7);
	});

	test(
		'should return a node of value 10', () => {
		expect(findNthNodeFromEnd(validSll, 0).value).toEqual(10);
	});

    });

    describe('invalid input', function(){

	test(
		'should return error if n is negative', () => {
		expect( () => {
                  findNthNodeFromEnd(validSll, -1);}).toThrow('N needs to be 0 or more than 0');
        });

	test(
		'should return error if n is larger than length of sll', () => {
		expect( () => {
                  findNthNodeFromEnd(validSll, 100);}).toThrow('N exceeds a length of sll');
        });

	test(
		'should return error if n is not a typeof number', () => {
		expect( () => {
                  findNthNodeFromEnd(validSll, '');}).toThrow('N needs to be a number');
        });

	test(
		'should return error if n is null', () => {
		expect( () => {
                  findNthNodeFromEnd(validSll, null);}).toThrow('N needs to be a number');
        });

	test(
		'should return error if n is undefined', () => {
		expect( () => {
                  findNthNodeFromEnd(validSll, undefined);}).toThrow('N needs to be a number');
        });

	test(
		'should return error if sll is not a type sll', () => {
		expect( () => {
                  findNthNodeFromEnd('', 5);}).toThrow('That is not a singly linked list');
        });
    });
  });
});

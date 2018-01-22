'use strict';

const loop = require('../lib/solution');


describe('Solution module', () => {
  describe('loop function', () => {
    describe('Invalid inputs', () => {

      test(
        'should return error if count is not a number type', () => {
          expect(() => {loop('', (err, data) => {});}).toThrow('count needs to be a number!');
        });

      test(
        'should return error if count is not more than 0', () => {
          expect(() => {loop(0, (err, data) => {});}).toThrow('count needs to be more than 0!');
        });

      test(
        'should return error if callback is not a funciton type', () => {
          expect(() => {loop(10, 10);}).toThrow('callback needs to be a function!');
        });

    });

    describe('Valid input', () => {

      test(
        'should return 10', () => {
          let isTen = 0;
          loop(10, (err, data) => {
            if(err){
              process.stdout.write(err.message);
            }
            isTen++;
            return isTen;});
          expect(isTen).toEqual(10);
        });
    });
  });
});

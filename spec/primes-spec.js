var getPrimes = require ('../src/isPrimes.js');// I  imported the file path to the source code
     describe("Case for prime number from 0 to number", function() {
        it("should return 'argument must be a number' for ()", function() {
          expect(getPrimes()).toEqual('argument must be a number');
        });

        it("should return 'invalid number' for -4", function() {
          expect(getPrimes(-4)).toEqual('invalid number');
        });

        it("should return 'invalid number' for 0", function() {
          expect(getPrimes(0)).toEqual('invalid number');
        });

        it("should return '[2]' for 2", function() {
          expect(getPrimes(2)).toEqual([]);
        });

        it("should return '[2]' for 3", function() {
          expect(getPrimes(3)).toEqual([2]);
        });
        it("should return '[2,3]' for 5", function() {
          expect(getPrimes(5)).toEqual([2,3]);
        });
        it("should return '[2]' for 3", function() {
          expect(getPrimes(3)).toEqual([2]);
        });
        it("should return '[2,3,5,7,11,13,17,19]' for 20", function() {
          expect(getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
        });
});
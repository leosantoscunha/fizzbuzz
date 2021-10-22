
import { Chance } from "chance";
import { expect } from "chai";
import { fizzbuzz } from "../src/index";

describe("FizzBuzz Test", () => {
  it("Should return Fizz to number multiples of 3", (done) => {
    for (let index = 1; index <= 100; index++) {
      const print = fizzbuzz(index);
      if (!(index % 3)) {
        expect(print).to.be.equal('Fizz');
      }
    }
    done();
  });
});

/**
 * 
 * Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number 
 * and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
 */
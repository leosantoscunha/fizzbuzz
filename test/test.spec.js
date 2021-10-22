
import { expect } from "chai";
import { fizzbuzz } from "../src/fizzbuzz";

describe("FizzBuzz Test", () => {
  it("should return empty for numbers other than the range 1 to 100", (done) => {
    for (let index = 101; index <= 200; index++) {
      const print = fizzbuzz(index);
      expect(print).to.be.equal('');
    }
    done();
  });

  it("Should return Fizz to number multiples of 3 and Buzz to multiples of 5 and FizzBuzz multiples of both", (done) => {
    for (let index = 1; index <= 100; index++) {
      const print = fizzbuzz(index);
      if (!(index % 3) && !(index % 5)) {
        expect(print).to.be.equal('FizzBuzz');
      } else if (!(index % 3)) {
        expect(print).to.be.equal('Fizz');
      } else if (!(index % 5)) {
        expect(print).to.be.equal('Buzz');
      } else {
        expect(print).to.be.equal(index);
      }
    }
    done();
  });
});

// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./6");
const chai = require("chai");

it("Test Case #1", function () {
  const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
  const expected = 6;
  chai.expect(program.longestPeak(array)).to.deep.equal(expected);
});

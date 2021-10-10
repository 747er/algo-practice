// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./threeLargest");
const chai = require("chai");

it("Searching, Test Case #1", function () {
  chai
    .expect(
      program.findThreeLargestNumbers([
        141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7,
      ])
    )
    .to.deep.equal([18, 141, 541]);
});

// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./yt1");
const chai = require("chai");

it("Test Case YT #1", function () {
  const array = [3, -2, 0, 105, -40, 41];
  const maxSum = 107;
  chai.expect(program.maximumSumSubarray(array)).to.deep.equal(maxSum);
});

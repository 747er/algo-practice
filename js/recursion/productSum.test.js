// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./productSum");
const chai = require("chai");

it("Recursion Test Case #1", function () {
  const test = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];
  chai.expect(program.productSum(test)).to.deep.equal(12);
});

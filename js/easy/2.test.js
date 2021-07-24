// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./2");
const chai = require("chai");

it("Easy 2. Test Case #1", function () {
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1, 10];
  chai.expect(program.isValidSubsequence(array, sequence)).to.deep.equal(true);
});

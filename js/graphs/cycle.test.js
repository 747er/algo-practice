// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./cycle");
const chai = require("chai");

it("Test Case #1", function () {
  chai.expect(program.hasSingleCycle([2, 3, 1, -4, -4, 2])).to.deep.equal(true);
});

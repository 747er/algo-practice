// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./1");
const chai = require("chai");

it("Medium 1, Test Case #1", function () {
  chai
    .expect(program.threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
    .to.deep.equal([
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ]);
});

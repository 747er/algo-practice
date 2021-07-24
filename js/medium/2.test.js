// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./2");
const chai = require("chai");

it("Medium 2, Test Case #1", function () {
  chai
    .expect(
      program.smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])
    )
    .to.deep.equal([28, 26]);
});

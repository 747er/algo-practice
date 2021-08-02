// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./12");
const chai = require("chai");

it("Hard 12, Test Case #1", function () {
  chai
    .expect(program.minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]))
    .to.deep.equal(4);
});

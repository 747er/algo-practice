// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./16");
const chai = require("chai");

it("Easy 16, Test Case #1", function () {
  chai
    .expect(program.binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
    .to.deep.equal(3);
});

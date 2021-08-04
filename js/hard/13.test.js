// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./13");
const chai = require("chai");

it("Hard 13, Test 1 Case #1", function () {
  chai
    .expect(program.waterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]))
    .to.deep.equal(48);
});

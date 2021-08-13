// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./20");
const chai = require("chai");

it("Medium 20, Test Case #1", function () {
  chai
    .expect(program.maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]))
    .to.deep.equal(330);
});

// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./14");
const chai = require("chai");

it("Easy 14, Test Case #1", function () {
  chai.expect(program.getNthFib(6)).to.deep.equal(5);
});

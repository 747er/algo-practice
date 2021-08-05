// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./4");
const chai = require("chai");

it("Medium 4, Test Case #1", function () {
  const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
  const expected = true;
  const actual = program.isMonotonic(array);
  chai.expect(actual).to.deep.equal(expected);
});

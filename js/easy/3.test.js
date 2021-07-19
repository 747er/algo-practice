// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./3");
const chai = require("chai");

it("Test Case #1", function () {
  const input = [1, 2, 3, 5, 6, 8, 9];
  const expected = [1, 4, 9, 25, 36, 64, 81];
  const actual = program.sortedSquaredArray(input);
  chai.expect(actual).to.deep.equal(expected);
});

it("Test Case #2", function () {
  const input = [-10, 1, 2, 3, 5, 6, 8, 9];
  const expected = [1, 4, 9, 25, 36, 64, 81, 100];
  const actual = program.sortedSquaredArray(input);
  chai.expect(actual).to.deep.equal(expected);
});

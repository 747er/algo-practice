// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./9");
const chai = require("chai");

it("Medium 9, Test Case #1", function () {
  const intervals = [
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10],
  ];
  const expected = [
    [1, 2],
    [3, 8],
    [9, 10],
  ];
  const actual = program.mergeOverlappingIntervals(intervals);
  chai.expect(actual).to.deep.equal(expected);
});

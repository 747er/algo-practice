// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./sunsetViews");
const chai = require("chai");

it("Test Case #1", function () {
  const buildings = [3, 5, 4, 4, 3, 1, 3, 2];
  const direction = "EAST";
  const expected = [1, 3, 6, 7];
  const actual = program.sunsetViews(buildings, direction);
  chai.expect(actual).to.deep.equal(expected);
});

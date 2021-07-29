// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./10");
const chai = require("chai");

it("Easy 10, Test Case #1", function () {
  const queries = [3, 2, 1, 2, 6];
  const expected = 17;
  const actual = program.minimumWaitingTime(queries);
  chai.expect(actual).to.deep.equal(expected);
});

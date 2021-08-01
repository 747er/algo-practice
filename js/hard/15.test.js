// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./15");
const chai = require("chai");

it("Hard 15, Test Case #1", function () {
  chai
    .expect(
      program.diskStacking([
        [2, 1, 2],
        [3, 2, 3],
        [2, 2, 8],
        [2, 3, 4],
        [2, 2, 1],
        [4, 4, 5],
      ])
    )
    .to.deep.equal([
      [2, 1, 2],
      [3, 2, 3],
      [4, 4, 5],
    ]);
});

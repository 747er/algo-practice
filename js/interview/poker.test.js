const program = require("./poker");
const chai = require("chai");

it("Poker, Test Case #1", function () {
  const output = program.pokerSolver([
    [6, 2, 4, 9, "J"],
    [3, 4, 5, 5, 5],
    [3, 4, 5, 5, "A"],
  ]);
  chai.expect(output).to.deep.equal(0);
});

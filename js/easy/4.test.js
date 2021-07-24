// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./4");
const chai = require("chai");

it("Easy 4. Test Case #1", function () {
  const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ];
  const results = [0, 0, 1];
  const expected = "Python";
  const actual = program.tournamentWinner(competitions, results);
  chai.expect(actual).to.deep.equal(expected);
});

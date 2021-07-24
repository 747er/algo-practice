// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./3");
const chai = require("chai");

it("Medium 3, Test Case #1", function () {
  const array = [2, 1, 2, 2, 2, 3, 4, 2];
  const toMove = 2;
  const expectedStart = [1, 3, 4];
  const expectedEnd = [2, 2, 2, 2, 2];
  const output = program.moveElementToEnd(array, toMove);
  const outputStart = sorted(output.slice(0, 3));
  const outputEnd = output.slice(3);
  chai.expect(outputStart).to.deep.equal(expectedStart);
  chai.expect(outputEnd).to.deep.equal(expectedEnd);
});

const sorted = (array) => array.sort((a, b) => a - b);

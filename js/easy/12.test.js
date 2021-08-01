// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./12");
const chai = require("chai");

it("East 12, Test Case #1", function () {
  const redShirtSpeeds = [5, 5, 3, 9, 2];
  const blueShirtSpeeds = [3, 6, 7, 2, 1];
  const fastest = true;
  const expected = 32;
  const actual = program.tandemBicycle(
    redShirtSpeeds,
    blueShirtSpeeds,
    fastest
  );
  chai.expect(actual).to.deep.equal(expected);
});

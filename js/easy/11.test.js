// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./11");
const chai = require("chai");

it("Easy 11, Test Case #1", function () {
  const redShirtHeights = [5, 8, 1, 3, 4];
  const blueShirtHeights = [6, 9, 2, 4, 5];
  const expected = true;
  const actual = program.classPhotos(redShirtHeights, blueShirtHeights);
  chai.expect(actual).to.deep.equal(expected);
});

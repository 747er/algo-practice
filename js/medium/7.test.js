// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./7");
const chai = require("chai");

it("Medium 7, Test Case #1", function () {
  const array = [5, 1, 4, 2];
  const expected = [8, 40, 10, 20];
  const actual = program.arrayOfProducts(array);
  chai.expect(actual).to.deep.equal(expected);
});

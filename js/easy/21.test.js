// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./21");
const chai = require("chai");

it("Easy 21, Test Case #1", function () {
  chai.expect(program.isPalindrome("abcdcba")).to.deep.equal(true);
});

it("Easy 21, Test Case #2", function () {
  chai.expect(program.isPalindrome("abcdcbaz")).to.deep.equal(false);
});

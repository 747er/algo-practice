// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./longestPal");
const chai = require("chai");

it("Longest Palindromic, Test #1", function () {
  const phoneNumber = "fewsdvdvevwvwvwveabcdefhhfedcbafefe";
  const expected = "abcdefhhfedcba";
  const actual = program.longestPalindrome(phoneNumber);
  chai.expect(actual).to.deep.equal(expected);
});

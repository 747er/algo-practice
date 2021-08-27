// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./longestCommonSequence");
const chai = require("chai");

it("Test Case #1", function () {
  chai
    .expect(program.longestCommonSubsequence("ZXVVYZW", "XKYKZPW"))
    .to.deep.equal(["X", "Y", "Z", "W"]);
});

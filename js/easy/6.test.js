// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./6");
const chai = require("chai");

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

it("Easy 6. Test Case #1", function () {
  const root = new BST(10);
  root.left = new BST(5);
  root.left.left = new BST(2);
  root.left.left.left = new BST(1);
  root.left.right = new BST(5);
  root.right = new BST(15);
  root.right.left = new BST(13);
  root.right.left.right = new BST(14);
  root.right.right = new BST(22);
  const expected = 13;
  const actual = program.findClosestValueInBst(root, 12);
  chai.expect(actual).to.deep.equal(expected);
});

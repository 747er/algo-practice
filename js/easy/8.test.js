// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./8");
const chai = require("chai");

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

it("Easy 8, Test Case #1", function () {
  const root = new BinaryTree(1);
  root.left = new BinaryTree(2);
  root.left.left = new BinaryTree(4);
  root.left.left.left = new BinaryTree(8);
  root.left.left.right = new BinaryTree(9);
  root.left.right = new BinaryTree(5);
  root.right = new BinaryTree(3);
  root.right.left = new BinaryTree(6);
  root.right.right = new BinaryTree(7);
  const actual = program.nodeDepths(root);
  chai.expect(actual).to.deep.equal(16);
});

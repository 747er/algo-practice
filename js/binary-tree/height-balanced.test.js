// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./height-balanced");
const chai = require("chai");

const { BinaryTree } = program;

it("Height Balanced, Test Case #1", function () {
  const root = new BinaryTree(1);
  root.left = new BinaryTree(2);
  root.right = new BinaryTree(3);
  root.left.left = new BinaryTree(4);
  root.left.right = new BinaryTree(5);
  root.right.right = new BinaryTree(6);
  root.left.right.left = new BinaryTree(7);
  root.left.right.right = new BinaryTree(8);
  const expected = true;
  const actual = program.heightBalancedBinaryTree(root);
  chai.expect(actual).to.deep.equal(expected);
});

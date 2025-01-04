const { expect } = require("chai");

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let findClosestValueInBstHelper = function (tree, target, closest) {
    if (tree === null) return closest;
    if (Math.abs(target-closest) > Math.abs(target - tree.value)) {
        closest = tree.value;
    }
    if (target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closest);
    } else if (target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
        return closest
    }
};

let findClosestValueInBst = function (tree, target) {
  return findClosestValueInBstHelper(tree, target, tree.value);
};

// TEST ONE
const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);
const result = findClosestValueInBst(root, 12);
expect(result).to.deep.equal(13);

// TEST TWO
const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(25);
const result2 = findClosestValueInBst(root, 24);
expect(result2).to.deep.equal(25);

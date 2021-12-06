const { expect } = require("chai");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var mergeTrees = function (t1, t2) {
  if (!t1 && !t2) return null;
  const t1Val = t1 ? t1.val : 0;
  const t2Val = t2 ? t2.val : 0;
  console.log(t1Val);
  const val = t1Val + t2Val;
  const root = new TreeNode(val);
  root.left = mergeTrees(t1 ? t1.left : null, t2 ? t2.left : null);
  root.right = mergeTrees(t1 ? t1.right : null, t2 ? t2.right : null);
  return root;
};

//  1     1     =    2
let t1node1 = new TreeNode(1, null, null);
let t1node2 = new TreeNode(1, null, null);
let t1expectedResult = new TreeNode(2, null, null);
expect(mergeTrees(t1node1, t1node2)).to.deep.equal(t1expectedResult);

//  2     3     =    5
// n n   4 n    =   4 n
let t2node3 = new TreeNode(4, null, null);
let t2node2 = new TreeNode(3, t2node3, null);
let t2node1 = new TreeNode(2, null, null);
let t2expectedResult = new TreeNode(5, t2node3, null);
expect(mergeTrees(t2node1, t2node2)).to.deep.equal(t2expectedResult);

//
// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]

// Input: root1 = [1], root2 = [1,2]
// Output: [2,2]

const expect = require("chai").expect;

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// https://leetcode.com/problems/squares-of-a-sorted-array/
var sortedSquares = function (nums) {
  let sortedArray = Array(nums.length).fill(0);
  let lIdx = 0;
  let rIdx = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[lIdx] * nums[lIdx] > nums[rIdx] * nums[rIdx]) {
      sortedArray[i] = nums[lIdx] * nums[lIdx];
      lIdx++;
    } else {
      sortedArray[i] = nums[rIdx] * nums[rIdx];
      rIdx--;
    }
  }

  return sortedArray;
};

expect(sortedSquares([-4, -1, 0, 3, 10])).to.deep.equal([0, 1, 9, 16, 100]);
expect(sortedSquares([-7, -3, 2, 3, 11])).to.deep.equal([4, 9, 9, 49, 121]);

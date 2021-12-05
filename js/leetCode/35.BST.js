const expect = require("chai").expect;

// https://leetcode.com/problems/search-insert-position/submissions/
var searchInsert = function (nums, target) {
  if (!nums.length) return -1;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return start;
};

let result = searchInsert([1, 3, 5, 6], 5);
let result1 = searchInsert([1, 3, 5, 6], 0);
let result2 = searchInsert([1, 3, 6, 9, 11, 15, 20, 35], 34);
let result3 = searchInsert([1, 3, 5, 6], 2);

expect(result).to.equal(2);
expect(result1).to.equal(0);
expect(result2).to.equal(7);
expect(result3).to.equal(1);

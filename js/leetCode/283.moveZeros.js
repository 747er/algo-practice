// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

const { expect } = require("chai");

// Note that you must do this in-place without making a copy of the array.
// SLOW:
function moveZeroes(nums) {
  function findReplacement(idx) {
    if (idx === nums.length) {
      return 0;
    }
    if (nums[idx] === 0) return findReplacement(idx + 1);

    const replacement = nums[idx];
    nums[idx] = 0;
    return replacement;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) {
      nums[i] = findReplacement(i + 1);
    }
  }
  return nums;
}

// FAST:
// [0,1,0,3,12]
function moveZeroes(nums) {
  var scoutIdx = 0;
  for (var i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i] !== 0) {
      nums[scoutIdx] = nums[i];
      nums[i] = scoutIdx === i ? nums[i] : 0;
      scoutIdx++;
    }
  }
}

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
const simpleInput = [0, 0, 1, 1, 1];
const simpleOutput = [1, 1, 1, 0, 0];
expect(moveZeroes(simpleInput)).to.eql(simpleOutput);

const input = [0, 1, 0, 3, 12];
const output = [1, 3, 12, 0, 0];
expect(moveZeroes(input)).to.eql(output);

const inputz = [1];
const outputz = [1];
expect(moveZeroes(inputz)).to.eql(outputz);

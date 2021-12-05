const expect = require("chai").expect;

function search(nums, target) {
  if (nums == null || nums.length == 0) return -1;
  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}

function search(arr, target) {
  if (!arr.length) return -1;

  let left = 0;
  let right = arr.length - 1;
  // let mid = Math.floor(arr.length / 2)
  console.log(right);

  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return -1;
}

let result = search([-1, 0, 3, 5, 9, 12], 9);
let result2 = search([-1, 0, 3, 5, 9, 12, 50, 100, 121], 12);

expect(result).to.equal(4);
expect(result2).to.equal(5);

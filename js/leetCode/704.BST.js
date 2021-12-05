const expect = require("chai").expect;

// function search(nums, target) {
//   if (nums == null || nums.length == 0) return -1;
//   left = 0;
//   right = nums.length - 1;

//   while (left <= right) {
//     mid = Math.floor(left + (right - left) / 2);
//     if (nums[mid] == target) return mid;
//     if (nums[mid] > target) right = mid - 1;
//     else left = mid + 1;
//   }
//   return -1;
// }

function search(arr, target) {
  if (arr == null || !arr.length) return -1;

  let left = 0;
  let right = arr.length - 1;
  console.log(right);

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

let result = search([-1, 0, 3, 5, 9, 12], 2);
let result1 = search([-1, 0, 3, 5, 9, 12], 9);
let result2 = search([-1, 0, 3, 5, 9, 12, 50, 100, 121], 12);
let result3 = search([5], 0);

expect(result).to.equal(-1);
expect(result1).to.equal(4);
expect(result2).to.equal(5);
expect(result3).to.equal(0);

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function (nums) {
//   let max = 0;
//   let idx = 0;
//   let target = nums.length - 1;

//   while (idx < target) {
//     max = Math.max(max, nums[idx] + idx);

//     console.log(max);

//     if (max >= target) {
//       return true;
//     }
//     idx++;
//   }

//   return false;
// };
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = 0;
  let idx = 0;
  let target = nums.length - 1;

  while (idx < nums.length) {
    max = Math.max(max, nums[idx] + idx);

    if (max >= target) {
      return true;
    }

    if (max === idx) {
      return false;
    }

    idx++;
  }
};

// var canJump = function (nums) {
//   let idx = 0;
//   let max = 0;
//   let target = nums.length - 1;

//   while (idx < nums.length) {
//     max = Math.max(max, idx + nums[idx]);

//     if (max >= target) {
//       return true;
//     }

//     if (max <= idx && nums[idx] === 0) {
//       return false;
//     }

//     idx++;
//   }

//   return false;
// };

// console.log(canJump([2, 3, 1, 1, 5, 0, 0, 0, 0, 0, 16]));
// console.log(canJump([0, 2, 3]));
console.log(canJump([3, 2, 1, 0, 4]));

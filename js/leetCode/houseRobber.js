/*    
// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint
// stopping you from robbing each of them is that adjacent houses have
// security systems connected and it will automatically contact the police
// if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each
// house, return the maximum amount of money you can rob tonight without
// alerting the police.

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
*/

/*    
// Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for House Robber.
// Memory Usage: 33.8 MB, less than 25.89% of JavaScript online submissions for House Robber.
    O(n) time, O(1) space

    - Bottom up strategy
    - Iterative
    - Memoization

    Trick: At index [i], you only need to know the maximum profit at [i - 1] and [i - 2]. This is a slight variation on fibonacci.
*/
// var rob = function (nums) {
//     if (!nums.length) return 0;
//     if (nums.length === 1) return nums[0];
//     if (nums.length === 2) return Math.max(nums[0], nums[1]);

//     let maxAtTwoBefore = nums[0];
//     let maxAtOneBefore = Math.max(nums[0], nums[1]);

//     for (let i = 2; i < nums.length; i++) {
//       const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

//       console.log(i)
//       console.log(maxAtCurrent);

//       maxAtTwoBefore = maxAtOneBefore;
//       maxAtOneBefore = maxAtCurrent;
//     }

//     return maxAtOneBefore;
//   };

//
// Runtime: 68 ms, faster than 90.14% of JavaScript online submissions for House Robber.
// Memory Usage: 36.9 MB, less than 16.04% of JavaScript online submissions for House Robber.
// let rob = function(nums) {
//     let previous = 0;
//     let current = 0;
//     let temp;
//     for (let x of nums) {
//         temp = current;
//         current = Math.max(x+previous, current);
//         previous = temp;
//     }
//     return current;
// }

//   console.log(rob([1, 2, 3, 1]));
//   console.log(rob([1, 2, 3, 1, 6, 7, 8, 9, 10, 2, 4, 22, 1, 3, 5, 4]));

/*
At each house, we can choose to either rob or skip
If we choose to rob, we can't rob the next house
If we choose to skip, we can rob the next house

dp[i] is the maximum amount of money we can rob without alerting the police at house i
dp[i] = max(dp[i-2] + nums[i], dp[i-1])

    // T.C: O(N)
    // S.C: O(N)
*/
// var rob = function(nums) {
//     if (nums === null || nums.length === 0) {
//         return 0;
//     }
//     let dp = new Array(nums.length);
//     dp[0] = nums[0];
//     dp[1] = Math.max(nums[0], nums[1]);
//     for (let i = 2; i < nums.length; i++) {
//         dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1]);
//     }
//     console.log(dp)
//     return dp[nums.length - 1];
// };

// Shorter way to do one above
var rob = function (nums) {
  let [robn1, robn2] = [0, 0];
  nums.forEach((n) => {
    let temp = Math.max(n + robn2, robn1);
    robn2 = robn1;
    robn1 = temp;
  });
  return robn1;
};

console.log(rob([1, 2, 3, 1]));

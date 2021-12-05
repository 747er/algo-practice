/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  if (!nums || !nums.length) return 0;
  var sums = { 0: 1 };
  var currentSum = 0;
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    if (sums[currentSum - k]) count += sums[currentSum - k];
    sums[currentSum] = sums[currentSum] ? sums[currentSum] + 1 : 1;
  }
  return count;
};

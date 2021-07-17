function twoNumberSum(array, targetSum) {
  const nums = {};

  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }

  return [];
}

exports.twoNumberSum = twoNumberSum;

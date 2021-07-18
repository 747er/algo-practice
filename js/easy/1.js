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

// MISTAKE 7/16
// THE ERROR HERE IS USING *IN* INSTEAD OF *OF*
// TO LOOP THROUGH THE ARRAY.
// function twoNumberSum(array, targetSum) {
//   let checkedHash = {};

//   for (const number in array) {
//     const neededNumber = targetSum - number;
//     if (neededNumber in checkedHash) {
//       return [neededNumber, number];
//     } else {
//       checkedHash[number] = true;
//     }
//   }
//   return [];
// }

// 7/17
// function twoNumberSum(array, targetSum) {
//   const nums = {};

//   for (number of array) {
//     difference = targetSum - number;
//     if (difference in nums) {
//       return [number, difference];
//     } else {
//       nums[number] = true;
//     }
//   }
//   return [];
// }

exports.twoNumberSum = twoNumberSum;

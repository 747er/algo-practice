const { expect } = require("chai");

// NON REPEATING PAIRS
function pairWithGivenDifference(nums, k) {
  let seen = {};
  let result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const difference = nums[i] - k;

    if (difference in seen) {
      result.push([difference, nums[i]]);
      delete seen[difference];
    } else {
      seen[nums[i]] = true;
    }
  }

  // RETURN ARRAY OF RESULTS
  // return (!result.length) ? false : result
  // RETURN NUMBER OF RESULTS
  return !result.length ? false : result.length;
}

// RETURN RESULT
// let nullResult = pairWithGivenDifference([1,3,40,2,80], 100)
// let result = pairWithGivenDifference([1,2,3,40,80], 78)
// expect(pairWithGivenDifference).to.exist
// expect(nullResult).to.equal(false)
// expect(result).to.deep.equal([2,80])

// RETURN NUMBER OF RESULTS

// let negativeresultCount = pairWithGivenDifference([-3,-2,-1],1)
// expect(negativeresultCount).to.equal(2)

// let negativeresultCount = pairWithGivenDifference([-3,0,5],2)
// expect(negativeresultCount).to.equal(1)
// let resultCount = pairWithGivenDifference([3,1,4,1,5,7,9,-3],2)
// expect(resultCount).to.equal(2)

// let resultCount = pairWithGivenDifference([1,2,4,4,3,3,0,9,2,3],3)
// expect(resultCount).to.equal(2)

// NON REPEATING PAIRS
var findUniquePairCount = function (nums, k) {
  if (nums.length === 0 || k < 0) return 0;
  let myMap = new Map(),
    count = 0;

  //Get numCount
  for (num of nums) {
    let incIfExists = myMap.get(num) + 1;
    myMap.set(num, incIfExists || 1);
  }

  //search solutions
  myMap.forEach((value, key) => {
    if (k === 0) {
      if (value > 1) count++;
    } else {
      if (myMap.has(key + k)) count++;
    }
  });

  return count;
};

let resultCount = findUniquePairCount([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3);
expect(resultCount).to.equal(2);

// let resultCount2 = findUniquePairCount([3,1,4,1,5],2)
// expect(resultCount2).to.equal(2)

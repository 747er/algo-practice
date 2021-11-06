// BACKTRACKING RECURSION

// Given an array of distinct integers candidates and a target integer target,
// return a list of all unique combinations of candidates where the chosen numbers sum to target.
// You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// var combinationSum = function (candidates, target) {
//   let index = 0;
//   let tempDataStruct = [];
//   let result = [];

//   function backtracking(index, target, tempDataStruct) {
//     if (target === 0) {
//       result.push([...tempDataStruct]);
//       return;
//     }

//     if (target < 0) return;

//     for (let i = index; i < candidates.length; i++) {
//       tempDataStruct.push(candidates[i]);
//       backtracking(i, target - candidates[i], tempDataStruct);
//       tempDataStruct.pop();
//     }
//   }
//   backtracking(index, target, tempDataStruct);
//   return result;
// };

var combinationSum = function (candidates, target) {
  let index = 0;
  let results = [];
  let tempDS = [];

  candidates = candidates.filter((candidate) => candidate <= target);

  const findSums = function (index, target, tempDS) {
    if (target === 0) {
      results.push([...tempDS]);
      return;
    }

    if (target < 0) {
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      tempDS.push(candidates[i]);
      findSums(i, target - candidates[i], tempDS);
      tempDS.pop();
    }
  };

  findSums(index, target, tempDS);
  return results;
};

console.log(combinationSum([2, 3, 6, 7], 7));

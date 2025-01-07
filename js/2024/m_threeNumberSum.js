// Three Number Sum [medium] [arrays]
// Not correctly sorted at end.
const threeNumberSum = (array, targetSum) => {
    array.sort((a, b) => a - b);
    const results = [];
  
    for (let idx = 1; idx < array.length - 2; idx++) {
      let left = idx - 1;
      let right = idx + 1;
  
      while (left >= 0 && right < array.length) {
        const currentSum = array[left] + array[idx] + array[right];
        if (currentSum === targetSum) {
          results.push([array[left], array[idx], array[right]]);
          left--;
          right++;
        } else if (currentSum < targetSum) {
          right++;
        } else if (currentSum > targetSum) {
          left--;
        }
      }
    }
  
    return results;
  };
  
  const threeNumberSumCorrect = (array, targetSum) => {
    array.sort((a, b) => a - b);
    const results = [];
  
    for (let idx = 0; idx < array.length - 2; idx++) {
      let left = idx + 1;
      let right = array.length - 1;
  
      while (left < right) {
        const currentSum = array[left] + array[idx] + array[right];
        if (currentSum === targetSum) {
          results.push([array[idx], array[left], array[right]]);
          left++;
          right--;
        } else if (currentSum < targetSum) {
          left++;
        } else if (currentSum > targetSum) {
          right--;
        }
      }
    }
  
    return results;
  };
  
  const array = [12, 3, 1, 2, -6, 5, -8, 6];
  const targetSum = 0;
  
  const results = threeNumberSumCorrect(array, targetSum);
  console.log(results);
  
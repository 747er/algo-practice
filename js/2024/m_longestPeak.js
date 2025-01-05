const { expect } = require("chai");

const longestPeak = (array) => {
    let maxLength = 0;
    let i = 1;
  
    while (i < array.length - 1) {
      const isPeak = array[i] > array[i - 1] && array[i] > array[i + 1];
      
      if (!isPeak) {
        i++;
        continue;
      }
  
      let leftIdx = i - 2;
      while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
        leftIdx--;
      }
  
      let rightIdx = i + 2;
      while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
        rightIdx++;
      }
  
      const currentPeakLength = rightIdx - (leftIdx + 1);
      maxLength = Math.max(maxLength, currentPeakLength);
  
      // Jump `i` directly to rightIdx to skip processed elements
      i = rightIdx;
    }
  
    return maxLength;
  }

const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
const result = longestPeak(array);
console.log(result);

// expect(resultTwo).to.deep.equal(-1);

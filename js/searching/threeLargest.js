function findThreeLargestNumbers(array) {
  // Write your code here.
  let returnArray = [null, null, null];

  for (num of array) {
    if (num > returnArray[0] || returnArray[0] === null) {
      if (num > returnArray[1] || returnArray[1] === null) {
        if (num > returnArray[2] || returnArray[2] === null) {
          returnArray[0] = returnArray[1];
          returnArray[1] = returnArray[2];
          returnArray[2] = num;
          continue;
        }
        returnArray[0] = returnArray[1];
        returnArray[1] = num;
        continue;
      }
      returnArray[0] = num;
    }
  }
  return returnArray;
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;

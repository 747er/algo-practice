function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let indexOne = 0;
  let indexTwo = 0;

  let min = Infinity;
  let current = Infinity;
  let minPair = [];

  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    let firstNum = arrayOne[indexOne];
    let secondNum = arrayTwo[indexTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      indexOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      indexTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (min > current) {
      min = current;
      minPair = [firstNum, secondNum];
    }
  }
  return minPair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;

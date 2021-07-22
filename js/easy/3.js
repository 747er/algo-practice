// function sortedSquaredArray(array) {
//   // Write your code here.
//   const sortedSquares = new Array(array.length).fill(0);
//   let smallerValueIdx = 0;
//   let largerValueIdx = array.length - 1;

//   for (let idx = array.length - 1; idx >= 0; idx--) {
//     const smallerValue = array[smallerValueIdx];
//     const largerValue = array[largerValueIdx];

//     if (Math.abs(smallerValue) > Math.abs(largerValue)) {
//       sortedSquares[idx] = smallerValue * smallerValue;
//       smallerValueIdx++;
//     } else {
//       sortedSquares[idx] = largerValue * largerValue;
//       largerValueIdx--;
//     }
//   }

//   return sortedSquares;
// }

function sortedSquaredArray(array) {
  // Write your code here.
  const sortedSquares = new Array(array.length).fill(0);
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let idx = array.length - 1; idx >= 0; idx--) {
    let largerValue = array[largerValueIdx] * array[largerValueIdx];
    let smallerValue = array[smallerValueIdx] * array[smallerValueIdx];

    if (smallerValueIdx === largerValueIdx) {
      sortedSquares[idx] = largerValue;
    }
    if (largerValue > smallerValue) {
      sortedSquares[idx] = largerValue;
      largerValueIdx--;
    }
    if (largerValue < smallerValue) {
      sortedSquares[idx] = smallerValue;
      smallerValueIdx++;
    }
  }

  return sortedSquares;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;

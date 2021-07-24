function moveElementToEnd(array, toMove) {
  // Write your code here.
  let index = 0;
  let endIndex = array.length - 1;

  while (index < endIndex) {
    if (array[endIndex] === toMove) {
      endIndex--;
    } else {
      if (array[index] === toMove) {
        array[index] = array[endIndex];
        array[endIndex] = toMove;
        endIndex--;
      }
      index++;
    }
  }
  return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;

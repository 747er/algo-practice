function minNumberOfJumps(array) {
  // Write your code here.
  let jumps = 1;
  let position = 0;

  let findNextIndex = function (position) {
    let nextPosition = array[position] + position - 1;
    for (let j = position + 1; j <= nextPosition; j++) {
      if (array[j] > nextPosition) {
        nextPosition = j;
      }
    }
    return nextPosition + position;
  };

  while (position < array.length) {
    jumps++;
    position = findNextIndex(position);
  }

  return jumps;
}

// Do not edit the line below.
exports.minNumberOfJumps = minNumberOfJumps;

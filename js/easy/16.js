function binarySearch(array, target) {
  return BSTHelper(array, target, 0, array.length - 1);
}

function BSTHelper(array, target, left, right) {
  if (left > right) return -1;
  const middle = Math.floor((left + right) / 2);
  const potentialMatch = array[middle];
  if (target === potentialMatch) {
    return middle;
  } else if (target < potentialMatch) {
    return BSTHelper(array, target, left, middle - 1);
  } else {
    return BSTHelper(array, target, middle + 1, right);
  }
}

// Do not edit the line below.
exports.binarySearch = binarySearch;

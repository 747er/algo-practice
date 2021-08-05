function isMonotonic(array) {
  // Write your code here.
  let isNonDecreasing = true;
  let isNonIncreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }

  return isNonDecreasing || isNonIncreasing;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;

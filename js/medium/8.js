function firstDuplicateValue(array) {
  // Write your code here.
  let checked = {};
  let result = -1;
  let index = 0;

  while (index < array.length) {
    if (checked[array[index]]) {
      return array[index];
    } else {
      checked[array[index]] = true;
      index++;
    }
  }

  return -1;
}

// Do not edit the line below.
exports.firstDuplicateValue = firstDuplicateValue;

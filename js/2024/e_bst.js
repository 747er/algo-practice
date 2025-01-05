const { expect } = require("chai");

const binarySearchHelper = (array, target, left, right) => {
  if (left > right) return -1;
  const mid = Math.floor((left + right) / 2);

  if (target === array[mid]) return mid;
  if (target > array[mid])
    return binarySearchHelper(array, target, mid + 1, right);
  if (target < array[mid])
    return binarySearchHelper(array, target, left, mid - 1);
};

const binarySearch = (array, target) => {
  return binarySearchHelper(array, target, 0, array.length - 1);
};

const testOne = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
const targetOne = 33;
const resultOne = binarySearch(testOne, targetOne);
expect(resultOne).to.deep.equal(3);

const testTwo = [1, 5, 23, 111];
const targetTwo = 33;
const resultTwo = binarySearch(testTwo, targetTwo);
expect(resultTwo).to.deep.equal(-1);

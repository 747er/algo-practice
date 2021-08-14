// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./1");
const chai = require("chai");

const isMinHeapPropertySatisfied = (array) => {
  for (let currentIdx = 1; currentIdx < array.length; currentIdx++) {
    const parentIdx = Math.floor((currentIdx - 1) / 2);
    if (array[parentIdx] > array[currentIdx]) return false;
  }
  return true;
};

it("Test Case #1", function () {
  const minHeap = new program.MinHeap([
    48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41,
  ]);
  minHeap.insert(76);
  chai.expect(isMinHeapPropertySatisfied(minHeap.heap)).to.deep.equal(true);
  chai.expect(minHeap.peek()).to.deep.equal(-5);
  chai.expect(minHeap.remove()).to.deep.equal(-5);
  chai.expect(isMinHeapPropertySatisfied(minHeap.heap)).to.deep.equal(true);
  chai.expect(minHeap.peek()).to.deep.equal(2);
  chai.expect(minHeap.remove()).to.deep.equal(2);
  chai.expect(isMinHeapPropertySatisfied(minHeap.heap)).to.deep.equal(true);
  chai.expect(minHeap.peek()).to.deep.equal(6);
  minHeap.insert(87);
  chai.expect(isMinHeapPropertySatisfied(minHeap.heap)).to.deep.equal(true);
});

// This file is initialized with a code version of this
// question's sample test case. Feel free to add, edit,
// or remove test cases in this file as you see fit!

const program = require("./13");
const chai = require("chai");

class LinkedList extends program.LinkedList {
  addMany(values) {
    let current = this;
    while (current.next !== null) {
      current = current.next;
    }
    for (const value of values) {
      current.next = new LinkedList(value);
      current = current.next;
    }
    return this;
  }

  getNodesInArray() {
    const nodes = [];
    let current = this;
    while (current !== null) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}

it("Easy 13, Test Case #1", function () {
  const input = new LinkedList(1).addMany([1, 3, 4, 4, 4, 5, 6, 6]);
  const expected = new LinkedList(1).addMany([3, 4, 5, 6]);
  const actual = program.removeDuplicatesFromLinkedList(input);
  chai
    .expect(actual.getNodesInArray())
    .to.deep.equal(expected.getNodesInArray());
});

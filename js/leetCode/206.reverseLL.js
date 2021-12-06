const { expect } = require("chai");

function TreeLinkNode(val) {
  this.val = val;
  this.left = this.right = this.next = null;
}

function reverse(head) {
  let current = head;
  let tempNext;

  let previous = null;

  while (current) {
    tempNext = current.next;
    current.next = previous;
    previous = current;
    current = tempNext;

    // W/ DESTRUCTURING
    // [current.next, previous, current] = [previous, current, current.next]
  }

  return previous;
}

// BASIC TEST 1
var t1n1 = new TreeLinkNode(1);
expect(reverse(t1n1)).to.deep.equal(t1n1);

var n1 = new TreeLinkNode(1);
var n2 = new TreeLinkNode(2);
var n3 = new TreeLinkNode(3);
n1.next = n2;
n2.next = n3;

let reverseResult = reverse(n1);
expect(reverseResult.next.val).to.equal(2);
expect(reverseResult).to.deep.equal(n3);

// var n3 = new TreeLinkNode(3);
// var n4 = new TreeLinkNode(4);
// var n5 = new TreeLinkNode(5);
// n2.next = n3;
// n3.next = n4;
// n4.next = n5;

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

const { expect } = require("chai");

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// * Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const addTwoNumbers = function (l1, l2) {
  const list = new ListNode(0);
  let head = list;
  let sum = 0;

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    head.next = new ListNode(sum % 10);
    head = head.next;
    sum = Math.floor(sum / 10);
  }

  return head;
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
const output = new ListNode(7, new ListNode(0, new ListNode(8)));

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

expect(addTwoNumbers(l1, l2)).to.deep.equal(output);

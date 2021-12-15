// 19. Remove Nth Node From End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

const { expect } = require("chai");

// NAIVE SOLUTION STORING ALL
// var removeNthFromEnd = function(head, n) {
//     const visited = {};

//     let current = head, length = 0;

//     while (current) {
//         visited[current.val] = current
//         current = current.next
//         length++
//     }

//     visited[length - n].next = visited[length - n + 2]
//     return visited

// };

var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) {
    return head.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
};

// console.log(head.val)
// console.log(head.next.val)
// console.log(head.next.next.val)
// console.log(head.next.next.next.val)

// console.log(visited)

function TreeLinkNode(val) {
  this.val = val;
  this.left = this.right = this.next = null;
}

var n1 = new TreeLinkNode(1);
var n2 = new TreeLinkNode(2);
var n3 = new TreeLinkNode(3);
var n4 = new TreeLinkNode(4);
var n5 = new TreeLinkNode(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]

const result = removeNthFromEnd(n1, 2);
console.log(result);

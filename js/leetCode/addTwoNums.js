/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//   reverseList = function (list) {
//     let numberString = "";

//     for (let n = list.length - 1; n >= 0; n--) {
//       numberString = numberString + list[n];
//     }
//     return parseInt(numberString);
//   };
//   let sum = reverseList(l1) + reverseList(l2);

//   return sum
//     .toString(10)
//     .split("")
//     .map(function (t) {
//       return parseInt(t);
//     });
// };

var addTwoNumbers = function (l1, l2) {
  const reverseList = function (list) {
    let numberString = "";

    for (let n = list.length - 1; n >= 0; n--) {
      numberString = numberString + list[n];
    }
    return parseInt(numberString);
  };
  let sum = reverseList(l1) + reverseList(l2);

  sum = sum
    .toString(10)
    .split("")
    .map(function (t) {
      return parseInt(t);
    });

  return sum;
};

console.log(addTwoNumbers([2, 4, 3], [4, 5, 6]));

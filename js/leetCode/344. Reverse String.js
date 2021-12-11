const { expect } = require("chai");

var reverseString = function (s) {
  let lIdx = 0;
  let rIdx = s.length - 1;

  while (lIdx < rIdx) {
    temp = s[lIdx];
    s[lIdx] = s[rIdx];
    s[rIdx] = temp;
    lIdx++;
    rIdx--;
  }
  return s;
};

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// const previous = string(string.length - 1);

// H a n n
// h a n n

// h H a n

//
//
//

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

const input = ["H", "a", "l", "l", "o", "w"];
const expected = ["w", "o", "l", "l", "a", "H"];
expect(reverseString(input)).to.deep.equal(expected);

const input2 = ["H"];
const expected2 = ["H"];
expect(reverseString(input2)).to.deep.equal(expected2);

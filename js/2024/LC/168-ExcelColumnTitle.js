/*
Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
 

Example 1:

Input: columnNumber = 1
Output: "A"
Example 2:

Input: columnNumber = 28
Output: "AB"
Example 3:

Input: columnNumber = 701
Output: "ZY"
*/

function convertToTitle(columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    columnNumber--; // Adjust because there's no "zero" in Excel columns
    const remainder = columnNumber % 26;
    const char = String.fromCharCode(65 + remainder);
    result = char + result;
    columnNumber = Math.floor(columnNumber / 26);
  }

  return result;
}

// Test examples:
console.log(convertToTitle(1)); // A
console.log(convertToTitle(28)); // AB
console.log(convertToTitle(701)); // ZY
console.log(convertToTitle(52)); // AZ

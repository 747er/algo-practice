/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//   let li = 0;
//   let ri = s.length - 1;

//   let map = {
//     "{": 0,
//     "}": 0,
//     "(": 0,
//     ")": 0,
//     "[": 0,
//     "]": 0,
//   };

//   while (li < ri) {
//     map[s[ri]] = map[s[ri]] + 1;
//     map[s[li]] = map[s[li]] + 1;
//     ri--;
//     li++;
//   }

//   if (map["["] !== map["]"]) {
//     return false;
//   }

//   if (map["{"] !== map["}"]) {
//     return false;
//   }

//   if (map["("] !== map[")"]) {
//     return false;
//   }

//   return true;
// };

var isValid = function (s) {
  if (s.length % 2 !== 0) return false; //if size is odd its not balanced

  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map[c]) {
      stack.push(map[c]);
    } else if (c !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
};

console.log(isValid("{[()]}"));
console.log(isValid("([)]"));

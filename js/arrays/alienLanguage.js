// wrong wrong wrong
// var isAlienSorted = function (words, order) {
//   let orderMap = {};

//   for (let i = 0; i < order.length; i++) {
//     orderMap[order[i]] = i;
//   }

//   for (let i = 0; i < words.length - 1; i++) {
//     console.log(words[i]);
//     let wordOne = words[i];
//     let wordTwo = words[i + 1];

//     for (let i = 0; i < Math.min(wordOne.length, wordTwo.length); i++) {
//       console.log("i", i);
//       if (orderMap[wordOne[i]] < orderMap[wordTwo[i]]) {
//         continue;
//       }
//       if (orderMap[wordOne[i]] > orderMap[wordTwo[i]]) {
//         console.log("wordOne[i]", wordOne[i]);
//         console.log("wordTwo[i]", wordTwo[i]);
//         console.log("FALSE");
//         return false;
//       }
//       if (i === Math.min(wordOne.length, wordTwo.length)) {
//         return wordOne.length <= wordTwo.length;
//       }
//     }
//   }

//   return true;
// };

let isAlienSorted = (words, order) => {
  let map = {};
  for (let idx = 0, len = order.length; idx < len; idx++) {
    map[order[idx]] = idx;
  }
  // loop over words and compare each word with next...
  for (let i = 0, len = words.length - 1; i < len; i++) {
    let word = words[i];
    let next = words[i + 1];
    let pointer = 0;
    // advance the pointer while characters are same...
    if (word === next) continue;
    while (word[pointer] === next[pointer]) pointer++;
    if (
      typeof next[pointer] === "undefined" || // check for empty character
      map[word[pointer]] > map[next[pointer]] // compare indexes
    ) {
      return false;
    } else {
      return true;
    }
  }
  return true;
};

// console.log(
//   isAlienSorted(
//     ["apple", "apples", "bananapudding", "banana"],
//     "abcdefghijklmnopqrstuvwxyz"
//   )
// );
// console.log(isAlienSorted(["hello", "hello"], "hlabcdefgijkmnopqrstuvwxyz"));

console.log(
  isAlienSorted(["apple", "apple", "app"], "abcdefghijklmnopqrstuvwxyz")
);

// console.log(isAlienSorted(["hello", "laetcode"], "hlabcdefgijkmnopqrstuvwxyz"));

// console.log(
//   isAlienSorted(
//     [
//       "fxasxpc",
//       "dfbdrifhp",
//       "nwzgs",
//       "cmwqriv",
//       "ebulyfyve",
//       "miracx",
//       "sxckdwzv",
//       "dtijzluhts",
//       "wwbmnge",
//       "qmjwymmyox",
//     ],
//     "zkgwaverfimqxbnctdplsjyohu"
//   )
// );

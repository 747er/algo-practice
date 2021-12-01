var shortestDistance = function (words, word1, word2) {
  let index1 = null;
  let index2 = null;
  let currMin = Number.MAX_SAFE_INTEGER;

  let fastCompare = (word1, word2) => {
    if (word1.length !== word2.length) return false;
    if (word1 === word2) return true;
  };

  words.forEach(function (word, index) {
    // we will store most recent occurence of word1 in index1 and word2 in index2
    if (fastCompare(word, word1)) {
      index1 = index;
    } else if (fastCompare(word, word2)) {
      index2 = index;
    }
    // and when we get both, we will keep updating our currMin
    // Think :)
    if (index1 !== null && index2 !== null) {
      currMin = Math.min(currMin, Math.abs(index2 - index1));
    }
  });
  // if currMin wasnt changed at all return -1 else the answer
  return currMin === Number.MAX_SAFE_INTEGER ? -1 : currMin;
};

console.log(
  shortestDistance(
    ["practice", "makes", "perfect", "coding", "makes"],
    "coding",
    "practice"
  )
);

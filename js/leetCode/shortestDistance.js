var shortestDistance = function (words, word1, word2) {
  let index1 = null;
  let index2 = null;
  let currMin = Number.MAX_SAFE_INTEGER;

  const fastCompare = function (word, comparison) {
    if (word.length !== comparison.length) return false;
    if (word === comparison) return true;
  };

  words.forEach((word, index) => {
    if (fastCompare(word, word1)) {
      index1 = index;
    }
    if (fastCompare(word, word2)) {
      index2 = index;
    }

    if (index1 !== null && index2 !== null) {
      currMin = Math.min(currMin, Math.abs(index2 - index1));
    }
  });

  return currMin === Number.MAX_SAFE_INTEGER ? -1 : currMin;
};

console.log(
  shortestDistance(
    ["practice", "makes", "perfect", "coding", "makes"],
    "coding",
    "practice"
  )
);

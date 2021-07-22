function nonConstructibleChange(coins) {
  let maxChange = 0;
  let sortedCoins = coins.sort((a, b) => a - b);
  // Write your code here.
  for (let i = 0; i < sortedCoins.length; i++) {
    if (sortedCoins[i] > maxChange + 1) {
      return maxChange + 1;
    } else {
      maxChange += sortedCoins[i];
    }
  }
  return maxChange + 1;
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;

const expect = require("chai").expect;

// DP
function minNumberOfCoinsForChange(n, denoms) {
  let numOfCoins = Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;

  for (denom of denoms) {
    console.log(denom);
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      console.log(amount);
      if (denom <= amount) {
        // numOfCoins[amount] = Math.min(denom, numOfCoins[amount - 1])

        console.log(denom);
        console.log(amount);
        console.log(numOfCoins[amount]);
        numOfCoins[amount] = Math.min(
          numOfCoins[amount],
          numOfCoins[amount - denom] + 1
        );
        console.log(numOfCoins[amount]);
      }
    }
  }

  console.log(numOfCoins);

  console.log(numOfCoins[n]);

  return numOfCoins[n] === Infinity ? -1 : numOfCoins[n];
}

// let result = minNumberOfCoinsForChange(6, [1,2,4])
// let result = minNumberOfCoinsForChange(7, [1,5,10])
let result = minNumberOfCoinsForChange(3, [1, 2]);
// console.log(result)
expect(result).to.equal(2);
// expect(minNumberOfCoinsForChange(7, [10])).to.equal(-1)
// expect(minNumberOfCoinsForChange(7, [1,5,10,23,55])).to.equal(3)
// expect(minNumberOfCoinsForChange(25, [1,5,10])).to.equal(3)
// expect(minNumberOfCoinsForChange(7, [2,4])).to.equal(-1)

expect(true).to.deep.equal(false);

// RECURION -- WRONG, MESSY, GROSS
function minNumberOfCoinsForChange(n, denoms, coinsUsed = null) {
  denoms.sort((a, b) => a - b);
  if (n === 0 && coinsUsed === null) return 0;
  if (!denoms.length) {
    if (coinsUsed !== null && n === 0) {
      return coinsUsed;
    } else {
      return -1;
    }
  }

  for (i = denoms.length - 1; i >= 0; i--) {
    if (denoms[i] > n) {
      denoms.pop();
      return minNumberOfCoinsForChange(n, denoms, coinsUsed);
    }

    let quotient = Math.floor(n / denoms[i]);
    coinsUsed += quotient;
    n -= quotient * denoms[i];
  }

  return coinsUsed;
}

// minNumberOfCoinsForChange(7, [1,5,10])
// expect(minNumberOfCoinsForChange(7, [10])).to.equal(-1)
// expect(minNumberOfCoinsForChange(7, [1,5,10,23,55])).to.equal(3)
// expect(minNumberOfCoinsForChange(25, [1,5,10])).to.equal(3)
expect(minNumberOfCoinsForChange(7, [2, 4])).to.equal(-1);

expect(true).to.deep.equal(false);

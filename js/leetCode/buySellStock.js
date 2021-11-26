// BS STOCK
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Time Limit Exceeded
// var maxProfit = function(prices) {
//     let maxProfit = 0;

//     for (let [index, price] of prices.entries()) {
//         let next = prices[index + 1];
//         if (next !== 'undefined') {
//             for (let j = index; j < prices.length; j++) {
//                 if (prices[j] - prices[index] > maxProfit ) {
//                     maxProfit = prices[j] - prices[index]
//                 }
//             }
//         }
//     }

//     return maxProfit;
// };

// // Clever
var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER,
    max = 0;

  for (let i = 1; i < prices.length; i++) {
    max = Math.max(prices[i] - min, max);
    min = Math.min(prices[i], min);
  }

  return max;
};

console.log(maxProfit([15, 20, 5, 4, 1, 8]));

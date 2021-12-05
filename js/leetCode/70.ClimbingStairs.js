// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

const { expect } = require("chai");

// RECURSION W/ MEMOIZATION
let cache = {};
cache[1] = 1;
cache[2] = 2;

var climbStairs = function (n) {
  if (n in cache) return cache[n];

  cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
  return climbStairs(n - 1) + climbStairs(n - 2);
};

expect(true).to.equal(true);
expect(climbStairs).to.exist;

let oneStep = climbStairs(1);
expect(oneStep).to.equal(1);

let fortySteps = climbStairs(40);
expect(fortySteps).to.equal(165580141);

let sixhundred = climbStairs(600);
expect(sixhundred).to.equal(165580141);

// DP
var climbStairs = function (n) {
  let dp = new Array(n);
  (dp[1] = 1), (dp[2] = 2);
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// LESS SPACE THAN DP
var climbStairs = function (n) {
  let step2Before = 1;
  let step1Before = 1;
  for (let i = 2; i <= n; i++) {
    let tmp = step1Before;
    step1Before = step2Before + step1Before;
    step2Before = tmp;
  }
  return n > 0 ? step1Before : 0;
};

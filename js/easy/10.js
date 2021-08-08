function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let totalWaitingTime = 0;

  for (let i = 1; i < queries.length; i++) {
    totalWaitingTime += queries[i - 1] * (queries.length - i);
  }

  return totalWaitingTime;
}

// queries.sort((a, b) => a - b);

// let waitingTime = 0;
// let totalWaitingTime = 0;
// for (const duration of queries) {
//   totalWaitingTime += waitingTime;
//   waitingTime += duration;
// }

// return totalWaitingTime;

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;

function longestPeak(array) {
  let increasing = 0;
  let decreasing = 0;
  let direction = "";

  let highestPeak = 0;

  let reset = function () {
    increasing = 0;
    decreasing = 0;
  };

  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      if (direction === "decreasing") {
        reset();
      }
      direction = "increasing";
      increasing++;
    } else if (array[i] < array[i - 1]) {
      direction = "decreasing";
      decreasing++;
    } else {
      reset();
    }

    if (
      direction === "decreasing" &&
      increasing > 0 &&
      decreasing > 0 &&
      increasing + decreasing >= 2
    ) {
      if (increasing + decreasing + 1 > highestPeak) {
        highestPeak = increasing + decreasing + 1;
      }
    }
  }

  return highestPeak;
}

// Do not edit the line below.
exports.longestPeak = longestPeak;

function sunsetViews(buildings, direction) {
  // Write your code here.
  let goodViews = [];
  let isEast = true;
  if (direction === "West") {
    isEast = false;
  }

  let leftPointer = 0;
  let rightPointer = buildings.length - 1;
  let lMax = 0;
  let rMax = buildings[rightPointer];

  while (leftPointer < rightPointer) {
    if (isEast) {
      if ((leftPointer = 0 || buildings[leftPointer] > lMax)) {
        goodViews.push(leftPointer);
        lMax = buildings[leftPointer];
      }
    }
    leftPointer++;
  }

  return [];
}

// Do not edit the line below.
exports.sunsetViews = sunsetViews;

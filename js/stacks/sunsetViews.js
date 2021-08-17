function sunsetViews(buildings, direction) {
  // Write your code here.
  let goodViews = [];
  let isWest = false;
  if (direction === "WEST") {
    isWest = true;
  }

  let leftPointer = 0;
  let rightPointer = buildings.length - 1;
  let lMax = 0;
  let rMax = buildings[rightPointer];

  console.log("goodViews.length: ", goodViews.length);

  while (leftPointer <= rightPointer) {
    if (isWest) {
      if (leftPointer === 0 || buildings[leftPointer] > lMax) {
        goodViews.push(leftPointer);
        lMax = buildings[leftPointer];
      }
      leftPointer++;
    } else {
      if (
        rightPointer === buildings.length - 1 ||
        buildings[rightPointer] > rMax
      ) {
        goodViews.push(rightPointer);
        rMax = buildings[rightPointer];
      }
      rightPointer--;
    }
  }
  if (!isWest) goodViews.reverse();
  return goodViews;
}

// Do not edit the line below.
exports.sunsetViews = sunsetViews;

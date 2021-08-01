function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  let speed = 0;
  let blueIdx = 0;
  let redIdx = 0;

  if (fastest) {
    redShirtSpeeds.sort((a, b) => b - a);
    blueShirtSpeeds.sort((a, b) => b - a);

    while (blueIdx + redIdx < blueShirtSpeeds.length) {
      if (redShirtSpeeds[redIdx] > blueShirtSpeeds[blueIdx]) {
        speed += redShirtSpeeds[redIdx];
        redIdx++;
      } else {
        speed += blueShirtSpeeds[blueIdx];
        blueIdx++;
      }
    }
  } else {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);

    while (blueIdx + redIdx < blueShirtSpeeds.length * 2) {
      if (redShirtSpeeds[redIdx] > blueShirtSpeeds[blueIdx]) {
        speed += redShirtSpeeds[redIdx];
        redIdx++;
        blueIdx++;
      } else {
        speed += blueShirtSpeeds[blueIdx];
        redIdx++;
        blueIdx++;
      }
    }
  }
  return speed;
}

// Do not edit the line below.
exports.tandemBicycle = tandemBicycle;

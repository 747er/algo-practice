function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  let backRow = redShirtHeights[0] > blueShirtHeights[0] ? "red" : "blue";

  for (let idx = 0; idx < redShirtHeights.length; idx++) {
    let rsh = redShirtHeights[idx];
    let bsh = blueShirtHeights[idx];

    if (backRow === "red") {
      if (rsh <= bsh) return false;
    } else {
      if (bsh <= rsh) return false;
    }
  }

  return true;
}

// Do not edit the line below.
exports.classPhotos = classPhotos;

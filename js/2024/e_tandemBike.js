const tandemBikeUnoptimized = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
    let totalSpeed = 0;
  
    redShirtSpeeds.sort((a, b) => b - a);
    blueShirtSpeeds.sort((a, b) => a - b);
  
    let rIdx = 0;
    let bIdx = fastest ? 0 : redShirtSpeeds.length - 1;
  
    while (rIdx < redShirtSpeeds.length) {
      totalSpeed += Math.max(redShirtSpeeds[rIdx], blueShirtSpeeds[bIdx])
      rIdx++;
      bIdx = fastest ? bIdx + 1 : bIdx - 1;
    }
  
    return totalSpeed;
  };

//   Simplified in sort
const tandemBike = (redShirtSpeeds, blueShirtSpeeds, fastest) => {
    redShirtSpeeds.sort((a, b) => b - a);
    blueShirtSpeeds.sort((a, b) => fastest ? a - b : b -a);

    let result = 0;
    
    for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
        result += Math.max(redShirtSpeeds[idx], blueShirtSpeeds[idx]);
    }

    return result
}


// const redShirtSpeeds = [5, 5, 3, 9, 2];
// const blueShirtSpeeds = [3, 6, 7, 2, 1];
// const fastest = true;

const redShirtSpeeds = [5, 5, 3, 9, 2];
const blueShirtSpeeds = [3, 6, 7, 2, 1];
const fastest = false;

const result = tandemBike(redShirtSpeeds, blueShirtSpeeds, fastest);
console.log(result);

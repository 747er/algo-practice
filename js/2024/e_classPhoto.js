const { expect } = require("chai");

const classPhotos = (redShirtHeights, blueShirtHeights) => {
    redShirtHeights.sort((a, b) => a - b);
    blueShirtHeights.sort((a, b) => a - b);

    const isRedTaller = redShirtHeights[0] > blueShirtHeights[0]

    for (let index = 0; index < redShirtHeights.length; index++) {
        if(isRedTaller && redShirtHeights[index] <= blueShirtHeights[index]) return false
        if(!isRedTaller && redShirtHeights[index] >= blueShirtHeights[index]) return false
      }
      
      return true;
}

// Minimize Conditionals
// const classPhotos = (redShirtHeights, blueShirtHeights) => {
//   const tallerGroup = redShirtHeights[0] > blueShirtHeights[0] ? 'red' : 'blue';
//   const shorterGroup = redShirtHeights[0] > blueShirtHeights[0] ? 'blue' : 'red';

//   const heights = {
//       'red': redShirtHeights.sort((a, b) => a - b),
//       'blue': blueShirtHeights.sort((a, b) => a - b),
//   }
  


//   for (let index = 0; index < redShirtHeights.length; index++) {
//       if(heights[tallerGroup][index] < heights[shorterGroup][index]) return false
//     }
    
//     return true;
// }

const redShirtHeights = [5, 8, 1, 3, 2];
const blueShirtHeights = [6, 9, 2, 4, 5];

const canTakePhoto = classPhotos(redShirtHeights, blueShirtHeights)
console.log(canTakePhoto);
// expect(resultTwo).to.deep.equal(-1);

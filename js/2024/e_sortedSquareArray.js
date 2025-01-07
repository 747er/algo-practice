// sorted Squared Array - while
const sortedSquaredArray = (array) => {
    const outputArray = new Array(array.length).fill(0);
    let lIdx = 0;
    let rIdx = array.length - 1;
    let idx = rIdx;

    while (idx >= 0) {
        if (Math.abs(array[lIdx]) > Math.abs(array[rIdx])) {
            outputArray[idx] = array[lIdx] ** 2
            lIdx++
        } else {
            outputArray[idx] = array[rIdx] ** 2
            rIdx--
        }
        idx--
    }

    return outputArray;
}

// for w/ biggerVal assignment
const sortedSquaredArray2 = (array) => {
    const outputArray = new Array(array.length);
    let lIdx = 0;
    let rIdx = array.length - 1;
  
    for (let i = array.length - 1; i >= 0; i--) {
      const leftVal  = Math.abs(array[lIdx]);
      const rightVal = Math.abs(array[rIdx]);
      
      // Pick whichever value is bigger and increment/decrement the correct pointer in one line:
      const biggerVal = leftVal > rightVal
        ? array[lIdx++]
        : array[rIdx--];
      
      // Square that bigger value and store it:
      outputArray[i] = biggerVal * biggerVal;
    }
  
    return outputArray;
  };

  const sortedSquaredArrayThree = (areas) => {
    const output = new Array(areas.length);

    let lIdx = 0;
    let rIdx = areas.length - 1;

    for (let i = areas.length - 1; i >= 0; i--) {
        const leftSquare = areas[lIdx] * areas[lIdx]
        const rightSquare = areas[rIdx] * areas[rIdx]
        output[i] = Math.max(leftSquare, rightSquare);

        leftSquare > rightSquare ? lIdx++  : rIdx--;
    }
    return output;
}

// const array = [1,2,3,5,6,8,9];
const array = [-2, -1];
const result = sortedSquaredArray(array);
const result2 = sortedSquaredArray2(array);
console.log(result);
console.log(result2);


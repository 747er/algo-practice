// LEFT
// col ++
// rows[i]--

// DOWN
// row--
// cols[...i]--

// RIGHT
// col --
// rows[...i]--

// UP
// row++
// cols[i]--
// With direciton string


const spiralTraverseString = (array) => {
    let startRow = 0
    let startCol = 0
    let endRow = array.length - 1;
    let endCol = array[0].length - 1;

    const result = [];
    let direction = 'left'; // Initial direction

    while (startRow <= endRow && startCol <= endCol) {
        if (direction === 'left') {
            for (let col = startCol; col <= endCol; col++) {
                result.push(array[startRow][col]);
            }
            startRow++; 
            direction = 'down'; 
        } else if (direction === 'down') {
            for (let row = startRow; row <= endRow; row++) {
                result.push(array[row][endCol]);
            }
            endCol--; 
            direction = 'right'; 
        } else if (direction === 'right') {
            for (let col = endCol; col >= startCol; col--) {
                result.push(array[endRow][col]);
            }
            endRow--; 
            direction = 'up'; 
        } else if (direction === 'up') {
            for (let row = endRow; row >= startRow; row--) {
                result.push(array[row][startCol]);
            }
            startCol++; 
            direction = 'left'; 
        }
    }

    return result;
};

const spiralTraverse = (array) => {
    let startRow = 0, endRow = array.length - 1;
    let startCol = 0, endCol = array[0].length - 1;
    const result = [];

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            result.push(array[startRow][col]);
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            result.push(array[row][endCol]);
        }
        endCol--;

        if (startRow <= endRow) {
            for (let col = endCol; col >= startCol; col--) {
                result.push(array[endRow][col]);
            }
            endRow--;
        }

        if (startCol <= endCol) {
            for (let row = endRow; row >= startRow; row--) {
                result.push(array[row][startCol]);
            }
            startCol++;
        }
    }

    return result;
};

const array = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
];

console.log(spiralTraverse(array));
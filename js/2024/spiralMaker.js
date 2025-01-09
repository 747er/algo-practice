const spiralMaker = (num, cols, rows) => {
    let startCol = 0;
    let startRow = 0;
    let endCol = cols - 1;
    let endRow = rows - 1;
    
    // let result = new Array(rows).fill((new Array(rows).fill(null)));
    let result = new Array(rows).fill().map(() => new Array(cols).fill(null));
    let number = 1;

    while (startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            result[startRow][col] = number++;
        }
        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            result[row][endCol] = number++;
        }
        endCol--;

        if (startRow <= endRow) {
            for (let col = endCol; col >= startCol; col--) {
                result[endRow][col] = number++;
            }
            endRow--;
        }

        if (startCol <= endCol) {
            for (let row = endRow; row >= startRow; row--) {
                result[row][startCol] = number++;
            }
            startCol++;
        }
    }

    return result;
}

let newArray = spiralMaker(100, 10, 10);
console.log(newArray);
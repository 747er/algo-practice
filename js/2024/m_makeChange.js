const numberOfWaysToMakeChange = (n, denoms) => {
    console.log(n);
    console.log(denoms);

    const ways = [1, ...(new Array(n).fill(0))];
    
    for (const denom of denoms) {
        for (let change = denom; change <= n; change++) {
            ways[change] += ways[change - denom];
        }
    }

    console.log(ways);

    return ways.at(-1);
}

const n = 6;
const denoms = [1,5];

const result = numberOfWaysToMakeChange(n, denoms);
console.log(result);
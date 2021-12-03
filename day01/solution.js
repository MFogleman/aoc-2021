const fs = require('fs');
const { add, pipe, takeLast } = require('../utils');

const data =  fs.readFileSync('day01/input.txt', 'utf8')
    .toString()
    .split('\r\n')
    .map(Number);

const part1Solution = data.reduce(
    ([prev, count], current) => [current, prev < current? count+1 : count],
    [Math.max, 0]
);

// Part 2

const sumArr = arr => arr.reduce((a, b) => a+b);
const [a1, a2, a3, ...rest] = data

const part2Solution = rest.reduce(([H, count], current) => {
    const lastWindow = pipe(takeLast(3), sumArr)(H)
    const thisWindow = pipe(takeLast(2),  sumArr, add(current))(H)
    const newCount = thisWindow>lastWindow ? count+1 : count;
    H.push(current);

    return [H, newCount];
}, [[a1, a2, a3], 0])

console.log(part2Solution[1]) // 1346
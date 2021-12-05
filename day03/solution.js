const fs = require('fs');

const data =  fs.readFileSync('day03/input.txt', 'utf-8')
    .toString()
    .split('\r\n')

const gamma = data.reduce((state, str) => {
    str.split('').forEach((digit, idx) => {
        if (digit === '0') {
            state[idx]['0'] += 1
        } else {
            state[idx]['1'] += 1
        }
    })
    return state;
}, [

    {'0': 0, '1': 0},
    {'0': 0, '1': 0},
    {'0': 0, '1': 0},
    {'0': 0, '1': 0},
    {'0': 0, '1': 0},
    {'0': 0, '1': 0},
    {'0': 0, '1': 0},
    {'0': 0, '1': 0},
    {'0': 0, '1': 0},
    {'0': 0, '1': 0},
    {'0': 0, '1': 0},
    {'0': 0, '1': 0},
]).map(o => o['0'] > o['1'] ? '0' : '1').join('')

const eps = gamma.split('').map(c => c === '0' ? '1' : '0').join('')
const part1Solution = parseInt(eps, 2) * parseInt(gamma, 2);

console.log(part1Solution) // 3429254
const fs = require('fs');

const test = [
'forward 5',
'down 5',
'forward 8',
'up 3',
'down 8',
'forward 2',
];

const RULES_PT1 = {
    'forward': ({hPos, depth}, num) => ({ depth, hPos: hPos + num}),
    'up': ({hPos, depth}, num) => ({ hPos, depth: depth - num}),
    'down': ({hPos, depth}, num) => ({ hPos, depth: depth + num}),
}
const calcNewHorizontalPositionAndDepth = (state, str) => {
    const [dir, num] = str.split(' ');
    return RULES_PT1[dir](state, Number(num))
};

const data = fs.readFileSync('day02/input.txt', 'utf8')
    .toString()
    .split('\r\n');


const pt1 = data.reduce(calcNewHorizontalPositionAndDepth, { hPos: 0, depth: 0})
// console.log(pt1.depth*pt1.hPos); // 1746616

/*
type State = {
    aim: number
    hPos: number
    depth: number
}
*/

const RULES_PT2 = {
    'up': ({aim, ...rest }, num) => ({ aim: aim - num, ...rest }),
    'down': ({aim, ...rest }, num) => ({ aim: aim + num, ...rest }),
    'forward': ({ hPos, depth, aim }, num) => ({ 
        depth: depth + (aim * num), 
        hPos: hPos + num,
        aim,
    }),
}
const calcState = (state, str) => {
    const [dir, num] = str.split(' ');
    return RULES_PT2[dir](state, Number(num))
};

const { depth, hPos }= data.reduce(calcState, { hPos: 0, depth: 0, aim: 0})
console.log(depth*hPos); // 1741971043

const RULES = {
    'forward': ({hPos, depth}, num) => ({ depth, hPos: hPos + num}),
    'up': ({hPos, depth}, num) => ({ hPos, depth: depth - num}),
    'down': ({hPos, depth}, num) => ({ hPos, depth: depth + num}),
}


const add = a => b => a + b;

const takeLast = n => arr => arr.slice(-n)
const pipe = (...fns) => data => fns.reduce((x, f) => f(x), data);

module.exports = { add, pipe, takeLast }
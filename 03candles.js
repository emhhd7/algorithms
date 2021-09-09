let candles = [4, 4, 1, 3]

let max = Math.max(...candles)
let highest = candles.filter(number => number === max)

console.log(highest)
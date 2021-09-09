let array = [1, 5, 3, 2, 4]

let minArray = array.sort().slice(0, 4)
let maxArray = array.sort().reverse().slice(0, 4)

let minValue = minArray.reduce((sum, element) => {
    return sum + element
}, 0)

let maxValue = maxArray.reduce((sum, element) => {
    return sum + element
}, 0)

console.log(minValue)
console.log(maxValue)
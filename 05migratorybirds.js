const birds = [1, 1, 2, 2, 3]

// birds.reduce((sum, bird) => {
//     return { ...sum, { bird: 0 }
// }
// }, {})

const birdsArray = [...new Set(birds)]

let tally = birdsArray.map(birdNumber => {
    let obj = {}
    obj[birdNumber] = 0
    return obj
})
.reduce((sum, birdObj) => {
    // let newObj = Object.assign(sum, birdObj)
    let newObj = {...sum, ...birdObj}
    return newObj;
}, {})


for(let i = 0; i < birds.length; i++){
    tally[birds[i]]++;
}



console.log(tally)

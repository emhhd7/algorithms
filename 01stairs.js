


function createHashes(stairIndex, heightOfStairs) {
    let stair = ''
    for (let i = 0; i < stairIndex; i++) {
        stair += '#'
    }
    const spaces = new Array(heightOfStairs - stairIndex).fill(' ').join('');
    return spaces + stair;
}

function createStairs(heightOfStairs) {
    let staircase = ''
    for (let stairIndex = 0; stairIndex <= heightOfStairs; stairIndex++) {
        staircase += createHashes(stairIndex, heightOfStairs) + '\n';
    }
    return staircase;
}


console.log(createStairs(6))
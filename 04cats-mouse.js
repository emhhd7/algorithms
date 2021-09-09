
function catMouse() {
    let oriDistance = 6
    let sabiDistance = 6
    let mouseDistance = 6

    let oriCatch = Math.abs(oriDistance - mouseDistance)
    let sabiCatch = Math.abs(sabiDistance - mouseDistance)

    if (oriCatch < sabiCatch) {
        console.log("Ori caught the mouse!")
    } else if (sabiCatch < oriCatch) {
        console.log("Sabi caught the mouse!")
    } else {
        console.log("The mouse got away...")
    }
}

catMouse()
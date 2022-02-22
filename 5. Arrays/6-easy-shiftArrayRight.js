// Shift an array by X to right.
// Example [1,2,3,4,5] after shifting to right [5,1,2,3,4]

// Read this :
// https://github.com/Naman-Saxena1/Neogcamp-Basic_JS_Practice/blob/main/3.%20Number/11-numberCyclicLeftRotation.js

let inputArray = [1,2,3,4,5]

function rightShiftArray(originalArray, numberOfRightShifts)
{
    let arr1 = originalArray.slice(0,originalArray.length-numberOfRightShifts)
    let arr2 = originalArray.slice(originalArray.length-numberOfRightShifts)

    let finalArray = [...arr2,...arr1]
    console.log(`Final Array : ${finalArray}`)
}

rightShiftArray(inputArray, 2)
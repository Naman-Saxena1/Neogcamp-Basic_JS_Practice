// Given an array. 
// Write a function to join all elements of the array with a hyphen in between them.
// Your output should be: 
// Violet-Indigo-Blue-Green-Yellow-Orange-Red

const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

let mergedElement = arr.reduce((acc,currentValue)=>(acc+"-"+currentValue))
console.log(mergedElement)
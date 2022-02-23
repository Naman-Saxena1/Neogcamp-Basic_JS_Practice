// Given an array. 
// Convert it in to an object with key as the index of each element 
// and value as the element itself.
// Your output should be:
// {'0': "You", '1': "all", '2': "are", '3': "rockstars"}

const arr = ["You", "all", "are", "rockstars"];

let outputObject = arr.reduce((acc,currentValue,currentIndex)=>({...acc, [currentIndex]:currentValue}),{})

console.log(outputObject)
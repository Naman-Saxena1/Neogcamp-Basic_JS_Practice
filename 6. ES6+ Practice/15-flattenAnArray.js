// Flatten an array without using flat().

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];

let outputArray1 = input.reduce((acc,currentSubArray)=>([...acc,...currentSubArray]),[])
console.log(outputArray1)
// Count the occurrences of distinct elements in the given array.

const array1 = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];
let outputObject1 = {}

let array2 = array1.reduce((acc,currentSubArray)=>([...acc,...currentSubArray]),[])
let outputObject2 = array2.reduce((acc,currentLetter)=>{
    if(outputObject1[currentLetter]===undefined)
    {
        outputObject1[currentLetter] = 0;
    }
    outputObject1[currentLetter] += 1;

    return {...acc,[currentLetter]:outputObject1[currentLetter]}
},{})

console.log(outputObject2)
// Find Median and Mode of an array.
//     Median : (N+1/2)th term.
//     Mode : Most repeating term

let arrayOfNumbers = [10,4,5,2,5,6,9,11,45], median = 0, modeCount = 0, mode = 0;
let sortedArrayOfNumbers = [...arrayOfNumbers];
sortedArrayOfNumbers.sort((firstElement, secondElement)=>(
    firstElement-secondElement
));

// Even number of Elements (Eg. lengthOfArray = 6)
// 1 2 3 4 5 6
// 0 1 2 3 4 5  
// Median = Average of Middle 2 Elements
// Median = ( (2nd Index Value) + (3rd Index Value) ) / 2 
// 2nd Index = Math.trunc( (lengthOfArray-1)/2 )
// 3rd Index = lengthOfArray/2

// Odd number of Elements (Eg. lengthOfArray = 5)
// 1 2 3 4 5
// 0 1 2 3 4    
// Median = Middle Most Element
// Median = 2nd Index Value
// 2nd Index = (lengthOfArray-1)/2

console.log(`Sorted array for Median: ${sortedArrayOfNumbers}`)
let lengthOfArray = sortedArrayOfNumbers.length;

if(lengthOfArray%2==0)
{
    //Even number of elements
    median = (
        sortedArrayOfNumbers[Math.trunc((lengthOfArray-1)/2)] + 
        sortedArrayOfNumbers[lengthOfArray/2])/2
}
else
{
    //Odd number of Elements
    median = sortedArrayOfNumbers[(lengthOfArray-1)/2]
}

let objectToFindMode = {};
sortedArrayOfNumbers.forEach(element=>{
    if(objectToFindMode[element]===undefined)
    {
        objectToFindMode[element] = 0;
    }
    objectToFindMode[element] += 1;
})

// We can pass object to console.log like below example and it will work
// console.log("Object For Mode : ",objectToFindMode)

// We can't directly use object in template string format
// Because it will convert it into -> "Object For Mode : " + objectToFindMode.toString()
// And object.toString() by default return [object Object] 
// Hence output would be [object Object]
// Object for Mode : [object Object]
// Read more :
// https://stackoverflow.com/questions/27731303/why-object-prototype-tostring-return-object-object#:~:text=Every%20object%20has%20a%20toString,every%20object%20descended%20from%20Object.
// console.log(`Object For Mode : ${objectToFindMode}`) 

// Experimenting with it
// console.log( JSON.parse( (JSON.stringify(objectToFindMode)).toString() ) ) 

// Hence we have to use JSON.stringify
console.log(`Object For Mode : ${JSON.stringify(objectToFindMode)}`)
//{ '2': 1, '4': 1, '5': 2, '6': 1, '9': 1, '10': 1, '11': 1, '45': 1 }

for(let key in objectToFindMode)
{
    if(objectToFindMode[key]>modeCount)
    {
        mode = key;
        modeCount += 1;
    }
}

console.log(`Median : ${median}`)
console.log(`Mode   : ${mode}`)
// Write a function that accepts a number as input 
// and inserts hyphens between every two even numbers.

let num = 24345687;
let numInString = num.toString();
let finalString = "";

for(let index in numInString)
{
    if(Number(numInString[index-1])%2===0 && Number(numInString[index])%2===0 && index>0)
    {
        finalString += "-" + numInString[index]
    }
    else
    {
        finalString += numInString[index]
    }
}

console.log(`Final String : ${finalString}`)
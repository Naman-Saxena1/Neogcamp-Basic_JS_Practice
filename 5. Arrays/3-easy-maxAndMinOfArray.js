// Find maximum and minimum of an array.

let arrayOfNumbers = [10,4,5,2,5,6,9];
let min = arrayOfNumbers[0]; 
let max = arrayOfNumbers[0];
console.log(`Input array : ${arrayOfNumbers}`)
for(let element of arrayOfNumbers)
{
    if(element<min)
    {
        min = element
    }
    if(element>max)
    {
        max = element
    }
}

console.log(`Minimum : ${min}`)
console.log(`Maximum : ${max}`)
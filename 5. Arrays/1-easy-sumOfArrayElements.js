// Find sum of an array and display the output . Example [10,4,5,2,5,6,9].

let arrayOfNumbers = [10,4,5,2,5,6,9], sum = 0;
console.log(`Input array : ${arrayOfNumbers}`)
for(let element of arrayOfNumbers)
{
    sum += element
}
console.log(`Sum : ${sum}`)
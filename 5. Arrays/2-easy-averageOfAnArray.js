// Find average of an array and display the output.

let arrayOfNumbers = [10,4,5,2,5,6,9], sum = 0, average = 0;
console.log(`Input array : ${arrayOfNumbers}`)
for(let element of arrayOfNumbers)
{
    sum += element
}
average=sum/arrayOfNumbers.length
console.log(`Average : ${average}`)
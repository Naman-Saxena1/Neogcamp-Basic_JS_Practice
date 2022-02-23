// Given an array. Write a function to find the product of all elements which are even.
// const arr = [1, 2, 3, 7, 5, 6, 8, 9];
// Your output should be: 96

const arr = [1, 2, 3, 7, 5, 6, 8, 9];
let product = arr.reduce((acc,currentValue)=>{
    if(currentValue%2==0)
    {
        return acc*currentValue
    }
    else
    {
        return acc
    }
})

console.log(`Product : ${product}`)
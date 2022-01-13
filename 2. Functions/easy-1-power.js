// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

let input = require('readline-sync')

let num = input.question("Enter Number: ")
let power = input.question("Enter power: ")
let result = 1;

for(let i=0; i<power; i++)
{
    result *= num;
}
console.log(`${num}^${power}: ${result}`)

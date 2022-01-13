// Write a program to take an input from a user and find its Factorial. 
// Example: Factorial of 5 is 120

let input = require('readline-sync')

let num = input.question("Enter number: ")
let factorial = 1;

for(let i=1; i<=num ; i++)
{
    factorial *= i;
}
console.log(`Factorial of ${num}: ${factorial}`)

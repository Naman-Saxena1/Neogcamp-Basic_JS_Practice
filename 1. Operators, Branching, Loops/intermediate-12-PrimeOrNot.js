// Write a Program to take a number input from user 
// and find if the number is Prime or not.

let input = require('readline-sync')

let num = input.question("Enter Number: ")
let primeFlag = true;

for(let i=2; i<num; i++)
{
    if(num%i==0)
    {
        primeFlag = false
    }
}

console.log(primeFlag?"Prime":"Not Prime")

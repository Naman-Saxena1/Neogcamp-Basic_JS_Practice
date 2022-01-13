// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
var input = require('readline-Sync')

let numberOfTerms = input.question("Enter number of Fibonacci terms: ")
let previousTerm1=0, previousTerm2=1;


for(let i=0; i<numberOfTerms; i++)
{
    console.log(previousTerm1)
    let currentTerm = previousTerm1 + previousTerm2;
    previousTerm1 = previousTerm2;
    previousTerm2 = currentTerm;
}

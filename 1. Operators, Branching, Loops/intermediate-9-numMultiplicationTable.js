// Write a program to take a number input from user 
// and print multiplication table 12 times for that number.

var input = require('readline-sync')

let number = input.question('Enter number : ')

for(let i=1; i<=12; i++)
{
    console.log(`${number}*${i} = `,number*i)
}

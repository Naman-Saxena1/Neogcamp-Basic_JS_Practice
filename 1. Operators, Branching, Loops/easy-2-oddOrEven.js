// Write a program to take a number input from user 
// and determine whether the number is odd or even

var readlineSync = require('readline-sync')

var inputNumber = readlineSync.question("Enter input: ")

if(inputNumber%2==0)
{
    console.log("Even Number")
}
else
{
    console.log("Odd Number")
}
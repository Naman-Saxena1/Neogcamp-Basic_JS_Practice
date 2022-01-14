// Write a program to input 2 numbers and display the sum of the numbers to the console.
//     Input Number 1: 20
//     Input Number 2: 40
//     Sum : 60

let input = require('readline-sync')

let num1 = Number(input.question("Enter number 1: "))
let num2 = Number(input.question("Enter number 2: "))

console.log(num1+num2)
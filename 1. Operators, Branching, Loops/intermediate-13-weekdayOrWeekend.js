// Write a program to take a day as an input and determine whether it is a weekday or weekend. 
// Example: Tuesday is weekday.

let input = require('readline-sync')

console.log("Days - Mon, Tue, Wed, Thu, Fri, Sat, Sun")
let day = input.question("Enter day: ")

if(day==="Sat"||day==="Sun")
{
    console.log("Weekend")
}
else
{
    console.log("Weekday")
}

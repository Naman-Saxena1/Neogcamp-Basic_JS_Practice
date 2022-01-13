// Write program to take a month as an input from the user 
// and find out whether the month has 31 days or not.

var readlineSync = require('readline-sync')

console.log("1: JAN, 2: FEB, 3: MAR, 4: APR, 5: MAY, 6: JUN, 7: JUL, 8:AUG, 9: SEP, 10:OCT, 11:NOV, 12:DEC")
let month = readlineSync.question("Enter month in numeric digit format: ")

// Month in JavaScript is 0-indexed (January is 0, February is 1, etc), 
// but by using 0 as the day it will give us the last day of the prior
// month. So passing in 1 as the month number will return the last day
// of January, not February
function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}


console.log(daysInMonth(month,2008))
console.log(daysInMonth(month,2009)) 
console.log(daysInMonth(month,2022))
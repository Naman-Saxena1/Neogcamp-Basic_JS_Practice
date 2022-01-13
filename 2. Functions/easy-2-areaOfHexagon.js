// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

let input = require('readline-sync')

let side = input.question("Enter side of hexagon: ")

let area = ((3*Math.sqrt(3))/2)*Math.pow(side,2)

console.log(`Area of hexagon with side ${side}: ${area}`)

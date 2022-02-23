// Given an array of objects. Write a function to find the sum of ages of each person.
// Your output should be: 121 /*** 60+36+16+9 ***/

const arr = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
]

let sum = arr.reduce((acc,currentValue)=>{
    return acc+currentValue.age
},0)

console.log(`Sum of ages : ${sum}`)
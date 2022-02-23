// Given an array of objects. 
// If the name of an item is more than 5 characters in length, add type as ‘vegetable’. 
// If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’.

const arr = [
	{
		name: "Apple"
	},
	{
		name: "Mango"
	},
	{
		name: "Potato"
	},
	{
		name: "Guava"
	},
	{
		name: "Capsicum"
	}
]

let finalArray = arr.map(item=>{
    if(item.name.length>5)
    {
        return {
            name : item.name,
            type : "vegetable"
        }
    }
    else
    {
        return {
            name : item.name,
            type : "fruit"
        }
    }
})

console.log(finalArray)
// Write a function that takes in a string 
// and converts all the characters to uppercase. (Hint: toUpperCase())
// If your input is: "neoG"
// Your output should be: "NEOG"
// ASCII Values
// A-Z : 65-90
// a-z : 97-122

let inputString = "neoG", finalString = ""

for(let index in inputString)
{
    if(inputString[index].charCodeAt()>96 && inputString[index].charCodeAt()<123)
    {
        finalString += String.fromCharCode(inputString[index].charCodeAt()-32)
    }
    else
    {
        finalString += inputString[index]
    }
}

console.log(finalString)
// Write a function that takes in a string and converts only the vowels to uppercase 
// and all other characters to lowercase.

let inputString = "neoGCAMP", finalString = "";

for(let index in inputString)
{
    if(inputString[index]=="a"||inputString[index]=="e"||inputString[index]=="i"||
    inputString[index]=="o"||inputString[index]=="u")
    {
        // Case - a,e,i,o,u -> Change to UpperCase
        finalString += String.fromCharCode(inputString[index].charCodeAt()-32)
    }
    else
    {
        if(inputString[index]=="A"||inputString[index]=="E"||inputString[index]=="I"||
        inputString[index]=="O"||inputString[index]=="U")
        {
            //Case - A,E,I,O,U -> Remains same
            finalString += inputString[index]
        }
        else
        {
            if( (inputString[index].charCodeAt()>64) && (inputString[index].charCodeAt()<91))
            {
                //Case - UpperCase Consonants -> Change to Lowercase
                finalString += String.fromCharCode(inputString[index].charCodeAt()+32)
            }
            else
            {
                //Case - LowerCase Consonants -> Remains same
                finalString += inputString[index]
            }
        }
    }
}

console.log(finalString)
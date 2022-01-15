// Given a string "tic tac toe is a fun game" 
// convert the first 6 characters to capital case

function firstSixToCapital(string1)
{
    console.log(`Original String : ${string1}`)
    let count = 0, newString = ''
    for(let index in string1)
    {
        if(count<6&&string1[index]!==" ")
        {
            newString += String.fromCharCode(string1[index].charCodeAt()-32)
            count += 1;
        }
        else
        {
            newString += string1[index]
        }
    }
    console.log(`New String      : ${newString}`)
}

firstSixToCapital("tic tac toe is a fun game")
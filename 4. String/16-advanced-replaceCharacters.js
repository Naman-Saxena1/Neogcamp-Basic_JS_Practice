// Given an input string S and two characters c1 and c2, 
//     you need to replace every occurrence of character c1 with character c2 
//     in the given string

function replaceCharInString(string1, originalChar, replacementChar)
{
    console.log(`Original String : ${string1}`)
    let newString = '';
    for(let index in string1)
    {
        if(string1[index]===originalChar)
        {
            newString += replacementChar
        }
        else
        {
            newString += string1[index]
        }
    }
    console.log(`New String      : ${newString}`)
}

replaceCharInString("Saturn is a really cool planet!","a","o")
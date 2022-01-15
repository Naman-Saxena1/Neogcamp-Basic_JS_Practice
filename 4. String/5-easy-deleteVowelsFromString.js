// Write a program to delete all vowels from a string. 
//     Assume string is not more than 80 characters long

function deleteVowels(string1)
{
    console.log(`Old String : ${string1}`)
    let newString = ''
    for(let char of string1)
    {
        if(char!="a"&&char!="e"&&char!="i"&&char!="o"&&char!="u"&&char!="A"
            &&char!="E"&&char!="I"&&char!="O"&&char!="U")
        {
            newString += char
        }
    }
    console.log(`New String : ${newString}`)
}

deleteVowels("Night Black Sky!")
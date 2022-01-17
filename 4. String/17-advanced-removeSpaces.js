// Given an input string S that contains multiple words, 
//     you need to remove all the spaces present in the input string. 
//     There can be multiple spaces present after any word

function removeSpacesFunction(string1)
{
    console.log(`Original String : ${string1}`)
    let newString = '';
    for(let index in string1)
    {
        if(string1[index]!==' ')
        {
            newString += string1[index]
        }
    }
    console.log(`New String      : ${newString}`)
}

removeSpacesFunction("I am practicing DSA!")
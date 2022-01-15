// Write a program that removes the time from the given date string "Wed April 15, 7pm". 
//     It should return only the date without the time.

function removeTimeFromString(string1)
{
    let newString = ''

    for(let i=0; string1[i]!==','; i++)
    {
        newString += string1[i]
    }
    console.log(`New string: ${newString}`)
}

removeTimeFromString("Wed April 15, 7pm")
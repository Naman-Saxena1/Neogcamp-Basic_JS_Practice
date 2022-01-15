// Write a program that masks all but last four characters of the string "5565534276455423" to '#'

function maskString(string1)
{
    console.log(`Input String  : ${string1}`)
    let maskedString = ''
    for(let i=0; i<string1.length; i++)
    {
        if(i<string1.length-4)
        {
            maskedString += "#"
        }
        else
        {
            maskedString += string1[i]
        }
    }
    console.log(`Masked String : ${maskedString}`)
}

maskString("5565534276455423")
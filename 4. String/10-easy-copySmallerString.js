// Write a program that takes two strings and copies smaller string into bigger string

function copySmallerString(string1, string2)
{
    let string3 = '';
    if(string1.length<string2.length)
    {
        for(let index in string1)
        {
            string3 += string1[index]
        }
        for(let i = string1.length; i<string2.length; i++)
        {
            string3 += string2[i]
        }
    }
    else
    {
        for(let index in string2)
        {
            string3 += string2[index]
        }
        for(let i = string2.length; i<string1.length; i++)
        {
            string3 += string1[i]
        }
    }
    console.log(`New String : ${string3}`)
}

copySmallerString("Bitcoin","Ethereum")
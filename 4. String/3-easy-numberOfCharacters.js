// Program that reads string and count number of characters present in the string

function numberOfCharacters(string1)
{
    let count = 0;
    for(let ch of string1)
    {
        count+=1
    }

    console.log(count)
}

numberOfCharacters("Hello World!")
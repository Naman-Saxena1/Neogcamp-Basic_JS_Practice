// A program that counts the value of each character 
//     and prints the most repeated character

function mostRepeatedChar(string1)
{
    console.log(`Input : ${string1}`)
    let max = -1; resultChar = '';

    let countArray = [];

    //A-Z   :   65-90
    //a-z   :   97-122
    for(let i=65; i<123; i++)
    {
        countArray[i] = 0;
    }

    for(let index in string1)
    {
        countArray[string1[index].charCodeAt(0)] += 1
        if(string1[index]!==" "&&max<countArray[string1[index].charCodeAt(0)])
        {
            max = countArray[string1[index].charCodeAt(0)]
            resultChar += string1[index]
        }
    }
    console.log(`Most frequent character : ${resultChar[resultChar.length-1]}`)
}

mostRepeatedChar("Spiderman No Way Home!")
// Write a JavaScript program to compute the sum of all digits that occur in a given string.
//     Input: 1234
//     Output: 1+2+3+4 = 10

function sumOfStringDigits(string1)
{
    let sum = 0
    for(let i=0; i<string1; i++)
    {
        sum += Number(string1.charAt(i))
    }

    console.log(`Output : ${sum}`)
}

sumOfStringDigits("1234")
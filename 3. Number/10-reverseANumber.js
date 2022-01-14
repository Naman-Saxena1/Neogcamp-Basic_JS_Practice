// Write a JavaScript program that reverses a number.
//         Example:
//         Input:  32243;
//         Output:  34223

function reverseNumber(num1)
{
    console.log(`Input : ${num1}`)
    let reversedNumber = 0;
    while(num1>=1)
    {
        reversedNumber =  reversedNumber * 10 + Number(((num1%10)).toFixed(0))
        num1 /= 10;
    }
    console.log(`Output : ${reversedNumber}`)
}

reverseNumber(32243)
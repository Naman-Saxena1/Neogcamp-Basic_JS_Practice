// Write a Program to convert Decimal to Binary.
//         Enter the number to convert: 5
//         Binary of Given Number is = 101

function decimalToBinary(num1)
{
    console.log(`In decimal : ${num1}`)
    let numInBinary = 0, i = 1;
    while(num1!=0)
    {
        if(num1%2===0)
        {
            numInBinary = numInBinary + 0 * i
        }
        else
        {
            numInBinary = numInBinary + 1 * i
        }
        num1 = Math.trunc(num1/2)
        i *= 10;
    }
    console.log(`In Binary : ${numInBinary}`)
}

decimalToBinary(27)
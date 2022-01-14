// Write a Program to Convert Octal to Decimal.
//         Enter an octal number: 116
//         Octal of Given Number = 78 in decimal

function octalToDecimal(octalNum)
{
    console.log()
    let numInOctal = 0, i=0;
    while(octalNum!=0)
    {      
        numInOctal += (octalNum%10) * (8**i)  
        octalNum = Math.trunc(octalNum/10)
        i += 1;
    }
    console.log(numInOctal)
}

octalToDecimal(116)
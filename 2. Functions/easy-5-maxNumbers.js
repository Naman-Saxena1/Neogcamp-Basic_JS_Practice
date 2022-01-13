// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

function MaxOfAll (...restArr)
{
    max = restArr[0]
    for(item of restArr)
    {
        if(item>max)
        {
            max = item 
        }
    }
    console.log(`Maximum Number: ${max}`)
}

MaxOfAll(-3,4,5,6,33,765,32525)

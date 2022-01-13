// Given n numbers, your function should return the minimum of them all. 
//    The number of parameters won't be accepted from user.
//     Example:
//     Input: findMin(3,5) ––> Output: 3
//     Input: findMin(3,5,9,1) ––> Output: 1
//     (Hint: Lookup rest parameters in JavaScript)

function MinOfAll (...restArr)
{
    min = restArr[0]
    for(item of restArr)
    {
        if(item<min)
        {
            min = item 
        }
    }
    console.log(`Minimum Number: ${min}`)
}

MinOfAll(-3,4,5,6,33,765,32525)

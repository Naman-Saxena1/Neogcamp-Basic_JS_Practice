// Given an array and two numbers, 
//    your function should replace all entries of first number in an array with the second number.
//     Example:
//     Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

function replace(arr1, currentNum, replacementNum)
{
    for(let index in arr1)
    {
        if(arr1[index]===currentNum)
        {
            arr1[index] = replacementNum
        }
    }
    console.log(arr1)
}

replace([1,5,3,5,6,8], 5, 10)
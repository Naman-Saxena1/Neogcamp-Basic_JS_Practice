// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

function mergeArray(array1, array2)
{
    let mergedArray = [...array1, ...array2]
    console.log(mergedArray)
}
mergeArray([1,3,5], [2,4,6])
// Given an array of numbers, 
// your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

//Implemented Bubble Sort
function sortArray(unorderArray)
{
    let swapNum, swappedflag;

    for(let i=0; i<unorderArray.length-1; i++)
    {
        swappedflag = false;
        for(let j=0; j<unorderArray.length-1-i; j++)
        {
            if(unorderArray[j]>unorderArray[j+1])
            {
                swapNum = unorderArray[j]
                unorderArray[j] = unorderArray[j+1]
                unorderArray[j+1] = swapNum
                swappedflag = true
            }
        }

        if(swappedflag===false)
        {
            break;
        }
    }
    console.log(unorderArray)
}

sortArray([100,83,32,9,45,61])
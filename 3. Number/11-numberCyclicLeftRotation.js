// Write a Program to cyclically Rotate a Number by X positions 
//     in the left direction, as provided by the user.
//         Example-
//         Enter a Number : 123456789
//         Enter the Number of Rotations : 3
//         Output : 456789123

function cyclicLeftRotate(num1, noOfRotations)
{
    let arr = Array.from(String(num1), num=>(Number(num)))
    console.log(`Input :`,arr)

    function reverse(unorderArray, low, high)
    {
        while(low<high)
        {
            [unorderArray[low], unorderArray[high]] = [unorderArray[high], unorderArray[low]]
            low += 1;
            high -= 1;
        }
    }

    let arr1 = arr.slice(0,noOfRotations)
    let arr2 = arr.slice(noOfRotations)

    reverse(arr1, 0, noOfRotations-1)
    reverse(arr2, 0, arr2.length-1)
    let finalArray = [...arr1,...arr2]
    reverse(finalArray, 0, finalArray.length-1)
    
    console.log(`Output : `,finalArray)
}

cyclicLeftRotate(1234567, 3)
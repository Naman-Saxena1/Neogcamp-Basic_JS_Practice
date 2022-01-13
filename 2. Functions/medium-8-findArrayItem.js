// Given an array and an item, 
//    your function should return the index at which the item is present.
//     Example:
//     Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2  

function indexOf(arr1, item)
{
    let itemIndex = -1;
    for(let index in arr1)
    {
        if(arr1[index]===item)
        {
            itemIndex = index;
            break;
        }
        console.log(index)
    }
    if(itemIndex===-1)
    {
        console.log(`Item not found!`)
    }
    else
    {
        console.log(`Item found on index ${itemIndex}`)
    }
}

indexOf([1,2,3,5,3,9], 3)
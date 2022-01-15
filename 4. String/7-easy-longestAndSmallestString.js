// A program that reads three strings and prints the longest and smallest one

function longestAndSmallestString(...args)
{
    let smallestString = '', longestString = '', minLength = 0, maxLength = 0;
    let minIndex, maxIndex;

    minLength = arguments[0].length
    minIndex = 0

    maxLength = arguments[0].length
    maxIndex = 0

    for(let index in arguments)
    {
        if(arguments[index].length<minLength)
        {
            minIndex = index
        }
        if(arguments[index].length>maxLength)
        {
            maxIndex = index
        }
    }

    console.log(`Smallest String : ${arguments[minIndex]}`)
    console.log(`Longest String  : ${arguments[maxIndex]}`)
}

longestAndSmallestString("Hello","JavaScript","Node")
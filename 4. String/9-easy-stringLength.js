// Write a program which receives a string str 
//     that calculates the length of a string and 
//     return true if the length is greater than 7 without using strlen()

function stringLengthCheck(string1)
{
    let count = 0;

    for(let index in string1)
    {
        count += 1
    }

    console.log(count>7?true:false)
}

stringLengthCheck("Front-End Development")
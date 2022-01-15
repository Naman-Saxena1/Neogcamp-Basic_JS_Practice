// Given a string, 
// determine if it is a palindrome, considering only alphanumeric characters

function checkPalindrome(string1)
{
    let reversedString = ''

    for(let i=string1.length-1; i>=0; i--)
    {
        reversedString += string1[i]
    }
    console.log(`${string1===reversedString?"":"Not "}Palindrome`)
}

checkPalindrome("naman")
// Write a program that converts the string into uppercase

function stringtoUpperCase(string1)
{
    console.log(`In Uppercase : ${string1}`)

    let stringInUpperCase = '';

    for(let index in string1)
    {
        stringInUpperCase += String.fromCharCode(string1[index].charCodeAt()-32)
    }
    console.log(`In Lowercase : ${stringInUpperCase}`)
}

stringtoUpperCase("telescope")
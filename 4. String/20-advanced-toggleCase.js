// Write a program to toggle case of each character 
//     of the string "good afternoon" => "gOOD aFTERNOON" (example: "Neogcamp" ⇒ "nEOGCAMP" )

function toggleCase(string1)
{
    console.log(`Input String   : ${string1}`)
    let newString = '';
    for(let index in string1)
    {
        if(string1[index].charCodeAt()>64&&string1[index].charCodeAt()<91)
        {
            newString += String.fromCharCode(string1[index].charCodeAt()+32)
        }
        else
        {
            if(string1[index]===" ")
            {
                newString += string1[index]
            }
            else
            {
                newString += String.fromCharCode(string1[index].charCodeAt()-32)
            }
        }
    }
    console.log(`Toggled String : ${newString}`)
}

toggleCase("Good Afternoon")
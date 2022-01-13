// Given a sentence, 
//     your function should reverse the order of characters in each word, 
//     keeping same sequence of words.
//     Example:
//     Input: reverseCharactersOfWord('we are neoGrammers') 
//     –––> Output: ew era sremmarGoen

//Without in-built operation functions
function reverseCharactersOfWord(sentence)
{
    //Alternative of spilt()
    let wordsArray = [], words = '';
    for(let m=0; m<sentence.length; m++)
    {
        if(sentence[m]===' ')
        {
            wordsArray.push(words)
            words = ''
        }
        else
        {
            words += sentence[m]
            if(m==sentence.length-1)
            {
                wordsArray.push(words)
                words = ''
            }
        }
    }

    console.log(`Input: ${sentence}`)

    //Alternative of reverse()
    for(let i=0; i<wordsArray.length; i++)
    {
        let reversedCharacter = ''
        for(let j=wordsArray[i].length-1; j>=0; j--)
        {
            reversedCharacter += (wordsArray[i].charAt(j))          
        }
        wordsArray[i] = reversedCharacter + ' '
    }

    //Alternative of join()
    let reversedSentence = '';
    for(let k=0; k<wordsArray.length; k++)
    {
        reversedSentence += wordsArray[k]
    }
    console.log(`Output: ${reversedSentence}`)
}

//Using in-built functions
// function reverseCharactersOfWord(sentence)
// {
//     console.log(`Input: ${sentence}`)
//     let reversedSentence = sentence.split(' ')
//     .map(words=>{
//         return words.split('').reverse().join('')+' '
//     })
//     .join('')

//     console.log(`Output: ${reversedSentence}`)
// }
 

reverseCharactersOfWord('we are neoGrammers')
// Reverse the given string word wise. 
//     That is, the last word in given string should come at 1st place, 
//     last second word at 2nd place and so on. 
//     Individual words should remain as it is. 
//     example: Input : Welcome to NeoG Camp → Camp NeoG to Welcome

function reverseWords(sentenceString)
{
    console.log(`Original sentence : ${sentenceString}`)
    let newSentence = '', newWord = '';
    for(let i=0; i<sentenceString.length; i++)
    {
        if(sentenceString[i]!==" ")
        {
            newWord += sentenceString[i]
            
            if(i===sentenceString.length-1)
            {
                newSentence = `${newWord} ${newSentence}` 
            }
        }
        else
        {
            newSentence = `${newWord} ${newSentence}` 
            newWord = ''
        }
    }
    console.log(`Reversed sentence : ${newSentence}`)
}

reverseWords("Welcome to NeoG Camp")
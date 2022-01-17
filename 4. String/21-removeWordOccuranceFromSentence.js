// Given a string "how was your day?" and a word "how", 
//     write a program that removes the occurrence of the specified word 
//     from given sentence. 
//     ( input: string⇒"Programming camp is amazing",word⇒ "Programming"; 
//       output:" camp is amazing")

function removeWordOccurance(sentence, wordToRemove)
{
    console.log(`Input Sentence : ${sentence}`)
    let newSentence = '', word = ''

    for(let index in sentence)
    {
        if( (sentence[index]!==" ") && (index!=sentence.length-1) )
        {
            word += sentence[index]
        }
        else
        {
            //It is either space or last letter

            //If last index, make sure to add current letter to word
            //before further operations
            if(index==sentence.length-1)
            {
                word += sentence[index]
            }

            //Check if we want to add current word
            if(word!==wordToRemove)
            {
                newSentence += word + " "
                word = ''
            }
            else
            {
                word = ''
            }
        }
    }
    console.log(`New Sentence   : ${newSentence}`)
}

removeWordOccurance("Programming camp is amazing", "Programming")
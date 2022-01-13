// Given a sentence, return a sentence with first letter of all words as capital.
//     Example:
//     Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

function toSentenceCase(sentence)
{
    let sentenceArray ='';

    for(let index in sentence)
    {
        if((sentence[index-1]===" ")||(index==0))
        {
            sentenceArray += sentence[index].toUpperCase()
        }
        else
        {
            sentenceArray += sentence[index]
        }
    }

    console.log(sentenceArray)
}

toSentenceCase('we are neoGrammers')
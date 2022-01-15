// A program that counts number of vowels and consonants in a String

function countVowelConsonants(string1)
{
    let vowelCount = 0, consonantsCount = 0;
    for(let char of string1)
    {
        let charCode = char.charCodeAt()
        if(char=="a"||char=="e"||char=="i"||char=="o"||char=="u"||char=="A"
        ||char=="E"||char=="I"||char=="O"||char=="U")
        {
            vowelCount += 1;
        }
        else
        {
            if((charCode>=65&&charCode<92)||(charCode>=97&&charCode<123))
            {
                consonantsCount += 1;
            }
        }
    }
    console.log(`Number of vowels : ${vowelCount}`)
    console.log(`Number of consonants : ${consonantsCount}`)
}

countVowelConsonants("I am practicing JS")
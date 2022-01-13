// Write a function which generates a secret code from a given string, 
//     by shifting characters of alphabet by N places. Example:
//     Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
//     Explanation: 2 represents shifting alphabets by 2 places. 
//     a –> c, b –> d, c –> e and so on.

function encodeString(string1, noOfPlacesToShift)
{
    let shiftedString = '';

    for(let index in string1)
    {
        if(string1[index].charCodeAt()>=97&&string1[index].charCodeAt()<123)
        {
            //Small English letters - (a-z) - (97-123)

            if((string1[index].charCodeAt()+noOfPlacesToShift)>122)
            {
                shiftedString += String.fromCharCode(string1[index].charCodeAt() - 26 + noOfPlacesToShift)
            }
            else
            {
                shiftedString += String.fromCharCode(string1[index].charCodeAt()+ noOfPlacesToShift)
            }
        }
        else
        {
            if(string1[index].charCodeAt()>=65&&string1[index].charCodeAt()<91)
            {
                //Capital English letters - (A-Z) - (65-90)

                if((string1[index].charCodeAt()+noOfPlacesToShift)>90)
                {
                    shiftedString += String.fromCharCode(string1[index].charCodeAt() - 26 + noOfPlacesToShift)
                }
                else
                {
                    shiftedString += String.fromCharCode(string1[index].charCodeAt()+ noOfPlacesToShift)
                }
            }
        }
    }
    console.log(shiftedString)
}

encodeString("neogcampxyz", 2)
encodeString("NEOGCAMPXYZ", 2)

// console.log("A".charCodeAt())
// console.log("Z".charCodeAt())
// console.log(String.fromCharCode(91))
// console.log(String.fromCharCode(92))
// console.log(String.fromCharCode(93))
// console.log(String.fromCharCode(94))
// console.log(String.fromCharCode(95))
// console.log(String.fromCharCode(96))
// console.log("a".charCodeAt())
// console.log("z".charCodeAt())
// console.log(String.fromCharCode("z".charCodeAt() - 26 + 2))
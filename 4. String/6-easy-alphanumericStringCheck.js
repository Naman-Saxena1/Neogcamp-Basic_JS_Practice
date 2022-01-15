// Write a program to check whether the string is alphanumeric or not , 
// eg:batman@45 contains digit 45
//  0-9  :   48-57
//  A-Z  :   65-91
//  a-z  :   97-122

function checkAlphaNumeric(string1)
{
    let alphanumericFlag = true, charCode;
    for(let ch of string1)
    {
        charCode = ch.charCodeAt()
        if(!((charCode>=48&&charCode<58)||(charCode>=65&&charCode<92)
            ||(charCode>=97&&charCode<123)))
        {
            alphanumericFlag = false;
        }
    }
    console.log(alphanumericFlag?
        "Yes, it is alphanumeric": "No, it is not alphanumeric")
}

checkAlphaNumeric("batman45")
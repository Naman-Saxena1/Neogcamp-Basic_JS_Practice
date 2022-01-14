// Write a program to convert Fahrenheit to Celsius. 
//     For Fahrenheit to Celsius conversion use: 
//     C = (F - 32) * 5/9 
//     'F' and 'C' are the temperatures on the Fahrenheit scale & Celsius scale respectively.
//     Input: 56
//     Output: 13.33333

function tempConverter(tempInFahrenheit)
{
    let tempInCelsius = (tempInFahrenheit - 32) * 5/9
    console.log(tempInCelsius)
}

tempConverter(56)
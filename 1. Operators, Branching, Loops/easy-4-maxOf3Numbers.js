// Write a program to find the maximum out of three given numbers. 
// The numbers are num1=8, num2=23 and num3=17.

let num1=8, num2=23, num3=17;
if((num1>num2)&&(num1>num3))
{
    console.log(`Maximum of 3 numbers: ${num1}`)
}
else
{
    if((num2>num1)&&(num2>num3))
    {
        console.log(`Maximum of 3 numbers: ${num2}`)
    }
    else
    {
        console.log(`Maximum of 3 numbers: ${num3}`)
    }
}
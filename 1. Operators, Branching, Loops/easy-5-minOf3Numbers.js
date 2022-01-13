// Write a program to find the minimum out of three given numbers. 
// The numbers are num1=35, num2=29 and num3=46.

let num1=35, num2=29, num3=46;
if((num1<num2)&&(num1<num3))
{
    console.log(`Minimum of 3 numbers: ${num1}`)
}
else
{
    if((num2<num1)&&(num2<num3))
    {
        console.log(`Minimum of 3 numbers: ${num2}`)
    }
    else
    {
        console.log(`Minimum of 3 numbers: ${num3}`)
    }
}
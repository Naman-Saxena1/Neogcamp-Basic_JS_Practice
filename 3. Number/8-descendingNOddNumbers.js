// Write a Program to Print N Odd Number in Descending Order.
//     Input : 4
//     Output :    7
//                 5
//                 3
//                 1

function printNOddNumbers(count)
{
    console.log("Output : ")
    for(let i=(count*2)-1; i>0; i=i-2)
    {
        console.log(i)
    }
}

printNOddNumbers(4)
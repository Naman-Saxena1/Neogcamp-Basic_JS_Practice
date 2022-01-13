// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

let pattern = ''
for(let i=0; i<5; i++)
{
    for(let j=0; j<i+1; j++)
    {
        pattern += "* "
    }
    console.log(pattern)
    pattern = ''
}

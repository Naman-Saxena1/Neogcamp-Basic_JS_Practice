// Find the sum of two matrix.

let a = [[1, 2], [3, 4]];
let b = [[2, 3], [4, 5]];
let c = [[], []];

// Iterate array
for (let i = 0; i < a.length; i++) 
{
    // Iterate Sub-array
    for (let j = 0; j < a[i].length; j++) 
    {
        c[i][j] = a[i][j] + b[i][j];
    }
}

console.log(c)
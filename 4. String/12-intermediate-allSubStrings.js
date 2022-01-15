// For a given input string(str), 
//     write a function to print all the possible substrings.
//     Without using substr method

// Function to print all sub strings
function printAllSubstrings(str,n)
{
    // Works on the length of substring required
    // Runs the number of times as the longest substring
    for (let len = 1; len < n; len++) 
    {
        // Middle loop for i works for the starting point of substring
        for (let i = 0; i <= n - len; i++) 
        {
            
            let outputString = '';

            // Print characters from current
            // starting point to current ending
            // point.
            // Current ending point is calculated using
            // current starting point (i) and length of substring to print (len)
            // Current ending point i+len-1
            for (let k = i; k <= i + len - 1; k++) {
                outputString += str[k]
            }

            console.log(outputString);
        }
    }
}

printAllSubstrings("Codes", "Codes".length);

// Codes    -  Input
// 01234
// Output implementation
// C----    // len = 1, i = 0, k runs from 0 to 0
// -o---    // len = 1, i = 1, k runs from 1 to 1
// --d--    // len = 1, i = 2, k runs from 2 to 2
// ---e-    // len = 1, i = 3, k runs from 3 to 3
// ----s    // len = 1, i = 4, k runs from 4 to 4

// Co---    // len = 2, i = 0, k runs from 0 to 1
// -od--    // len = 2, i = 1, k runs from 1 to 2
// --de-    // len = 2, i = 2, k runs from 2 to 3
// ---es    // len = 2, i = 3, k runs from 3 to 4

// Cod--    // len = 3, i = 0, k runs from 0 to 2
// -ode-    // len = 3, i = 1, k runs from 1 to 3
// --des    // len = 3, i = 2, k runs from 2 to 4

// Code-    // len = 4, i = 0, k runs from 0 to 3
// -odes    // len = 4, i = 1, k runs from 1 to 4
// Display transpose of matrix.
// Input :  [
//              [1,2,3],
//              [4,5,6],
//              [7,8,9]
//          ]
// Output : [
//              [1,4,7],
//              [2,5,8],
//              [3,6,9]
//          ]


let inputMatrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

function transpose(matrix) {
    console.log("Input Matrix :", matrix)

    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < i; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
      console.log(matrix)
    }

    console.log("Matrix after transpose",matrix)
}

transpose(inputMatrix)
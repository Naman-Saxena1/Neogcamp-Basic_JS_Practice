// Find Identity matrix. 

function createIdentity(matrixSideLength)
{
    let identityMatrix = []

    for(let k = 0; k < matrixSideLength; k++)
    {
        if(!identityMatrix[k])
        {
           identityMatrix[k] = [];
        };
    }

    for(let i=0; i<matrixSideLength; i++)
    {
        for(let j=0; j<matrixSideLength; j++)
        {
            if(i===j)
            {
                identityMatrix[i][j] = 1;
            }
            else
            {
                identityMatrix[i][j] = 0;
            }
        }
    }
    console.log(identityMatrix)
}

createIdentity(3)
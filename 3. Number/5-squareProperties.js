// Calculate the area, perimeter of a square of side 'a'. 
//     Also, calculate the surface area and the volume of a cube of side 'a'.
//     Formula :
//     Area: a*a
//     Perimeter: 4*a
//     Surface Area: 6*a*a
//     Volume: a*a*a

function squreProperties(side)
{
    console.log(`Area : ${side*side}`)
    console.log(`Perimeter : ${4*side}`)
    console.log(`Surface Area : ${6*side*side}`)
    console.log(`Volume : ${side*side*side}`)
}

squreProperties(5)
// Given three angles of a triange.
//     Your function should return 
//     if it is a scalene, isosceles, equilateral triangle or not a triangle at all. 
//     Example:
//     Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

function typeOfTriangle(side1, side2, side3)
{
    
    if((side1+side2>side3)&&(side2+side3>side1)&&(side3+side1>side2))
    {
        if((side1===side2)&&(side2===side3))
        {
            console.log("Equilateral Triangle")
        }
        else
        {
            if((side1===side2)||(side2===side3)||(side3===side1))
            {
                console.log("Isosceles Triangle")
            }
            else
            {
                console.log("Scalene Triangle")
            }
        }
    }
    else
    {
        console.log("Not a Triangle")
    }
}

typeOfTriangle(3,3,5)
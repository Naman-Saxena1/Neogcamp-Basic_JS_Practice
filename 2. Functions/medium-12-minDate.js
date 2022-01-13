// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

function minDate(date1, date2)
{
    let dateArray1 = date1.split('/')
    let dateArray2 = date2.split('/')

    if(dateArray1[2]<dateArray2[2])
    {
        console.log(date1)
    }
    else
    {
        if(dateArray2[2]<dateArray1[2])
        {
            console.log(date2)
        }
        else
        {
            if(dateArray1[1]<dateArray2[1])
            {
                console.log(date1)
            }
            else
            {
                if(dateArray2[1]<dateArray1[1])
                {
                    console.log(date2)
                }
                else
                {
                    if(dateArray1[0]<dateArray2[0])
                    {
                        console.log(date1)
                    }
                    else
                    {
                        if(dateArray2[0]<dateArray1[0])
                        {
                            console.log(date2)
                        }
                        else
                        {
                            console.log("Same dates")
                        }
                    }
                }
            }
        }
    }
}

minDate('02/01/2021', '24/01/2021')
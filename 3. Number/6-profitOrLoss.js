// Given the Cost Price(CP) and Selling Price(SP) of a product. 
//     Write a Program to Calculate the Profit or Loss.
//     Input: CP = 1500, SP = 2000
//     Output: 500 Profit

//     Input: CP = 3125, SP = 1125
//     Output: 2000 Loss

function profitOrLoss(costPrice, sellingPrice)
{
    if(costPrice<sellingPrice)
    {
        console.log(`Profit : ${sellingPrice-costPrice}`)
    }
    else
    {
        if(costPrice>sellingPrice)
        {
            console.log(`Loss : ${costPrice-sellingPrice}`)
        }
        else
        {
            console.log(`Neither profit nor loss`)
        }
    }
}

profitOrLoss(1500, 2000)
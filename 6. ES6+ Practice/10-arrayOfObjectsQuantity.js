// Question:
// a. Get all the items in an array whose quantity is less than 2.
// b. Get the total quantity of items present in the inventory.
// c. Find the object which contains the item whose quantity is zero.

const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}    
  ];

let arrItemsLessThan2 = inventory.filter(item=>(item.quantity<2))
console.log(arrItemsLessThan2)

let totalQuantity = inventory.reduce((acc,currentItem)=>(acc+currentItem.quantity),0)
console.log(`Total Quantity : ${totalQuantity}`)

let itemWithZeroQuantity = inventory.find(item=>(item.quantity===0))
console.log(itemWithZeroQuantity)

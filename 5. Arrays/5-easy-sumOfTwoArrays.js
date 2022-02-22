// Find sum of two arrays.
//     [3,5,2,9,4] = 3+5+2+9+4 = 23
//     [6,2,8,1,3] = 6+2+8+1+3 = 20
//     Final Output : 20+23 = 43

let arr1 = [3,5,2,9,4], arr2 = [6,2,8,1,3];

let sum = [...arr1,...arr2].reduce((acc,currentValue)=>(acc+currentValue))

console.log(`Sum : ${sum}`)
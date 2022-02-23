// Get the names in an array for only those who have a cycle.

const family = [
    {
      name    : 'Tanay',
      haveCycle : true
    },
    {
      name     : 'Akanksha',
      haveCycle : false
    },
    {
      name     : 'Tanvi',
      haveCycle : true
    },
      {
      name     : 'Kanak',
      haveCycle : false
    }
  ]; 

let resultArray = family.filter(objectElement=>(objectElement.haveCycle))
.map(peopleWithCycleObj=>peopleWithCycleObj.name)

console.log(resultArray)
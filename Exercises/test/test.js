arr=[1,2,3,4,5]


const squre = () => {
  const result =[]
  arr.forEach(element => {
   result.push( element*2 )
    
  });
  return result
}

console.log(squre())
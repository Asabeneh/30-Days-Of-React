let arr1 = []
  let arr2 = [10,20,30,40,50,60,70]
  console.log(arr2.length)
  console.log(arr2[0])
  console.log(arr2[Math.floor((arr2.length-1)/2)])
  console.log(arr2[arr2.length-1])

  let mixedDataTypes = [1,"Ashim",['Apple','Mango','Jackfruit'],true,3.14,333]
  console.log(mixedDataTypes.length)

  let itCompanies = ["Facebook", "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle", "Amazon", "Jio"]
  console.log(itCompanies)
  console.log("there are " + itCompanies.length + " IT Companies")
  console.log("The first company is "+ itCompanies[0])
  console.log("The last company is "+ itCompanies[itCompanies.length-1])
  console.log("The middle company is "+ itCompanies[Math.floor((itCompanies.length-1)/2)])
  console.log("All the IT companies are :"+ itCompanies.join(", "))
  console.log(itCompanies[0].toUpperCase())
  console.log(itCompanies[1].toUpperCase())
  console.log(itCompanies[2].toUpperCase())
  console.log(itCompanies[3].toUpperCase())
  console.log(itCompanies[4].toUpperCase())
  console.log(itCompanies[5].toUpperCase())
console.log(itCompanies.toString())

let index = itCompanies.includes("Apples")

if(index){
    console.log("The Item exists in the array")
}else{
    console.log("The Item does not exist")
}
let  reqComp = [];
for(let i = 0 ; i < itCompanies.length ; i++){
    if(itCompanies[i].includes('o')){
       let company =  itCompanies[i].toLowerCase().split('')
       //console.log(company)
       let count = 0;
       for(let j = 0 ; j < company.length ; j++){
        if(company[j] == 'o'){
         count += 1;
        }
       }
       if(count > 1){
        reqComp.push(itCompanies[i])
      }
    }
}
console.log(reqComp)

console.log(itCompanies.sort())
console.log(itCompanies.reverse())

onsole.log(itCompanies.slice(0,3))
//console.log(itCompanies.splice(4,))
let length = itCompanies.length
let lower = Math.floor((length-1)/2)
let upper = Math.ceil((length-1)/2)
console.log(lower)
console.log(upper)
console.log(itCompanies.slice(lower , upper+1))

itCompanies.splice(0,1)
console.log(itCompanies)

let floorMid = Math.floor((length-1)/2)
let ceilMid = Math.ceil((length-1)/2)
if(length%2 == 0){
    itCompanies.splice(floorMid,2)
}else{
    itCompanies.splice(floorMid,1)
}
console.log(itCompanies)

itCompanies.splice(itCompanies.length-1,1)
console.log(itCompanies)

itCompanies.splice(0)
console.log(itCompanies)
const arr = []
const arr5 = [1,2,3,4,5,6,7]


let mixedDataTypes = [1, 2, 3, "Man", [5,6], ['Man', 'Woman']] 
console.log("Length of mixedDataType: " + mixedDataTypes.length)

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

/*console.log("ITCompanies: " + itCompanies)
console.log("There are " + itCompanies.length + " companies")
console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[itCompanies.length-1])
*/

for(let i=0; i<itCompanies.length; i++){
    console.log(" ")
    console.log(itCompanies[i])
}

for(let i=0; i<itCompanies.length; i++){
    itCompanies[i] = itCompanies[i].toUpperCase()
}

let newitCompanies = itCompanies.pop() 
newitCompanies.push() 

console.log(newitCompanies)

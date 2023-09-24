// declare empty array
let arr = new Array();
let arr1 = new Array(6)

// find length of array
console.log(arr1.length)

// get the first, middle and last item of the array
arr1 = [1,2,3,4,5,6]
let first = arr1[0];
let last = arr1[arr1.length-1] 
let middle = arr1[arr1.length/2-1]

console.log(`first: ${first} \nmiddle: ${middle} \nlast: ${last}`)

// 
itCompanies = ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies)

// print each company
for(const company of itCompanies){
    console.log(company)
}

console.log("\n")

itCompanies.forEach(element => {
    console.log(element)
});

// change the company name to uppercase and print one by one
itCompanies.forEach(element => {
    element = element.toUpperCase()
    console.log(element)
});

let company1 = 'Amazon'
let company2 = 'PayPal'

if(itCompanies.includes(company2)){
    console.log("The IT company is " + company1)
}
else{
    console.log("It is not an IT company")
}

// Filter out companies which have more than one 'o' without the filter method

// sort the array using sort method - the sorting is based on alphabetical order
console.log(itCompanies.sort())

// slicing the first three companies from the array
console.log(itCompanies.splice(0,3))

// slicing the last three companies from the array
console.log(itCompanies.splice(arr.length-3))

// -----------------------------------------------------------------------------
// EXERCISE: LEVEL 2


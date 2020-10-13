// Declare an empty array;
const myarr1 = []
// Declare an array with more than 5 number of elements
const myarr2 = [1, 2, 3, 4, 5]
// Find the length of your array
console.log(myarr2.length)

// Get the first item, the middle item and the last item of the array
let myarr2_length = myarr2.length
let myarr2_middle = 0
if (myarr2_length%2 === 0) {
  myarr2_middle = myarr2_length/2
  console.log("myarr2_middle: ", myarr2_middle)
} else {
  myarr2_middle = (myarr2_length - 1)/2
  console.log("myarr2_middle: ", myarr2_middle)
}
console.log("first item:\t", myarr2[0], " / middle item:\t", myarr2[myarr2_middle], " / last item:\t", myarr2[myarr2_length - 1])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  1234,
  "myName",
  {class: 'math', numberOfStudents: 32 },
  {classes: ['math', 'science', 'literature']},
  true,
  "1234",
  ['a', 'b', 'c']
]
console.log(mixedDataTypes)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const Companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// Print the array using console.log()
console.log(Companies)
// Print the number of companies in the array
console.log(Companies.length)
// Print the first company, middle and last company
let companyLength = Companies.length
let companyMiddle = 0
if (companyLength%2 === 0) {
  companyMiddle = companyLength/2
} else {
  companyMiddle = (companyLength - 1)/2
}
console.log("first item:\t", Companies[0], " / middle item:\t", Companies[companyMiddle], " / last item:\t", Companies[companyLength - 1])

// Print out each company
Companies.forEach(company => {
  console.log(company)
});

// Change each company name to uppercase one by one and print them out
Companies.forEach(company => {
  console.log(company.toUpperCase())
})

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let temp = Companies.pop()
// console.log("poped Companies",Companies)
console.log(Companies.join(), "and", temp, "are big IT companies.")
Companies.push(temp)
// console.log("rejoin",Companies)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function isCompany () {
  const company = document.getElementById("iscompany").value
  if (Companies.includes(company)) {
    document.getElementById("companyresult").innerText = company
  } else {
    document.getElementById("companyresult").innerText = (company + ' is not found')
  }
}

// Filter out companies which have more than one 'o' without the filter method
function myfilter (array) {
  const result = Array()

  array.forEach(string => {
    let o = 0;
    let temp = string.split('')
    temp.forEach(char => {
      if (char === 'o') {
        o++
      }
    })
    if (o <= 1) {
      result.push(string)
    }
  })
  return result
}
const new_company = myfilter(Companies)
console.log(new_company)

// Sort the array using sort() method
Companies.sort()
console.log(Companies)

// Reverse the array using reverse() method
Companies.reverse()
console.log(Companies)

// Slice out the first 3 companies from the array
const slice1 = Companies.slice(3)
console.log(slice1)

// Slice out the last 3 companies from the array
const slice2 = Companies.slice(0, companyLength - 3)
console.log(slice2)

// Slice out the middle IT company or companies from the array
const slice3 = Companies.slice(0, 3).concat(Companies.slice(4))
console.log(slice3)

// Remove the first IT company from the array
const notOracle = Companies.splice(0, 1)
console.log(notOracle)
console.log(Companies)

Companies.push(notOracle.toString())
Companies.sort()

// Remove the middle IT company or companies from the array
Companies.splice(3, 1)
console.log(Companies)

// Remove the last IT company from the array
Companies.pop();
console.log(Companies)
console.log("after pop last item")

// Remove all IT companies
const afterSplice = Companies.splice()
console.log(afterSplice)
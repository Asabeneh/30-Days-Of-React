// 1. Declare an empty array;
let countries = []
// 2. Declare an array with more than 5 number of elements
countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

// 3. Find the length of your array
console.log(countries.length)

// 4. Get the first item, the middle item and the last item of the array
console.log(countries[0])
console.log(countries[Math.floor(countries.length / 2)])
console.log(countries[countries.length - 1])

// 5. Declare an array called mixedDataTypes,put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ['Albania', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mixedDataTypes.length)

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
]

// 7. Print the array using console.log()
console.log(itCompanies)

// 8. Print the number of companies in the array
console.log(itCompanies.length)

// 9. Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length / 2)])
console.log(itCompanies[itCompanies.length - 1])

// 10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i])
}

// 11. Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase())
}

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence = ''
for (let i = 0; i < itCompanies.length; i++) {
  if (i === itCompanies.length - 1) {
    sentence += 'and ' + itCompanies[i]
  } else {
    sentence += itCompanies[i] + ', '
  }
}

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function checkCompany(company) {
  for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i] === company) {
      return company
    }
    return 'Company is not found'
  }
}

// 14. Filter out companies which have more than one 'o' without the filter method
function filterCompanies() {
  let filteredCompanies = []
  for (let i = 0; i < itCompanies.length; i++) {
    let count = 0
    for (let j = 0; j < itCompanies[i].length; j++) {
      if (itCompanies[i][j] === 'o') {
        count++
      }
    }
    if (count > 1) {
      filteredCompanies.push(itCompanies[i])
    }
  }
  return filteredCompanies
}

// 15. Sort the array using sort() method
itCompanies.sort()

// 16. Reverse the array using reverse() method

itCompanies.reverse()

// 17. Slice out the first 3 companies from the array

itCompanies.slice(0, 3)

// 18. Slice out the last 3 companies from the array
itCompanies.slice(itCompanies.length - 3)

// 19. Slice out the middle IT company or companies from the array
itCompanies.slice(Math.floor(itCompanies.length / 2), 1)

// 20. Remove the first IT company from the array
itCompanies.shift()

// 21. Remove the middle IT company or companies from the array
itCompanies.splice(Math.floor(itCompanies.length / 2), 1).shift()

// 22. Remove the last IT company from the array
itCompanies.slice(itCompanies.length - 1).shift()

// 23. Remove all IT companies

itCompanies = []

// Exercise: Level 1

const countries = [
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

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

// Declare an empty array;
const task1 = Array()


// Declare an array with more than 5 number of elements
const task2 = [1, 2, 3, 4]

// Find the length of your array
const task3 = task2.length
// console.log(task3)

// Get the first item, the middle item and the last item of the array
const task4Firt = task2[0]
const task4Middle = task2[(Math.round(task3 - 1) / 2, 2)]
const task4Last = task2[task3 - 1]
// console.log(`
//     First Item:  ${task4Firt}
//     Middle Item: ${task4Middle}
//     Last Item: ${task4Last}
// `)

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. 
// The array size should be greater than 5
const mixedDataTypes = ['string', 'c', 1, false, { name: 'nico', favfood: 'pasta' }]
// console.log(`
//     mixedDataTypes = ${mixedDataTypes}
//     mixedDataTypes.length = ${mixedDataTypes.length}
// `)


// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// Print the array using console.log()
// console.log(itCompanies)

// Print the number of companies in the array

// console.log(`Numbe of companies = ${itCompanies.length}`)
// Print the first company, middle and last company

// console.log(`
//     first ${itCompanies[0]}
//     middle ${itCompanies[(Math.round((itCompanies.length - 1) / 2, 2))]}
//     last ${itCompanies.length - 1}
// `)

// Print out each company
// console.log(itCompanies)

// Change each company name to uppercase one by one and print them out
// itCompanies[0] = 'FACEBOOK'
// itCompanies[1] = 'GOOGLE'
// itCompanies[2] = 'MICROSOFT'
// itCompanies[3] = 'APPLE'
// itCompanies[4] = 'IBM'
// itCompanies[5] = 'ORACLE'
// itCompanies[6] = 'AMAZON'
// console.log(itCompanies)

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(`
//     ${itCompanies.slice(0,itCompanies.length-1)} and ${itCompanies[itCompanies.length-1]} are big IT companies.
// `)

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const companyToSearch1 = 'SiteHost'
const companyToSearch2 = 'Amazon'
const results1 = itCompanies.includes(companyToSearch1)
const results2 = itCompanies.includes(companyToSearch2)

// console.log(`
//     SiteHost ? = ${results1}
//     Amazon ? = ${results2}
// `)

// Filter out companies which have more than one 'o' without the filter method


// Sort the array using sort() method
const arrSorted = itCompanies.sort()
// console.log(`arrSorted = ${arrSorted}`)


// Reverse the array using reverse() method
const arrReverse = arrSorted.reverse()
console.log(`arrReverse = ${arrReverse}`)


// Slice out the first 3 companies from the array
console.log(arrReverse.slice(3))

// Slice out the last 3 companies from the array
console.log(arrReverse.slice(0,3))

// Slice out the middle IT company or companies from the array


// Remove the first IT company from the array
console.log(`
    arrReverse.shift() = ${arrReverse.shift()}
    arrReverse = ${arrReverse}
`)

// Remove the middle IT company or companies from the array

// Remove the last IT company from the array
console.log(`
    arrReverse.pop() = ${arrReverse.pop()}
    arrReverse = ${arrReverse}
`)


// Remove all IT companies
// arrReverse = ['']
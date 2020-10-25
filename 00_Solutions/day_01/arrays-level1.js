// Declare an empty array;
const arr = Array()

// Declare an array with more than 5 number of elements
const six8values = Array(6).fill(8)

// Find the length of your array
console.log('Lenth of array ' + six8values.length)

// Get the first item, the middle item and the last item of the array
console.log('First value of array: ' + six8values[0])

// Declare an array called mixedDataTypes, put different data types in the array
// and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [true, 'Hello', 123, false, 'World', { object: true }]
console.log('Length of mixed Data Type array: ' + mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook,
// Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
]

// Print the array using console.log()
console.log('All companies: ' + itCompanies)

// Print the number of companies in the array
var itCompaniesLength = itCompanies.length
console.log('Number of Companies: ' + itCompaniesLength)

// Print the first company, middle and last company
console.log('Fist company: ' + itCompanies[0])
console.log('Middle company: ' + itCompanies[Math.floor(itCompaniesLength / 2)])
console.log('Last company: ' + itCompanies[itCompaniesLength - 1])

// Print out each company
console.log('Companies joined by ", ": ' + itCompanies.join(', '))

// Change each company name to uppercase one by one and print them out
console.groupCollapsed('Uppercase comapnies')
for (i in itCompanies) {
    console.log(itCompanies[i].toUpperCase())
}
console.groupEnd()

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,
// Oracle and Amazon are big IT companies.
console.log(
    `Sentence: ${itCompanies.slice(0, itCompaniesLength - 1).join(', ')} and ${
        itCompanies[itCompaniesLength - 1]
    } are big IT companies.`
)

// Check if a certain company exists in the itCompanies array. If it exist return
// the company else return a company is not found
var company = 'Apple'
let index = itCompanies.indexOf(company)
index != -1
    ? console.log(`Company "${company}" was found at index: ` + index)
    : console.log(`Company "${company}" was not found`)

// Filter out companies which have more than one 'o' without the filter method
console.groupCollapsed('Comapnies with double o')
for (i in itCompanies) {
    if (itCompanies[i].includes('oo')) {
        console.log(itCompanies[i])
    }
}
console.groupEnd()

// Sort the array using sort() method
itCompanies.sort()
console.log('Sorted: ' + itCompanies)

// Reverse the array using reverse() method
itCompanies.reverse()
console.log('Reversed: ' + itCompanies)

// Slice out the first 3 companies from the array
console.log('Sliced 3 first: ' + itCompanies.slice(0, 3))

// Slice out the last 3 companies from the array
console.log(
    'Sliced 3 latest: ' +
        itCompanies.slice(itCompaniesLength - 3, itCompaniesLength)
)

// Slice out the middle IT company or companies from the array
console.log(
    'Sliced middle: ' +
        itCompanies.slice(
            Math.floor((itCompaniesLength - 1) / 2),
            Math.floor(itCompaniesLength / 2) + 1
        )
)

// Remove the first IT company from the array
itCompanies.shift()
console.log('Removed first: ' + itCompanies)

// Remove the middle IT company or companies from the array
itCompanies.splice(Math.floor(itCompanies.length / 2), 1)
console.log('Removed middle: ' + itCompanies)

// Remove the last IT company from the array
itCompanies.pop()
console.log('Removed last: ' + itCompanies)

// Remove all IT companies
itCompanies.length = 0
console.log('Emptied array: ' + itCompanies)

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
const emptyArray = []
// Declare an array with more than 5 number of elements
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Find the length of your array
console.log(numbers.length)
// Get the first item, the middle item and the last item of the array
console.log(numbers[0], numbers[Math.floor(numbers.length / 2)], numbers[numbers.length - 1])
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'two', true, { name: 'John' }, [1, 2, 3, 4, 5]]
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length)
// Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1])
// Print out each company
itCompanies.forEach(company => console.log(company))
// Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => console.log(company.toUpperCase()))
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', ') + ' are big IT companies.')
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const company = 'Google'
if (itCompanies.includes(company)) {
  console.log(company +'is found in the array.')
} else {
  console.log(company +'is not found in the array.')
}
// Filter out companies which have more than one 'o' without the filter method
const filteredCompanies = itCompanies.filter(company => company.toLowerCase().indexOf('o') === -1)
console.log(filteredCompanies)
// Sort the array using sort() method
console.log(itCompanies.sort())
// Reverse the array using reverse() method
console.log(itCompanies.reverse())
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3))
// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4))
// Remove the first IT company from the array
console.log(itCompanies.shift())
// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(3, 1))
// Remove the last IT company from the array
console.log(itCompanies.pop())
// Remove all IT companies
console.log(itCompanies.splice(0))
// 1 - Declare an empty array
let arr = [];

// 2 - Declare an array with more than 5 numbers of elements
arr = ['HTML', 'CSS', 'JS', 'VueJs', 'React', 'TailwindCSS', 'Styled-components'];

// 3 - Find the length of your array
const arrLength = arr.length;

// 4 - Get the first item, the middle item and the last item of the array
let middle = Math.floor(arr.length / 2);
let last = arr.length - 1;

// 5 - Declare an array called mixedDataTypes, put different data types in the 
// array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  'Nangazaki44',
  7590,
  { skills: ['HTML', 'CSS', 'JS', 'VueJs', 'React', 'TailwindCSS', 'Styled-components'] },
  { contry: 'Angola', city: 'Luanda' },
  true,
  'Day 01 of 30-Days-Of-React'
]

// 6 - Declare an array variable name itCompanies and assign initial values 
// Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7 - Print the array using console.log()
console.log(itCompanies)

// 8 - Print the number of companies in the array
console.log('The number of companies is', itCompanies.length)

// 9 - Print the first company, middle and last company
middle = Math.floor(itCompanies.length / 2);
last = itCompanies.length - 1;

console.log('The first company is', itCompanies[0])
console.log('The middle company is', itCompanies[middle])
console.log('The last company is', itCompanies[last])

// 10 - Print out each company
itCompanies.map((company) => console.log(company))

// 11 - Change each company name to uppercase one by one and print them out
itCompanies.map((company) => console.log(company.toUpperCase()))

// 12 - Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const words = itCompanies.toString(', ')
console.log(words)

// 13 - Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let check = itCompanies.indexOf('NCR')
if (check != -1) {
  console.log(itCompanies[check])
} else {
  console.log('Company not found!')
}

// 14 - Filter out companies which have more than one 'o'
itCompanies.filter((company) => {
  return company.includes('oo') 
  ? console.log(company) 
  : ''
})

// 15 - Sort the array using sort() method
itCompanies.sort()

// 16 - Reverse the array using reverse() method
itCompanies.reverse()

// 17 - Slice out the first 3 companies from the array
itCompanies.slice(0, 3)

// 18 - Slice out the last 3 companies from the array
console.log(itCompanies.slice(middle + 1, last + 1))

// 19 - Slice out the middle IT company or companies from the array
itCompanies.slice(middle, middle + 1)

// 20 - Remove the first IT company from the array
itCompanies.splice(0)

// 21 - Remove the middle IT company or companies from the array
itCompanies.splice(middle, 1)

// 22 - Remove the last IT company from the array
itCompanies.pop(last)

// 23 - Remove all IT companies
itCompanies.splice()

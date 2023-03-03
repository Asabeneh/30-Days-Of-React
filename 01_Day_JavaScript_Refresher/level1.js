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
//   1. Declare an empty array;
const empty = []

//  2.  Declare an array with more than 5 number of elements
const moreThanFive = [1,2,3,4,5,6,7]

//   3. Find the length of your array
console.log(moreThanFive.length)

//   4. Get the first item, the middle item and the last item of the array
console.log(moreThanFive[0], moreThanFive[Math.floor(moreThanFive.length / 2)], moreThanFive[moreThanFive.length - 1])

//   5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, 'two', false, () => 3, new Map(), new Set()]
console.log(mixedDataTypes)

//   6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//   7. Print the array using console.log()
console.log(itCompanies)

//   8. Print the number of companies in the array
console.log(itCompanies.length)

//   9. Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1])

//   10. Print out each company
for(let i = 0; i < itCompanies.length; i++) console.log(itCompanies[i]);

//   11. Change each company name to uppercase one by one and print them out
const companies = [...itCompanies]
console.log(companies)
// for(let i = 0; i < itCompanies.length; i++) {
//     itCompanies[i] = itCompanies[i].toUpperCase()
//     console.log(itCompanies[i])
// };

//   12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence = '';
for(let i = 0; i < itCompanies.length; i++) {
  if(i < itCompanies.length - 1) {
    if(i == 5) {
      sentence += `${itCompanies[i]} `
      continue
    }
    sentence +=`${itCompanies[i]}, `
  } else {
    sentence += `and ${itCompanies[i]} are big IT companies.`
  }
}
console.log(sentence)

//   13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const has = comp => {
  if(itCompanies.includes(comp)) {
    let company = itCompanies.indexOf(comp)
    console.log(itCompanies[company])
    return itCompanies[company]
  } else {
    console.log(`${comp} is not found.`)
  }
}
has('Facebook')

//   14. Filter out companies which have more than one 'o' without the filter method
const lessThan2O = []
let count; let arr;
itCompanies.forEach((company) => {
  arr = company.split('')
  count = 0
  for(let i = 0; i < company.length; i++) {
    if(company.charAt(i) == 'o') {
      count++;
    }
  }
  if(count < 2) lessThan2O.push(company);
})

console.log(lessThan2O)

//   15. Sort the array using sort() method
itCompanies.sort((a, b) => {
  if(a < b) return -1
  if(a > b) return 1
})
console.log(itCompanies)

//   16. Reverse the array using reverse() method
console.log(itCompanies.reverse())

//   17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

//   18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

//   19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), Math.ceil(itCompanies.length / 2)))

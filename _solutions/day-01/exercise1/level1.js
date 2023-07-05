// Exercise 1 - Level 1

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]


//   Declare an empty array;
const newArr = Array()

//   Declare an array with more than 5 number of elements
const newArray = Array(6).fill('cats');

//   Find the length of your array
newArray.length

//   Get the first item, the middle item and the last item of the array
const firstItem = newArray[0]
const lastItem = newArray[newArray.length-1]
const middleItem = newArray[3]

//   Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = Array(6).fill('cats')
mixedDataTypes.push(7)
mixedDataTypes.length

//   Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = Array('Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon')

//   Print the array using console.log()
console.log(itCompanies)

//   Print the number of companies in the array
itCompanies.length


//   Print the first company, middle and last company
const firstCompany = itCompanies[0]
const lastCompany = itCompanies[itCompanies.length-1]
const middleCompany = itCompanies[3]

console.log(lastCompany)

//   Print out each company
for (let i = 0; i<itCompanies.length; i++) {
    console.log(itCompanies[i])
}

//   Change each company name to uppercase one by one and print them out
for (let i = 0; i<itCompanies.length; i++) {
    itCompanies[i].toUpperCase()
    console.log(itCompanies[i])
}

//   Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const store = itCompanies.pop()
const string = itCompanies.join(', ')
const sentence = string + " and " + store + " are big IT Companies."
console.log(sentence)
itCompanies.push(store)

//   Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.

for (let i = 0; i < itCompanies.length; i++) {
    let index = itCompanies.indexOf(itCompanies[i]) 
    index != -1
    ? console.log('This company does exist in the array')
    : console.log('This company does not exist in the array')
    }

//   Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
        
    if (itCompanies[i].includes('o'))  {
        let matcher = itCompanies[i].match(/o/g).length
        if (matcher > 1) {
            console.log(itCompanies[i])
        }
    } 
}

//   Sort the array using sort() method
itCompanies.sort()

//   Reverse the array using reverse() method
itCompanies.reverse()

//   Slice out the first 3 companies from the array

const slicedFirstThree = itCompanies.slice(0, 3)


//   Slice out the last 3 companies from the array
const slicedLastThree = itCompanies.slice(itCompanies.length-3, itCompanies.length)


//   Slice out the middle IT company or companies from the array
const middle = itCompanies[Math.floor((itCompanies.length)/2)]


//   Remove the first IT company from the array
const removedFirst = itCompanies.shift()

itCompanies.unshift('Oracle')

//   Remove the middle IT company or companies from the array
const middleIndex = Math.floor((itCompanies.length)/2)
const removedMiddle = itCompanies.splice(middleIndex,1)

itCompanies.splice(middleIndex, 0, ...removedMiddle);

//   Remove the last IT company from the array
const removedLast = itCompanies.pop()

//   Remove all IT companies
itCompanies.length = 0
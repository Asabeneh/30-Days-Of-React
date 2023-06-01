

//Declare an empty array;
const emptyArray = Array()
console.log('Declare an empty array;: Empty array '+emptyArray)

//Declare an array with more than 5 number of elements
const arrayOfSixElements = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log('Declare an array with more than 5 number of elements: '+arrayOfSixElements)

//Find the length of your array
const arrayLength = arrayOfSixElements.length
console.log('Find the length of your array: '+arrayLength)

//Get the first item, the middle item and the last item of the array
console.log('First item '+arrayOfSixElements[0])
let middleIndex=Math.round(arrayLength/2)
console.log('Middle item '+arrayOfSixElements[middleIndex])
console.log('Last item '+arrayOfSixElements[arrayLength-1])

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes=['apple', 3, true, 3.14, 9.8, 'speed']
console.log(mixedDataTypes)

/*
Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
Print the array using console.log()
Print the number of companies in the array
Print the first company, middle and last company
Print out each company
*/
const itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[Math.round(itCompanies.length/2)])
console.log(itCompanies[itCompanies.length-1])
console.log(itCompanies.join(', '))

//Change each company name to uppercase one by one and print them out

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.


/*
Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
Filter out companies which have more than one 'o' without the filter method
Sort the array using sort() method
Reverse the array using reverse() method
Slice out the first 3 companies from the array
Slice out the last 3 companies from the array
Slice out the middle IT company or companies from the array
Remove the first IT company from the array
Remove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies

*/


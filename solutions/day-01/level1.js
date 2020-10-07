// Declare an empty array;
const arr = []
console.log(arr);

// Declare an array with more than 5 number of elements
const element = [
    'element 1',
    'element 2',
    'element 3',
    'element 4',
    'element 5',
    'element 6',
    'element 7',
]

// Find the length of your array
console.log(element.length);

// Get the first item, the middle item and the last item of the array
let firstItem = element[0] 
console.log(firstItem) 

secondItem = element[3]
console.log(secondItem)

let lastIndex = element.length - 1
lastIndex = element[lastIndex]

console.log(lastIndex) 

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    'Jeremiah Iro',
    250,
    true,
    { country: 'Nigeria', city: 'Port Harcourt' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Jquery'] },
]

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
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
console.log(itCompanies)

// Print the number of companies in the array
console.log('Number of Companies:', itCompanies.length)

sum = itCompanies.length;

// Print out each company
for(var i = 0; i < sum; i++){
    console.log(itCompanies[i]);
}

// Change each company name to uppercase one by one and print them out
toUpper = function(x){ 
    return x.toUpperCase();
};

console.log(itCompanies.map(toUpper)) 

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
itCompanies[itCompanies.length-1] = 'and '+ itCompanies[itCompanies.length-1];
var string = itCompanies.join(', ');
console.log(string, 'are big IT companies')

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let ItCoy = itCompanies.includes('IBM'); // -1, if the element not found index is -1
if (ItCoy) {
  console.log('This It Company does exist in the array')
} else {
  console.log('This It Company does not exist in the array')
}

// Filter out companies which have more than one 'o' without the filter method
let ItCom = itCompanies.includes('oo'); // -1, if the element not found index is -1
if (ItCom) {
  console.log('This It Company does exist in the array')
} else {
  console.log('This It Company does not exist in the array')
}

// Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies);

// Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies);

// Slice out the first 3 companies from the array
var slice3 = itCompanies.slice(1, 3);
console.log(slice3);


// Slice out the last 3 companies from the array
var splice3 = itCompanies.slice(Math.max(itCompanies.length - 3, 1))
console.log(splice3);

// Slice out the middle IT company or companies from the array
const mid = itCompanies.indexOf('Apple')
console.log(mid)

// Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

// Remove the middle IT company or companies from the array
itCompanies.splice(3)
console.log(itCompanies)

// Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)

// Remove all IT companies
while (itCompanies.length > 0) {
    itCompanies.pop();
}
console.log(itCompanies)
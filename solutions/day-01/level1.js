// Declare an empty array;
const arr = [];

// Declare an array with more than 5 number of elements
const arrFivePlus = [0, 1, 2, 3, 4, 5, 6];

// Find the length of your array
console.log(arrFivePlus.length);

// Get the first item, the middle item and the last item of the array
console.log(arrFivePlus.indexOf(0));
console.log(arrFivePlus.slice(3, 4));
console.log(arrFivePlus.lastIndexOf(6));

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [10, 'Happy', 'Code', true, !false, 'JS'];
console.log(mixedDataTypes.length);

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// // Print the array using console.log()
// console.log(itCompanies);
// // Print the number of companies in the array
// console.log(itCompanies.length);
// // Print the first company, middle and last company
// const joinComp = itCompanies[0] + ', ' + itCompanies.slice(3, 4) + ', ' + itCompanies.slice(6, 7);
// console.log(joinComp);
// // Print out each company
// itCompanies.forEach((element) => {
//     console.log(element);
// });
// // Change each company name to uppercase one by one and print them out
// itCompanies.forEach((e) => {
//     let upCase = e.toUpperCase();
//     console.log(upCase);
// });
// // Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// let sent = ' and ' + itCompanies[6] + ' are big IT companies.';
// itCompanies.pop();
// console.log(itCompanies + sent);
// // Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// if (itCompanies.includes('Apple') === true) {
//     console.log('Apple');
// } else {
//     console.log('Company is not found');
// }
// // Filter out companies which have more than one 'o' without the filter method
// itCompanies.forEach((element) => {
//     if (element.includes('o')) {
//         console.log(element);
//     }
// });

// // Sort the array using sort() method
// console.log(itCompanies.sort());
// // Reverse the array using reverse() method
// console.log(itCompanies.reverse());
// // Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0, 3));
// // Slice out the last 3 companies from the array
// console.log(itCompanies.slice(3));
// // Slice out the middle IT company or companies from the array
// console.log(itCompanies);
// let midItems = itCompanies.splice(1, 4);
// console.log(midItems);
// // Remove the first IT company from the array
// itCompanies.shift();
console.log(itCompanies);
// Remove the middle IT company or companies from the array
// itCompanies.splice(1,5)
console.log(itCompanies);
// Remove the last IT company from the array
// itCompanies.pop();
console.log(itCompanies);
// Remove all IT companies

console.log(itCompanies.splice());

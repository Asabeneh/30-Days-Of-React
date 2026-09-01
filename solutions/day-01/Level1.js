// Declare an empty array;
const emptyArray = [];
// Declare an array with more than 5 number of elements
const numberArray = [1, 2, 3, 4, 5];
// Find the length of your array
console.log(numberArray.length);
// Get the first item, the middle item and the last item of the array
console.log(numberArray[0], numberArray[2], numberArray[4]);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, true, "Diego", 10, false, "black"];
// Print the number of companies in the array
console.log(mixedDataTypes.length);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);

// Change each company name to uppercase one by one and print them out
for(let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log(itCompanies.includes("Facebook"));
// Sort the array using sort() method
console.log(itCompanies.sort());
// Reverse the array using reverse() method
console.log(itCompanies.reverse());
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 2));
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(0, -4));
// Remove the first IT company from the array
console.log('teste');
console.log(itCompanies.shift());
// Remove the last IT company from the array
console.log(itCompanies.pop());


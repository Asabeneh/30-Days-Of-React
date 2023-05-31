// 1. Declare an empty array;
const emptyArr = [];
// 2. Declare an array with more than 5 number of elements
const fiveArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 3. Find the length of your array
console.log(fiveArr.length);
// 4. Get the first item, the middle item and the last item of the array
console.log('First Item is: ', fiveArr[0]);
console.log('Middle Item is: ', fiveArr[Math.floor(fiveArr.length / 2)]);
console.log('Last Item is: ', fiveArr[fiveArr.length - 1]);
// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [2, true, null, undefined, 'd', Symbol()];
console.log(mixedDataTypes.length);
// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];
// 7. Print the array using console.log()
console.log(itCompanies);
// 8. Print the number of companies in the array
console.log(itCompanies.length);
// 9. Print the first company, middle and last company
console.log(
  itCompanies[0],
  itCompanies[Math.floor(fiveArr.length / 2)],
  itCompanies[itCompanies.length - 1]
);
// 10. Print out each company
itCompanies.forEach((element) => {
  console.log(element);
});
// 11. Change each company name to uppercase one by one and print them out
itCompanies.forEach((element) => {
  console.log(element.toUpperCase());
});
// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString(), 'are big IT companies');
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function contains(arr, company) {
  if (arr.includes(company)) {
    console.log('we have this company!');
  } else {
    console.log('company not found!');
  }
}
contains(itCompanies, 'Snapchat'); //false
contains(itCompanies, 'IBM'); //true

// 14. Filter out companies which have more than one 'o' without the filter method

// 15. Sort the array using sort() method
console.log(itCompanies.sort());
// 16. Reverse the array using reverse() method
console.log(itCompanies.reverse());
// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(2));
// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));
// 19. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice([itCompanies.length / 2]));
// 20. Remove the first IT company from the array
console.log(itCompanies.pop());
// 21. Remove the middle IT company or companies from the array
console.log(itCompanies.splice([itCompanies.length / 2]));
// 22. Remove the last IT company from the array
console.log(itCompanies.splice(itCompanies.length - 1));
// 23. Remove all IT companies
console.log(itCompanies.splice());

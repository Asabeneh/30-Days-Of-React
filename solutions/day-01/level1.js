/**
 * EXERCISE: LEVEL 1
 */

// 1. Declare an empty array
const empty = [];

// 2. Declare an array with more than 5 number of elements
const names = ['John', 'Jack', 'Betty', 'Tom', 'Pam', 'Sam'];

// 3. Find the length of your array
let arraySize = names.length;

// 4. Get the first item, the middle item and the last item of the array
let first = names[0];
let middle = names[names.length / 2];
let last = names[names.length - 1];

// 5. Decalre an array called mixedDataTypes, put different data types in the array and find the length of the arry. The array size should be greater than 5
const mixedDataTypes = [1, "hello", false, [], null, undefined];

// 6. Declare an array variable name itCompanies and assign intial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length / 2]);
console.log(itCompanies[itCompanies.length - 1]);

// 10. Print out each company
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// 11. Change each company name to uppercase one by one and print them out
itCompanies[0] = 'FACEBOOK';
console.log(itCompanies[0]);

itCompanies[1] = 'GOOGLE';
console.log(itCompanies[1]);

itCompanies[2] = 'MICROSOFT';
console.log(itCompanies[2]);

itCompanies[3] = 'APPLE';
console.log(itCompanies[3]);

itCompanies[4] = 'IBM';
console.log(itCompanies[4]);

itCompanies[5] = 'ORACLE';
console.log(itCompanies[5]);

itCompanies[6] = 'AMAZON';
console.log(itCompanies[6]);

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle, and Amazon are big IT companies
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]}, and ${itCompanies[6]} are big IT companies `);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes("Github")) {
    console.log(itCompanies[itCompanies.indexOf("Github")]);
} else {
    console.log("Company is not found");
}

// 14. Filter out companies which have more than one 'o' wihout the filter method
itCompanies.shift();
itCompanies.shift();

// 15. Sort the array using sort() method
itCompanies.sort();

// 16. Reverse the array using reverse() method
itCompanies.reverse();

// 17. Slice our the first 3 companies from the array
itCompanies.slice(3);

// 18. Slice out the last 3 companies form the array
itCompanies.slice(-3);

// 19. Slice out the middle IT company or companies from the array
itCompanies.slice(itCompanies.length / 2, (itCompanies.length / 2) + 1);

// 20. Remove the first IT company from the array
itCompanies.shift();

// 21. Remove the middle IT company from the array
itCompanies.splice(itCompanies.length / 2, 1);

// 22. Remove the last IT company from the array
itCompanies.pop();

// 23. Remove all IT companies
itCompanies.splice();
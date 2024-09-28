// Exercise: Level 1

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Declare an empty array;
let emptyArray = [];

// Declare an array with more than 5 number of elements
let arrayWithMoreThanFiveElements = [1, 2, 3, 4, 5, 6];

// Find the length of your array
let arrayLength = arrayWithMoreThanFiveElements.length;

// Get the first item, the middle item and the last item of the array
let firstItem = arrayWithMoreThanFiveElements[0];
let middleItem = arrayWithMoreThanFiveElements[Math.floor(arrayLength / 2)];
let lastItem = arrayWithMoreThanFiveElements[arrayLength - 1];

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, "a", true, 3.14, null, [1]];

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
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

// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// Print out each company
console.log(itCompanies.join(", "));

// Change each company name to uppercase one by one and print them out
console.log(itCompanies.map((company) => company.toUpperCase()));

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(
  itCompanies
    .join(", ")
    .concat(" and ")
    .concat(itCompanies[itCompanies.length - 1])
);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
console.log(
  itCompanies.includes("Google") ? "Company found" : "Company not found"
);

// Filter out companies which have more than one 'o' without the filter method
let filteredCompanies = itCompanies.reduce((company) => {
  return company.split("o").length - 1 > 0 ? [] : [...company];
});

// Sort the array using sort() method
itCompanies.sort((a, b) => a.localeCompare(b));

// Reverse the array using reverse() method
itCompanies.reverse();

// Slice out the first 3 companies from the array
itCompanies.slice(0, 3);

// Slice out the last 3 companies from the array
itCompanies.slice(-3);

// Slice out the middle IT company or companies from the array
itCompanies.slice(
  Math.floor(itCompanies.length / 2),
  Math.floor(itCompanies.length / 2) + 2
);

// Remove the first IT company from the array
itCompanies.shift();

// Remove the middle IT company or companies from the array
itCompanies.splice(Math.floor(itCompanies.length / 2), 1);

// Remove the last IT company from the array
itCompanies.pop();

// Remove all IT companies
itCompanies.splice(0, itCompanies.length);

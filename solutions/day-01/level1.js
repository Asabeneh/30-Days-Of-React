// Declare an empty array
const emptyArray = [];

// Declare an array with more than 5 elements
const numbersArray = [1, 2, 3, 4, 5, 6, 7];

// Find the length of the array
const numbersArrayLength = numbersArray.length;

// Get the first, middle, and last items of the array
const firstItem = numbersArray[0];
const middleItem = numbersArray[Math.floor(numbersArray.length / 2)];
const lastItem = numbersArray[numbersArray.length - 1];

// Declare an array with mixed data types
const mixedDataTypes = [1, 'apple', true, null, { name: 'John' }];
const mixedDataTypesLength = mixedDataTypes.length;

// Declare an array called itCompanies
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array
console.log(itCompanies);

// Print the number of companies in the array
const numCompanies = itCompanies.length;
console.log('Number of companies:', numCompanies);

// Print the first, middle, and last company
const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(numCompanies / 2)];
const lastCompany = itCompanies[numCompanies - 1];
console.log('First company:', firstCompany);
console.log('Middle company:', middleCompany);
console.log('Last company:', lastCompany);

// Print out each company
itCompanies.forEach(company => {
    console.log(company);
});

// Change each company name to uppercase one by one and print them out
itCompanies.forEach((company, index) => {
    itCompanies[index] = company.toUpperCase();
    console.log(company);
});

// Print the array as a sentence
const sentence = itCompanies.join(', ') + ' are big IT companies.';
console.log(sentence);

// Check if a certain company exists in the itCompanies array
const searchCompany = 'Microsoft';
if (itCompanies.includes(searchCompany)) {
    console.log(searchCompany + ' exists in the array.');
} else {
    console.log(searchCompany + ' is not found in the array.');
}

// Filter out companies with more than one 'o'
const filteredCompanies = itCompanies.filter(company => company.toLowerCase().split('o').length - 1 <= 1);

// Sort the array
itCompanies.sort();

// Reverse the array
itCompanies.reverse();

// Slice out the first 3 companies
const firstThreeCompanies = itCompanies.slice(0, 3);

// Slice out the last 3 companies
const lastThreeCompanies = itCompanies.slice(-3);

// Slice out the middle IT company
const middleCompanyIndex = Math.floor(numCompanies / 2);
const middleITCompany = itCompanies.slice(middleCompanyIndex, middleCompanyIndex + 1);

// Remove the first IT company
itCompanies.shift();

// Remove the middle IT company
itCompanies.splice(middleCompanyIndex, 1);

// Remove the last IT company
itCompanies.pop();

// Remove all IT companies
itCompanies.length = 0;

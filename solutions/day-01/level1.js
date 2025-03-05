const array = [];
const arraOfNumbers = [1, 2, 3, 4, 5, 6];
let lengtharraOfNumbers = arraOfNumbers.length;
const firstItem = arraOfNumbers[0];
//Get the first item,
console.log(firstItem);
console.log(lengtharraOfNumbers);
//Get the middle item
let middleItem = lengtharraOfNumbers / 2;
console.log(middleItem);
//Get the last item
const [lastItem] = arraOfNumbers.slice(-1);
console.log(lastItem);

const mixedDataTypes = [1, true, 'Helsinki', null, undefined,1234567890123452 ]
const lengthMixedDataTypes = mixedDataTypes.length;
//The length should be greater than 5
console.log(lengthMixedDataTypes);

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);

//Print the first company
const firstCompany = itCompanies[0];
console.log(firstCompany);

const middleCompany = itCompanies[(itCompanies.length - 1) / 2];
console.log(middleCompany);

const lastCompany = itCompanies.slice(-1);
console.log(lastCompany);
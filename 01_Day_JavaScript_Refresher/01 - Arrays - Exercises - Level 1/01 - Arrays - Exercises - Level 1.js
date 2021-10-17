// Exercise Level 1

//   Declare an empty array;

const emptyArr = [];

//   Declare an array with more than 5 number of elements

const sevenItemArr = [1, 2, 3, 4, 5, 6, 7];

//   Find the length of your array

console.log(sevenItemArr.length);

//   Get the first item, the middle item and the last item of the array

console.log(sevenItemArr[0], sevenItemArr[Math.floor(sevenItemArr.length / 2)], sevenItemArr[sevenItemArr.length - 1]);

//   Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const differentDataTypes = ['one', 2, true, { value: 'string' }, null, undefined, ['hello'], false, 9.9];
console.log(differentDataTypes.length);

//   Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//   Print the array using console.log()

console.log(itCompanies);

//   Print the number of companies in the array

console.log(itCompanies.length);

//   Print the first company, middle and last company

console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length / 2)], itCompanies[itCompanies.length - 1]);

//   Print out each company

itCompanies.forEach(company => console.log(company));

//   Change each company name to uppercase one by one and print them out

itCompanies.forEach(company => {
  console.log(company.toUpperCase());
});

//   Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(
  `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]} and ${itCompanies[6]} are big IT companies.`
);

//   Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

const companyExists = company => (itCompanies.includes(company) ? company : 'Company not found');
console.log(companyExists('IBM'));
console.log(companyExists('Samsung'));

//   Filter out companies which have more than one 'o' without the filter method

const filterMoreThanOneO = () => {
  const filteredArr = [];
  itCompanies.forEach(company => {
    if (company.toLowerCase().indexOf('o') === company.toLowerCase().lastIndexOf('o')) filteredArr.push(company);
  });
  return filteredArr;
};

console.log(filterMoreThanOneO());

//   Sort the array using sort() method

const sortedCompanies = [...itCompanies].sort((a, b) => a.localeCompare(b));
console.log(sortedCompanies);

//   Reverse the array using reverse() method

const reversedArray = sortedCompanies.reverse();
console.log(reversedArray);

//   Slice out the first 3 companies from the array

const sliceOutFirst3 = itCompanies.slice(0, 3);
console.log(sliceOutFirst3);

//   Slice out the last 3 companies from the array

const sliceOutLast3 = itCompanies.slice(itCompanies.length - 3, itCompanies.length);
console.log(sliceOutLast3);

//   Slice out the middle IT company or companies from the array

const sliceOutMiddle = () => {
  if (itCompanies.length % 2 === 0) {
    return itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2 + 1);
  } else {
    return itCompanies.slice(Math.floor(itCompanies.length / 2), Math.floor(itCompanies.length / 2 + 1));
  }
};

console.log(sliceOutMiddle());

//   Remove the first IT company from the array

const removeFirst = [...itCompanies].splice(1);
console.log(removeFirst);

//   Remove the middle IT company or companies from the array

const removeMiddleResult = [...itCompanies];
const removeMiddle = () => {
  if (itCompanies.length % 2 === 0) {
    return removeMiddleResult.splice(itCompanies.length / 2 - 1, 2);
  } else {
    return removeMiddleResult.splice(Math.floor(itCompanies.length / 2), 1);
  }
};
removeMiddle();
console.log(removeMiddleResult);

//   Remove the last IT company from the array

const removeLastResult = [...itCompanies];

const removeLast = () => removeLastResult.splice(removeLastResult.length - 1, 1);

removeLast();
console.log(removeLastResult);

//   Remove all IT companies

const removeAllResult = [...itCompanies];

const removeAll = () => removeAllResult.splice(removeAll.length);

removeAll();
console.log(removeAllResult);

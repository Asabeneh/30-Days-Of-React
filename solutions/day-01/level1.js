const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
]

//1. Declare an empty array;
let arr = [];

//2. Declare an array with more than 5 number of elements
const arrX = ['food', 'drinks', 'games', 'books', 'sports', 'music', 'clothes'];

//3. Find the length of your array
const arrXlength = arr1.length;

//4. Get the first item, the middle item and the last item of the array
const arrX1st = arrX[0];
const arrXmid = arrX[Math.floor(arrX.length/2)]
const arrXend = arrX[arrX.length - 1]

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [56, 'year: ', {a: 'height'}, 1978, 'name: ', true, 'Maria'];
const mDtL = mixedDataTypes.length;

//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//7. Print the array using console.log()
console.log(itCompanies);

//8. Print the number of companies in the array
console.log(itCompanies.length);

//9. Print out each company
console.log(itCompanies);

//10. Change each company name to uppercase one by one and print them out
let itCompaniesStrng = itCompanies.toString();
let caps = itCompaniesStrng.toUpperCase();
console.log(caps);

//11. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log(itCompanies.join(', ') + ' are big IT companies.');

//12. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.includes('Nike')?"Nike exists":"Company is not found";

//13. Filter out companies which have more than one 'o' without the filter method

//14. Sort the array using sort() method
itCompanies.sort();

//15. Reverse the array using reverse() method
itCompanies.reverse();

//16. Slice out the first 3 companies from the array
itCompanies.slice(0,3);

//17. Slice out the last 3 companies from the array
itCompanies.slice(itCompanies.length - 3);

//18. Slice out the middle IT company or companies from the array


//19. Remove the first IT company from the array
itCompanies.shift();

//20. Remove the middle IT company or companies from the array

//21. Remove the last IT company from the array
itCompanies.pop();

//22. Remove all IT companies
itCompanies.splice();

// EXERCISE ARRAY
// LEVEL 1
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

// 1. Declare empaty array
const decArr = Array();
// console.log(decArr); // []

// 2. Declare an array with more than 5 number of elements
const fifveArr = ["a", "b", "c", "d", "e", "f"];
// console.log(fifveArr); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// 3. Find the length of your array
const lengthArr = [1, 2, 3, 4, 5, "b", "a", "y", "u"];
// console.log(lengthArr.length); // 9

// 4. Get the first item, the middle item and the last item of the array
const getIndexArr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(getIndexArr[0]); // first item
// console.log(getIndexArr[2]); // middle item but it static
// console.log(Math.ceil(getIndexArr.length / 2)); // middle item but dinamis, u can use Math.ceil or Math.floor
// console.log(getIndexArr[getIndexArr.length - 1]); // last index item

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
  1,
  "aku sayang ibu",
  true,
  { ibu: "billie elish", bapak: "khalid" },
  { profesi: ["tukang cukur", "penyanyi", "pengembala"] },
  null,
];
// console.log(mixedDataTypes.length); // 6

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// 7. Print the array using console.log()
// console.log(itCompanies);

// 8. Print the number of companies in the array
// console.log(itCompanies.length); // 7

// 9. Print the first company, middle and last company
// console.log(itCompanies[0]); // Facebook
// console.log(itCompanies[Math.floor(itCompanies.length / 2)]); // apple
// console.log(itCompanies[itCompanies.length - 1]); // amazon

// 10. Print out each company
// for (let i = 0; i < itCompanies.length; i++) {
//   const element = itCompanies[i];
//   console.log(element);
// }

// 11. Change each company name to uppercase one by one and print them out
let itCompanies2 = itCompanies.map((x) => x.toUpperCase());
// console.log(itCompanies2);
// [
//     'FACEBOOK',
//     'GOOGLE',
//     'MICROSOFT',
//     'APPLE',
//     'IBM',
//     'ORACLE',
//     'AMAZON'
//   ]

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const sentence = itCompanies.toString();
// console.log(`${sentence} are big IT companies` ); // Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon are big IT companies

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.
// let findItcompanies = itCompanies.indexOf("Oracle");
// if (findItcompanies != -1) {
//   console.log(itCompanies[findItcompanies]);
// } else {
//   console.log("company is not found");
// }

// 14. filter out companies which have more than one 'o' without the filter method


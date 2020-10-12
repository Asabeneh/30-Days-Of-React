// Array Exercise - Level 1

const arr = Array();
console.log(arr);

const numbers = [1, 2, 3, 4, 5];

firstNumber = numbers[0];
middleNumber = numbers[2];
lastNumber = numbers[4];

console.log(firstNumber, middleNumber, lastNumber);

const mixedDataTypes = ["CSS", 2, "books", "HTML", 5, 9];

console.log(mixedDataTypes.length);

let itCompanies = [
  "facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0], itCompanies[3], itCompanies[6]);

console.log(itCompanies.slice());

for (const company of itCompanies) {
  console.log(company.toUpperCase());
}

console.log(itCompanies.join(", "));

console.log(itCompanies.includes("Apple"));

const index = itCompanies.find((company) => company.includes("oo"));
console.log(index);

itCompanies.sort();
console.log(itCompanies);

itCompanies.reverse();
console.log(itCompanies);

console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(4, 7));
console.log(itCompanies.slice(3, 4));

itCompanies.shift();
console.log(itCompanies);

itCompanies.splice(2, 1);
console.log(itCompanies);

itCompanies.pop();
console.log(itCompanies);

console.log(itCompanies.splice());

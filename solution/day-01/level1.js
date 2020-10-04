const emptyArray = [];
const arrayOfSixElements = [1, 2, 3, 4, 5, 6, 7];
console.log(arrayOfSixElements.length);
console.log(
  arrayOfSixElements[0],
  arrayOfSixElements[arrayOfSixElements.length - 1],
  arrayOfSixElements[Math.floor(arrayOfSixElements.length / 2)],
);
const mixedDataTypes = [1, 2, 'string', true, 'Alex', 'Sara'];
console.log(mixedDataTypes.length);

let itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon',
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(
  itCompanies[0],
  itCompanies[itCompanies.length - 1],
  itCompanies[Math.floor(itCompanies.length / 2)],
);
itCompanies.forEach((company) => console.log(company));
itCompanies = itCompanies.map((company) => company.toUpperCase());
itCompanies.forEach((company) => console.log(company));
itCompanies = itCompanies.map(
  (company) => company.slice(0, 1) + company.slice(1).toLowerCase(),
);
console.log(
  `${itCompanies.slice(0, 6).join(',')} and ${
    itCompanies[itCompanies.length - 1]
  } big IT companies`,
);
const companyInArray =
  itCompanies.indexOf('Apple') !== -1 ? 'Apple' : 'not found';
console.log(companyInArray);

const filterArray = [];
for (company of itCompanies) {
  const o = company.match(/o/gi);
  if (o && o.length == 2) {
    filterArray.push(company);
  }
}
console.log(filterArray);
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(3));
console.log(itCompanies.slice(0, 4));
console.log(
  itCompanies.slice(
    Math.floor(itCompanies.length / 2),
    Math.floor(itCompanies.length / 2) + 1,
  ),
);
itCompanies.shift();
console.log(itCompanies);
console.log(itCompanies.slice((Math.floor(itCompanies.length / 2), 1)));
itCompanies.pop();
itCompanies.length = 0;

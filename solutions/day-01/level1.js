const mixedDataTypes = [1, 'string', true, null, undefined, {}, [], () => {}];
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple','IBM', 'Oracle', 'Amazon'];

// display array of it companies
console.log(itCompanies);

// display length of it companies
console.log(`length of IT companies ${itCompanies.length}`)

// display first element, middle element last element of it companies
console.log(`${itCompanies[0]}, ${itCompanies[(itCompanies.length - 1)/2]}, ${itCompanies[itCompanies.length - 1]}`)

// display each company in the array
const displayCompanies = itCompanies.map(company => console.log(company));

// display each company in the array in uppercase
console.log(itCompanies.map(item => item.toUpperCase()));

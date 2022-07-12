const mixedDataTypes = [1, 'string', true, null, undefined, {}, [], () => {}];
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple','IBM', 'Oracle', 'Amazon'];

console.log(itCompanies);
console.log(`length of IT companies ${itCompanies.length}`)
console.log(`${itCompanies[0]}, ${itCompanies[(itCompanies.length - 1)/2]}, ${itCompanies[itCompanies.length - 1]}`)
// display each company in the array on a new line
const displayCompanies = itCompanies.map(company => console.log(company));
console.log(itCompanies.map(item => item.toUpperCase()));

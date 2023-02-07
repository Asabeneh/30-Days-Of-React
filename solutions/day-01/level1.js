// Exercises: Level 1
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
// Exercises
// 1. 
const arr = [];
// 2.
const arr2 = Array(6);
// 3.
const arr2Length = arr2.length;
console.log('3. ', arr2Length);
// 4.
const firstItem = arr2[0];
const middleItem = arr2[Math.floor(arr2Length / 2)];
const lastItem = arr2[arr2Length - 1];
console.log('4. ', { firstItem, middleItem, lastItem });
// 5.
const mixedDataTypes = [1, 'one', true, undefined, null];
const mixedDataTypesLength = mixedDataTypes.length;
console.log('5. ', mixedDataTypesLength);
// 6. 
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// 7.
console.log('7. ', itCompanies);
// 8.
const itCompaniesLength = itCompanies.length;
console.log('8. ', itCompaniesLength);
// 9.
const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(itCompaniesLength / 2)];
const lastCompany = itCompanies[itCompaniesLength - 1];
console.log('9. ', { firstCompany, middleCompany, lastCompany });
// 10. 
console.log('10. ');
itCompanies.forEach((co, i) => console.log(`${i+1}: ${co}`));
// 11. 
console.log('11. ');
itCompanies.forEach((co, i) => console.log(`${i+1}: ${co.toUpperCase()}`));
// 12.
itCompanies.pop();
console.log('12. ', `${itCompanies.join(', ')}, and Amazon are big IT companies`);
itCompanies.push('Amazon');
// 13.
const searchCompany = 'Facebook';
const searchCompanyIndex = itCompanies.indexOf(searchCompany);
searchCompanyIndex === -1 ? 
  console.log('13. ', `${searchCompany} is not found`) 
  : 
  console.log('13. ', `${searchCompany} is found`);
// 14.
const filteredCompanies = [];
itCompanies.forEach(co => {
  let count = 0;
  for (let i = 0; i < co.length; i++) {
    if (co[i] === 'o') {
      count++;
    }
  }
  if (count < 2) {
    filteredCompanies.push(co);
  }
});
console.log('14. ', filteredCompanies);
// 15.
const sortedCompanies = itCompanies.sort();
console.log('15. ', sortedCompanies);
// 16.
const reverseSortedCompanies = itCompanies.reverse();
console.log('16. ', reverseSortedCompanies);
// 17.
const sliced = itCompanies.slice(0, 3);
console.log('17. ', sliced);
// 18.
const lastSliced = itCompanies.slice(itCompaniesLength - 3, itCompaniesLength);
console.log('18. ', lastSliced);
// 19.
const midSlice = itCompanies.slice(Math.floor(itCompaniesLength / 2), Math.floor(itCompaniesLength / 2) + 1);
console.log('19. ', midSlice);
// 20.
const removeFirstCompany = itCompanies.shift();
console.log('20. ', removeFirstCompany);
// 21.
const removeMidCompany = itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
console.log('21. ', removeMidCompany);
// 22.
const removeLastCompany = itCompanies.pop();
console.log('22. ', removeLastCompany);
// 23.
const removeAllCompanies = itCompanies.splice(0, itCompanies.length);
console.log('23. ', removeAllCompanies);

import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

// Exercises: Level 1
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

// Exercises: Level 2
// 2.
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/[.,]/g, '');
const words = text.split(' ');
console.log(text);
console.log(words);
console.log(words.length);
// 3.
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
const honeyIndex = shoppingCart.indexOf('Honey');
shoppingCart.splice(honeyIndex, 1);
const teaIndex = shoppingCart.indexOf('Tea');
shoppingCart.splice(teaIndex, 1, 'Green Tea');
console.log(shoppingCart);
// 4.
countries.includes('Ethiopia') ? console.log('4. ETHIOPIA') : countries.push('Ethiopia');
// 5. 
webTechs.includes('Sass') ? console.log('5. Sass is a CSS preprocess') : webTechs.push('Sass');
// 6.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Exercises: Level 3
// 1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log('1. ');
console.log(ages.sort(), `Min: ${ages[0]}, Max: ${ages[ages.length - 1]}`);
console.log(`Median: ${ages[Math.floor(ages.length / 2)]}`, `Avg: ${ages.reduce((a, b) => a + b, 0) / ages.length}`);
console.log(`Range: ${ages[ages.length - 1] - ages[0]}`, `Max - Avg: ${Math.abs(ages[ages.length - 1] - ages.reduce((a, b) => a + b, 0) / ages.length)}`, `Min - Avg: ${Math.abs(ages[0] - ages.reduce((a, b) => a + b, 0) / ages.length)}`);
console.log(countries.slice(0, 10));
// 2. 
console.log(`2. Mid Country: ${countries[Math.floor(countries.length / 2)]}`);
// 3. 
const firstHalf = countries.slice(0, Math.ceil(countries.length / 2));
const secondHalf = countries.slice(Math.ceil(countries.length / 2), countries.length);
console.log('3. ', { firstHalf, secondHalf });

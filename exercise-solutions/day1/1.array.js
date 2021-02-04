//Exercise 1
let myArr = ['Nam', 17, true, { country: 'Vietnam', city: 'Ho chi minh' }, { skills: ['html,css,js'] }];
console.log('my Array: '+myArr);
console.log('my Array length: ' + myArr.length);
console.log("First item: " + myArr[0]);
console.log("Middle item: " + myArr[Math.floor(myArr.length / 2)]);
console.log("Last item: " + myArr[myArr.length - 1]);

const itCompany = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompany);
console.log(itCompany.length);
console.log(itCompany[0], itCompany[Math.floor(itCompany.length / 2)], itCompany[itCompany.length - 1]);
itCompany.forEach(com => {
  console.log(com.toUpperCase());
});

itCompany.includes('Nam') ? 1 : 0;
// Filter out companies which have more than one 'o' without the filter method
itCompany.forEach(com => {
  const temp = com.split('');
  let count = 0;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == 'o') count++;
  }
  if (count > 1) console.log(com);
});
/**
 * Sort the array using sort() method
Reverse the array using reverse() method
 */
console.log(itCompany.sort());
console.log(itCompany.reverse());

/**
 * Slice out the first 3 companies from the array
Slice out the last 3 companies from the array
Slice out the middle IT company or companies from the array
 */
console.log(itCompany.slice(0, 2));
console.log(itCompany.slice(itCompany.length - 3, itCompany.length - 1));
console.log(itCompany.slice(Math.floor(itCompany.length / 2), Math.floor(itCompany.length / 2) + 1));
/*
Remove the first IT company from the array
Remove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies
*/
console.log(itCompany.shift());
console.log(itCompany.splice(Math.floor(itCompany.length / 2), 1));
console.log(itCompany.pop());
console.log(itCompany.splice());


//exercise 2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.split('.').join('').split(' ');
console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
/**
 * add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
 */

if (!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat');
if (!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar');
const indexOfHoney = shoppingCart.indexOf('Honey');
shoppingCart.splice(indexOfHoney, 1);
const indexOfTea = shoppingCart.indexOf('Tea');
shoppingCart[indexOfTea] = 'Green Tea';


//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.includes('Ethiopia') ? console.log('Ethiopia') : countries.push('Ethiopia');

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webtechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webtechs.push('Sass'); console.log(webtechs);
// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log('Fullstack: ' + fullStack);
//Excersie 3
// The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
agesMedianIdx = (ages.length - 1) / 2;
console.log("median age: " + ages[Math.floor(agesMedianIdx)]);
let totalAge = 0;
ages.forEach(age => {
  totalAge += age;
});
const avgAge = totalAge / ages.length;
console.log("Average age: " + avgAge);
const minAge = Math.min(...ages);
console.log("Min age: " + minAge);
const maxAge = Math.max(...ages);
console.log("Max age: " + maxAge);
console.log("Range of the ages: " + (maxAge - minAge));
console.log("Compare min vs avg: " + Math.abs(minAge - avgAge));
console.log("Compare max vs avg: " + Math.abs(maxAge - avgAge));
// 1.Slice the first ten countries from the countries array
console.log("first ten countries: " + countries.slice(0, 10));
// Find the middle country(ies) in the countries array
const countryMid = countries.length/2;
console.log("middle country: " + countries.slice(countryMid, countryMid + 1));
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let firstHalfCountries = [];
let secondHalfCountries = [];
for (let i = 0; i < countries.length; i++) {
  const con = countries[i];
  if (i <= countryMid) { firstHalfCountries.push(con);}
  else { secondHalfCountries.push(con); }
  
}
console.log("first half: " + firstHalfCountries);
console.log("second half: " + secondHalfCountries);
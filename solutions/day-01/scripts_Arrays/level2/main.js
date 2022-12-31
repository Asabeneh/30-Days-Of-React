const {countries} = require('./countries');
const {webTechs} = require('./web_techs');

// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// split by periods then join then split by commas and join and finally split by words 
text = text.split('.').join('').split(',').join('').split(' '); 
console.log(text.length)

// In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk','Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat'); // add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.push('Sugar'); //add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1) // remove 'Honey' if you are allergic to honey
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1 ,'Green Tea') // modify Tea to 'Green Tea'
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
console.log(countries.includes('Ethiopia') ? 'ETHIOPIA' : countries.push('Ethiopia'));

/*In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
If it does not exist add Sass to the array and print the array.*/
(webTechs.includes('Sass')) ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass') && console.log(webTechs);

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// - Sort the array and find the min and max age 
ages.sort();
console.log(ages[0], ages[ages.length-1]);
// - Find the median age(one middle item or two middle items divided by two) 
console.log(ages[ages.length/2]);
// - Find the average age(all items divided by number of items) 
console.log((ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9])/10);
// - Find the range of the ages(max minus min) 
console.log(ages[ages.length-1] - ages[0]);
// - Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(ages[0] - ages[ages.length-1]));

// Slice the first ten countries from the countries array
console.log(countries.slice(0,10));
// Find the middle country(ies) in the countries array
console.log(countries[Math.floor(countries.length/2)] + " and " + countries[Math.ceil(countries.length/2)]);
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let countries1 = countries.slice(0,98);
let countries2 = countries.slice(98, countries.length)
console.log(`\nCountries 1: ${countries1}\n\nCountries 2: ${countries2}`);

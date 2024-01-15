let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// console.log(words);
// console.log(words.length);

let words = text;

for (let code = 33; code <= 47; code++) {
    words = words.replaceAll(String.fromCharCode(code), '');
}
words = words.split(' ');
console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

const countries = require("./countries.js");

if (countries.countries.indexOf('Ethiopia') != -1) {
    console.log('ETHIOPIA');
} else {
    countries.countries.push('Ethiopia');
}

const webTechs = require("./web_techs.js");

if (webTechs.webTechs.indexOf('Sass') != -1) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.webTechs.push('Sass');
    console.log(webTechs.webTechs);
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
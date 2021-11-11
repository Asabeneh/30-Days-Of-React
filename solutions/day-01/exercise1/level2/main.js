//1
import { countries } from './countries.js';
import { webTechs } from './web_tech.js';
//2
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.split(/\W+/g);
if (!words[0]) words.splice(0, 1);
if (!words.at(-1)) words.pop();
console.log(words);
console.log(words.length);
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if (!shoppingCart.includes('Meat')) shoppingCart.unshift('Meat');
if (!shoppingCart.includes('Sugar')) shoppingCart.push('Sugar');
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
//4
const ethiopia = 'Ethiopia';
countries.includes(ethiopia) ? console.log(ethiopia.toUpperCase()) : countries.push(ethiopia);
//5
const sass = 'Sass';
webTechs.includes(sass) ? console.log('Sass is a CSS preprocess') : webTechs.push(sass);
//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

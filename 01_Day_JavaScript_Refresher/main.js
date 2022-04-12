import webTechs from "./web_tech.js";
import countries from "./countries.js";

console.log(webTechs);
console.log(countries);

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words = text.replaceAll(/[.,]/g,'').split(' ');
console.log(words,words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.push('Meat');

const addItem = (arr,item) => {
    if( !arr.includes(item) ){ arr.push(item)}else { console.log(item.toUpperCase(),arr) };
}

addItem(shoppingCart,'Sugar')
addItem(shoppingCart,'Milk');

shoppingCart.splice(shoppingCart.indexOf('Honey'),1);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'

console.log(shoppingCart)

addItem(countries,'Ethiopia')

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)




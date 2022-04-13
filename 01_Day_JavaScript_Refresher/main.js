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

console.log(fullStack);

const ages = [ 19, 22, 19, 24, 20, 25, 26, 24, 25, 24 ]

const sortedAges = ages.sort((a,b) => a - b );
console.log(sortedAges[ 0 ],sortedAges[sortedAges.length - 1],(sortedAges[ 0 ] + sortedAges[sortedAges.length - 1 ] )/ 2 )

console.log(countries.slice( 0, 10 ))

countries.length % 2 === 0  ?
    countries.slice( 0,countries.length / 2 )
 :
    countries.push('Turkey')
    countries.slice( 0,countries.length / 2 )


console.log(countries.slice( 0,6 ),countries.slice( 6,12 ));

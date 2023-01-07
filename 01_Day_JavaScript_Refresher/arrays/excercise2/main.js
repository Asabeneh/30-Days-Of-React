// 1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file


const { countries } = require('./countries');
const { webTechs } = require('./web_Techs');

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people I teach HTML CSS JS React, Python'

text = text.split(' ')
// console.log(text)
// console.log(text.length)



// 3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffe', 'Tea', 'Honey']

if (shoppingCart[0] !== 'Meat') {
    shoppingCart.unshift('Meat')
}
if (shoppingCart[0] !== 'Sugar') {
    shoppingCart.push('Sugar')
}

const indexHoney = shoppingCart.indexOf('Honey')
shoppingCart.splice(indexHoney, 1)

const indexTea = shoppingCart.indexOf('Tea')
shoppingCart[indexTea] = 'Green Tea'

// console.log(shoppingCart)



// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// console.log(countries)

if (countries.indexOf('Ethiopia')) {
    // console.log('ETHIOPIA')
} else {
    countries.push('ETHIOPIA')
}



// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.indexOf('Sass')) {
    // console.log('Sass is a CSS preprocess')
} else {
    webTechs.push('Sass')
}


// 6. Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)
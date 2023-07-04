// Exercise 1 - Level 2

const countries = require('./countries.js');
const webTechs = require('./ web_techs.js');

const str = countries.toString()

const modifiedStr = str.replace(/[^\w]/g, ' ')

const newArray = modifiedStr.split(' ')

const numOfWords = newArray.length


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}

shoppingCart[3] = 'Green Tea'



if (!countries.includes('Ethiopia')) {
    countries.push('Ethiopia')
} else {
    console.log('Ethiopia')
}



if (!webTechs.includes('Sass')) {
    webTechs.push('Sass')
    console.log(webTechs)
} else {
    console.log('Sass is a CSS preprocess')
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
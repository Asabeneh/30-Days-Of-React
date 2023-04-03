const countries = require('./countries')
const webTechs = require("./web_techs")

console.log(countries)
console.log(webTechs)


let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace('/[,]+/g', ' ').split(' ')

console.log(words)
console.log(words.length)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.includes('Meat') ? '' : shoppingCart.push('Meat')
shoppingCart.includes('Sugar') ? '' : shoppingCart.push('Sugar')



let alergic = true
if (alergic) {
  let index = shoppingCart.indexOf('Honey')
  shoppingCart.splice(index, 1)
}


if (countries.includes('Ethiopia')) {
  let index = countries.indexOf('Ethiopia')
  console.log(countries[index].toUpperCase())
} else {
  countries.push('Ethiopia')
}


if (webTechs.includes('Sass')) {
  console.log('Sass is a CSS preprocess')
} else {
  webTechs.push('Sass')
  console.log(webTechs)
}


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = [...frontEnd, ...backEnd]
console.log(fullStack)

const countries = require('./countries')
const webTechs = require('./web_techs.js')


let text = 'I love teaching and empowering people I teach HTML CSS JS React Python'

const text_arr = text.split(" ")
console.log(text_arr + "\n" + text_arr.length)

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart.pop()
shoppingCart[3] = "Green Tea"
shoppingCart.push("Sugar")


let num = countries.indexOf("Ethiopia")

if (num = -1) {
    countries.push("ethiopia")
    console.log(countries)
}
else{
    console.log("ETHIOPIA")
}


let tech_num = webTechs.indexOf("Sass")


if (tech_num = -1){
    webTechs.push("Sass")
    console.log(webTechs)
}
else{
    console.log("Sass is a css process")
}


const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)
import countries from "./countries.js"
import webTechs from "./web_techs.js"

console.log("%c LEVEL 2", "color:red;font-size:50px;")

// 1
console.log(countries)
console.log(webTechs)
// 2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replaceAll(".", "").replaceAll(",", "").split(" ")
console.log(words)
console.log(words.length)
// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (!shoppingCart.includes("Meat")) shoppingCart.unshift("Meat")
console.log(shoppingCart)

if (!shoppingCart.includes("Sugar")) shoppingCart.push("Sugar")
console.log(shoppingCart)

let allergicToHoney = true
if (allergicToHoney) shoppingCart.splice(shoppingCart.indexOf("Honey"), 1)
console.log(shoppingCart)

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea"
console.log(shoppingCart)
// 4
if (countries.includes("Ethiopia")) console.log("ETHIOPIA")
else countries.push("Ethiopia")
// 5
if (webTechs.includes("Sass")) console.log("Sass us a CSS oreoricess")
else {
    webTechs.push("Sass")
    console.log(webTechs)
}
// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
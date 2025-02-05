import webTechs from "./web_techs.mjs";
import countries from "./countries.mjs";

// console.log(webTechs)
// console.log(countries)

let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

  let words = text.split(" ") 
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(shoppingCart[0]!="Meat"){
    shoppingCart.unshift("Meat")
}console.log(shoppingCart)

if(shoppingCart[shoppingCart.length-1]!="Sugar"){
    shoppingCart.push("Sugar")
}console.log(shoppingCart)


const Allergy = true

if(Allergy==true){
    let i = shoppingCart.indexOf('Honey')
    shoppingCart.splice(i,1)
}console.log(shoppingCart)

let index = shoppingCart.indexOf('Tea')
shoppingCart[index] = 'Green Tea'
console.log(shoppingCart)

if(countries.includes("Ethiopia")){
    console.log("ETHIOPIA")
}else{
    countries.push('Ethiopia')
}

if(webTechs.includes('Sass')){
    console.log("sass is a css preprocessor")
}else{
    webTechs.push("Sass")
}console.log(webTechs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
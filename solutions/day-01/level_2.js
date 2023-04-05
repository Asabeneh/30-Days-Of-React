import countries from "./modules/countries.js";
import web_techs from "./modules/web_techs.js";

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let textToSplitPeriod = text.split('.')
let textToString = textToSplitPeriod.toString();
let textTosplitComma = textToString.split(',');
textToString = textTosplitComma.toString();
let words = textToString.split(' ');
console.log('words:', words);
console.log(words.length);

const shoppingCart = [
    'Milk', 'Coffee', 'Tea', 'Honey'
];


for (let i = 0; i < shoppingCart.length; i++) {
    if (!shoppingCart.includes("Meat")) {
        shoppingCart.unshift('Meat');
    }
    if (!shoppingCart.includes("Sugar")) {
        shoppingCart.push("Sugar")
    }
    if (shoppingCart[i] == "Tea") {
        shoppingCart[i] = "Green Tea"
    }
}
console.log(shoppingCart);

countries.forEach(country => {
    if (country == "Ethiopia") {
        console.log(country);
    } else {
        countries.push("Ethiopia");
    }
});

web_techs.forEach(tech => {
    if (tech == "Sass") {
        console.log("Sass is a CSS preprocess");
    } else if (!web_techs.includes("Sass")) {
        web_techs.push("Sass");
    }
});
console.log(web_techs);

const frontEnd = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
// Array Exercise - Level 2

import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

console.log("hiii");

console.log(webTechs.toString());
console.log(webTechs.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
console.log(shoppingCart);

shoppingCart.push("Sugar");
console.log(shoppingCart);

shoppingCart.splice(4, 1);
console.log(shoppingCart);

shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

let countryTester = (country) => {
  countries.includes(country)
    ? console.log(country.toUpperCase())
    : (countries.push(country), console.log(countries));
};

countryTester("Greece");
countryTester("South Africa");
countryTester("Ethiopia");

let webTechChecker = (tech) => {
  webTechs.includes(tech)
    ? console.log(tech.toString("Sass is a CSS preprocess"))
    : (webTechs.push(tech), console.log(webTechs));
};

webTechChecker("Sass");

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = [frontEnd, backEnd];

console.log(fullStack);

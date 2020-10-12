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

// Exercise - Level 3

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());

const sum = ages.reduce((total, x) => total + x);
const len = ages.length;
console.log(sum / len); // average

const mid = Math.ceil(len / 2);

const median = len % 2 == 0 ? (ages[mid] + ages[mid - 1]) / 2 : ages[mid - 1];

console.log(median); // median

const minIndex = ages[0];
const maxIndex = ages[9];

console.log(maxIndex - minIndex);

console.log(Math.abs(minIndex - sum / len));
console.log(Math.abs(maxIndex - sum / len));

console.log(countries.slice(0, 10));

countries.pop();

if (countries.length % 2 != 0) {
  console.log("odd");
  countries.push("Sweden");
  console.log(countries.slice(0, countries.length / 2));
  console.log(countries.slice(countries.length / 2));
} else {
  console.log("even");
  console.log(countries.slice(0, countries.length / 2));
  console.log(countries.slice(countries.length / 2));
}

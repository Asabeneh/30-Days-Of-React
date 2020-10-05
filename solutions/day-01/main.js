import { countries } from "countries.js";
import { webTech } from "web_tech.js";

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.split(" ,.");
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.includes("Meat") ? () => {} : shoppingCart.unshift("Meat");
shoppingCart.includes("Sugar") ? () => {} : shoppingCart.push("Sugar");
shoppingCard.splice(2, 1, "Green Tea");

const country = countries.indexOf("Ethiopia");
if (country > 0) {
  console.log(countries[country].toUpperCase());
} else {
  countries.push("Ethiopia");
}

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontend.concat(backend);

console.log(fullStack);

console.log(countries.slice(0, 10));
console.log(countries[Math.trunc(countries.length / 2)]);

const fhCountries = countries.splice(0, Math.round(countries.length / 2));

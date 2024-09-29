// Exercise: Level 2
console.log("Exercise: Level 2");

// Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file

import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

// First remove all the punctuations and change the string to array and count the number of words in the array

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let textArray = text.replace(/[^\w\s]|_/g, "").split(" ");
let textCount = textArray.length;
console.log(textArray);
console.log(textCount);
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

// 13
// In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
// add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes("Meat")) shoppingCart.unshift("Meat");

// add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes("Sugar")) shoppingCart.push("Sugar");

// remove 'Honey' if you are allergic to honey
if (shoppingCart.includes("Honey"))
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);

// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [...frontEnd, ...backEnd];

console.log(fullStack);
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// Exercise: Level 3
// The following is an array of 10 students ages: js
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// - Sort the array and find the min and max age
ages.sort((a, b) => a - b);
console.log(ages);
// - Find the median age(one middle item or two middle items divided by two)
const middleIndex = Math.floor(ages.length / 2);
const medianAge =
  ages.length % 2 !== 0
    ? ages[middleIndex]
    : (ages[middleIndex - 1] + ages[middleIndex]) / 2;

console.log(medianAge);
// - Find the average age(all items divided by number of items)
const sumOfAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumOfAges / ages.length;
console.log(averageAge);

// - Find the range of the ages(max minus min)
const rangeOfAges = Math.max(...ages) - Math.min(...ages);
console.log(rangeOfAges);

// - Compare the value of (min - average) and (max - average), use abs() method
const minAvgDiff = Math.abs(Math.min(...ages) - averageAge / ages.length);
const maxAvgDiff = Math.abs(Math.max(...ages) - averageAge / ages.length);
console.log(minAvgDiff);
console.log(maxAvgDiff);

// 1.Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));

// Find the middle country(ies) in the countries array
const middleIndexC = Math.floor(countries.length / 2);
console.log(middleIndexC);

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const firstHalf = countries.slice(0, middleIndexC + (countries.length % 2));
const secondHalf = countries.slice(middleIndexC + (countries.length % 2));
console.log(firstHalf);
console.log(secondHalf);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);
console.log(numbers[0], numbers[2], numbers[4]);
const mixedDataTypes = [
  [1, 2, 3, 4, 5],
  ["apple", "banana"],
  ["tomato", "ginger"],
  ["milk", "egg"],
  [2, 3, 4, 5, 6],
];
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies.length);
//2
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
shoppingCart.splice(4, 1);
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);
//3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
const minAge = ages[0];
const maxAge = ages.length - 1;
const middleIndex = ages.length / 2;
let median;
if (ages.length % 2 === 0) {
  median = ages[middleIndex - 1] + ages[middleIndex] / 2;
} else {
  median = ages[middleIndex] / 2;
}
console.log(median);

const totalAge = ages.reduce((acc, current) => acc + current, 0);
const averaAge = totalAge / ages.length;

console.log(averaAge);

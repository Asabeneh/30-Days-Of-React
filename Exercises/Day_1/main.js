// First remove all the punctuations and change the string to array and count the number of words in the array
// let text =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13
let text =
	"I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

text.replace(/[.,]/g, "");

const words = text.split(" ");

console.log(words);

// In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (shoppingCart[0] != "Meat") shoppingCart.unshift("Meat");

if (shoppingCart[shoppingCart.length - 1] != "Sugar")
	shoppingCart.push("Sugar");

const HoneyIndex = shoppingCart.indexOf("Honey");
if (HoneyIndex != -1) shoppingCart.splice(HoneyIndex, 1);

const TeaIndex = shoppingCart.indexOf("Tea");
if (TeaIndex != -1) shoppingCart[TeaIndex] = "Green Tea";

console.log(shoppingCart);

// The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sortedAges = ages.sort();

const minAge = ages[0];

const maxAge = ages[ages.length - 1];

const middleIndex = Math.floor(sortedAges.length / 2);

const medianAge =
	sortedAges.length % 2 === 0
		? (sortedAges[middleIndex - 1] + sortedAges[middleIndex]) / 2
		: sortedAges[middleIndex];

const averageAge = ages.reduce((total, age) => total + age) / ages.length;

const rangeOfAges = maxAge - minAge;

const minDiffFromAverage = Math.abs(minAge - averageAge);

const maxDiffFromAverage = Math.abs(maxAge - averageAge);

console.log(
	sortedAges,
	minAge,
	maxAge,
	medianAge,
	averageAge,
	rangeOfAges,
	minDiffFromAverage,
	maxDiffFromAverage
);

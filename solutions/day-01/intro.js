// file is external source to index.html 
// last thing in body
console.log('hello challenge');
// variables declared with let or var can be changed
let firstName = 'LSMarch';
firstName = 'greatest';
var lastName = 'Hacker';
lastName = 'ever';
console.log(`${firstName} ${lastName}`);
// variables declared with const cannot be changed
const PI = 3.14159;
// this won't diplsay and it errors out
//PI = 3.14;
console.log(PI);

const numbers = [0, 3, 6, 9, 12]; // array of numbers
const fruits = ['banana', 'apple', 'peach', 'orange']; // array of strings
// print array and it's length
console.log('Numbers:', numbers);
console.log('Number of numbers:', numbers.length);
console.log('Fruits:', fruits);
console.log('Number of fruits:', fruits.length);
// an array can have values of different types
const array = [
    'LSMarch',
    3,
    false,
    { make: 'Chevy', model: 'Prism' },
    { skills: ['HTML', 'JavaScript', 'CSS', 'React', 'Java', 'Angular'] }
];
console.log(array);

let js = 'JavaScript'
// splits js into an array at each character
const charactersInJavaScript = js.split('');
console.log('Split a string:', charactersInJavaScript);
let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// splits string at comma and returns array
const companies = companiesString.split(',');
console.log('Split a string at ",":', companies);
// can access each element in an array by their index.
// array index starts at 0
let firstFruit = fruits[0];
console.log("Call value at index 0 in fruits array", firstFruit);
let secondFruit = fruits[1];
console.log("Call value at index 0 in fruits array", secondFruit);
// last index can be be accessed as...
let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];
console.log("Call value at last index of fruits array", lastFruit);
// arrays are mutable and we can modify it
numbers[0] = 99;
numbers[1] = 120;
console.log("Modified numbers array:", numbers);
// methods to manipulate an array
const arr = Array();
// just an empty array
console.log("array created using Array constructor", arr);
const eightEmptyValues = Array(8);
console.log("Array of 8 indexes with constructor:", eightEmptyValues);
// creates an array iwth 8 element values with 'X'
const eightXValues = Array(8).fill('X');
console.log("Array of 8 indexes with value of 'X' with constructor:", eightXValues);
// concatenating two arrays
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log("Concacted firstList and secondList:", thirdList);
// .length returns the length of the array
// indexOf return index of an element
console.log("Shows index of array element:", numbers.indexOf(12));
// if element is not in array returns -1
console.log("Shows index of array element:", numbers.indexOf(22));
// checking to see if something is in an array
let index = fruits.indexOf('apple');
if (index != -1) {
    console.log('This fruit is in the array');
} else {
    console.log('This fruit is not in the array');
}
// can also use ternary
index != -1 ? console.log('This fruit is in the array') : console.log('This fruit is not in the array')
let indexofAvocado = fruits.indexOf('avocado');
indexofAvocado != -1 ? console.log('This fruit is in the array') : console.log('This fruit is not in the array');
// lastIndexOf gives the index of the last item in the array
const newNums = [1, 2, 3, 4, 5, 3, 1, 2];
console.log('Last index of value in newNums:', newNums.lastIndexOf(2));
console.log('Last index of value in newNums:', newNums.lastIndexOf(6));
console.log('Last index of value in newNums:', newNums.lastIndexOf(1));
// include checks if element is in array and returns boolean
console.log('4 is in the number array:', numbers.includes(4));
console.log('9 is in the numbers array:', numbers.includes(9));
// Array.isArray checks to see if value is indeed an array
console.log('Numbers is an array:', Array.isArray(numbers));
const number = 100;
console.log('Number is an array', Array.isArray(number));
//toString converts array to string (no spaces)
console.log("Numbers array as string", numbers.toString());
// join is used to join elements to array. Argument passed will be joined
// in the array and return as a string;
const webTechs = ['HTML', 'JavaScript', 'CSS', 'React', 'Java', 'Angular'];
console.log("Joins webTechs array with comma and space", webTechs.join(', '));
// slice cuts out multiple items in a range. Takes 2 arguments,
// starting and ending posiion, excludes ending position
console.log("Slice():", numbers.slice());
console.log("Slice(0)", numbers.slice());
console.log("Slice(0, numbers.length)", numbers.slice(0, numbers.length));
console.log("Slice(1, 4", numbers.slice(1, 4));
// splice takes 3 arguments, starting position, number of items to be removed,
// and number of items to be added
const moreNumbers = [1, 2, 3, 4, 5, 6];
moreNumbers.splice()
console.log("Splice() removes all itmes:", moreNumbers.splice());
//moreNumbers.splice(0, 1)
console.log("Splice(0, 1) removes first item:", moreNumbers);
moreNumbers.splice(3, 3, 7, 8, 9)
console.log("removes 3 items and replaces 3 items", moreNumbers);
// push() adds to the end of an existing array
moreNumbers.push(10);
console.log("Push:", moreNumbers);
// pop() removes 1 item from the end of the array
moreNumbers.pop();
console.log("Pop:", moreNumbers);
// shift() removes 1 from the beginning of the array
moreNumbers.shift();
console.log("Shift:", moreNumbers);
// unshift() add to the beginning of the array
moreNumbers.unshift(1);
console.log("Unshift:", moreNumbers);
// reverses the order of the array
moreNumbers.reverse();
console.log("Reverse:", moreNumbers);
// sore() arranges array elements in ascending order. 
webTechs.sort();
console.log("Sort:", webTechs);
// Array of arrays
const frontEnd = ["HTML", "CSS", "JavaScript", "Angular", "React", "Redux"];
const backEnd = ["Node", "Express", "SQL", "MongoDB", "Java", "Spring Boot"];
const fullStack = [frontEnd, backEnd];
// returns an array with 2 arrays
console.log("Array in array:", fullStack);
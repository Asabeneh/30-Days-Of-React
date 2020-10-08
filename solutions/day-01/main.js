let firstName = 'Derrek'
firstName = 'Deek'
console.log("first name is " + firstName)
const PI = 3.14 // Not allowed to reassign PI to a new value
// PI = 3.

const arr = [
    'Derrek',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
  ] // arr containing different data types
  console.log(arr)

const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yogurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)


let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

const fruity = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruity[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

secondFruit = fruity[1]
console.log(secondFruit) // orange

let lastFruit = fruity[3]
console.log(lastFruit) // lemon
// Last index can be calculated as follows

let lastIndex = fruity.length - 1
lastFruit = fruity[lastIndex]

console.log(lastFruit) // lemon

const numbersArr = [0, 3.14, 9.81, 37, 98.6, 100] // set of numbersArr

console.log(numbersArr.length) // => to know the size of the array, which is 6
console.log(numbersArr) // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbersArr[0]) //  -> 0
console.log(numbersArr[5]) //  -> 100

let lastInd = numbersArr.length - 1
console.log(numbersArr[lastInd]) // -> 

const webTechno = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ] // List of web technologies
  
console.log(webTechno) // all the array items
console.log(webTechno.length) // => to know the size of the array, which is 7
console.log(webTechno[0]) //  -> HTML
console.log(webTechno[6]) //  -> MongoDB
  
let last = webTechno.length - 1
console.log("last array element is " +webTechno[last])
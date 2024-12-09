console.log('Welcome to 30DaysOfJavaScript')

// const fruits = ['banana', 'orange', 'mango', 'lemon'] 
// let firstFruit = fruits[0]
// let lastFruit = fruits[3]

// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)
// console.log(firstFruit)
// console.log(lastFruit)

// const groceryStore = ['Tjs', 'Walmarts', 'Aldis', 'Krogers']
// let firstgrocery = groceryStore[0]

// console.log(firstgrocery)

// const numbers = [1, 2, 3, 4, 5]
// numbers[0] = 10
// numbers[1] = 20

// console.log(numbers)
// Modifying array element
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ]
//   countries[0] = 'Afghanistan'
  
//   let lastIndex = countries.length - 1
//   countries[lastIndex] = 'Korea'
//   console.log(countries)

//   Methods to manipulate array
// const arr = Array()
// console.log(arr)

// const eightEmptyValues = Array(8)
// console.log(eightEmptyValues)

// Creating static values with fill
// const arr = Array()
// console.log(arr)

// const eightXvalues = Array(8).fill('X')
// console.log(eightXvalues)

// const eight0values = Array(8).fill(0)
// console.log(eight0values)

// const four4values = Array(4).fill(4)
// console.log(four4values)

// Concatenating array using concat
// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList = firstList.concat(secondList)

// console.log(thirdList)

// const fruits = ['banana', 'orange', 'mango']
// const vegetable = ['carrot', 'potato', 'onion']
// const fruitsAnDVegetables = fruits.concat(vegetable)

// console.log(fruitsAnDVegetables)

// Getting array length
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.length) // -> 5 is the size of the array


// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits.indexOf('banana') //0

// if(index != -1) {
//     console.log('this fruit does exsist in the array')
// } else {
//     console.log('this fruit does not exsist in the array')
// }

// let indexOfAvocado = fruits.indexOf('avocado')
//  if(indexOfAvocado != -1){
//     console.log('this fruit does exsist in the array')
//  } else {
//     console.log('this fruit does not exsist in the array')
//  }

//  Getting last index of an element in array
// const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

// console.log(numbers.lastIndexOf(2))
// console.log(numbers.lastIndexOf(0))
// console.log(numbers.lastIndexOf(1))
// console.log(numbers.lastIndexOf(4))
// console.log(numbers.lastIndexOf(6))

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.includes(5))
// console.log(numbers.includes(0))
// console.log(numbers.includes(3))

// const webTechs = [
//     'html',
//     'css',
//     'js',
//     'node',
//     'mongodb',
// ]

// console.log(webTechs.includes('node'))
// console.log(webTechs.includes('c'))

// Checking array Array.isArray:To check if the data type is an array
// const numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers))

// const number = 100
// console.log(Array.isArray(number))

// slice array elements
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.slice())
// console.log(numbers.slice(1, 4))

// Adding item to an array using push

// const arr = ['item1', 'item2', 'item3']
// arr.push('new item')

// console.log(arr)

// const numbers = [1, 2, 3, 4, 5]
// numbers.pop(5)

// console.log(numbers)

// Array of arrays
// const firstNums = [1, 2, 3]
// const secondNums = [1, 4, 9]

// const arrayOfArray = [
//     [1, 2, 3],
//     [1, 4, 9],
// ]

// console.log(arrayOfArray[0])
// console.log(arrayOfArray[1])

// const fronEnd = ['html', 'js', 'css']
// const backEnd = ['node', 'sql']

// const fullStack = [
    
//     [fronEnd],
//     [backEnd]
// ]

// console.log(fullStack)
// console.log(fullStack[0])
 
// Declare an empty array;
// const arr = Array()
// console.log(arr)

// // Declare an array with more than 5 number of elements 2-4
// const countries = ['US', 'Mexico', 'Guatemala', 'UK', 'Ireland', 'Canada']
// console.log(countries.length)
// console.log(countries[0])
// console.log(countries[3])
// console.log(countries[5])

// const mixedDataTypes = [
//     'bill',
//     'billard',
//     34,
//     1986,
//     'bobbillard0@gmail.com',
//     1234567

// ]

// console.log(mixedDataTypes.length)

// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]
// console.log(itCompanies)
// console.log(itCompanies.length)
// console.log(itCompanies[0])
// console.log(itCompanies[3])
// console.log(itCompanies[6])

// itCompanies[0] = 'FACEBOOK'
// itCompanies[1] = 'GOOGLE'
// itCompanies[2] = 'MICROSOFT'
// itCompanies[3] = 'APPLE'
// itCompanies[4] = ' IBM'
// itCompanies[5] = 'ORACLE'
// itCompanies[6] = 'AMAZON'

// console.log(itCompanies)

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
  }
  
  // Example usage:
  console.log(fullName('John', 'Doe'));  // Output: John Doe
  
let num1 = 1
let num2 = 2
function addNumbers(){
    return num1 + num2
}

console.log(addNumbers())

// Question 4

function areaOfCircle(r) {
    return Math.PI * r * r;
}
let radius = 5;
let area = areaOfCircle(radius);
console.log("Area of the circle:", area)

// Question 5

function convertCelciusToFahrenheit(celsius){
    return (celsius * 9 / 5) + 32;
}

let celsius = 25;
let fahrenheit = convertCelciusToFahrenheit(celsius);
console.log(celsius + "°C is equal to " + fahrenheit + "°F")

// Question 6

function bmiCalculate(weight, height) {
    return weight / (height * height);
   
}
 function categorizebmi(height, weight) {
    let bmi = bmiCalculate(weight, height)

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese"
    }
 }
let weight = 18.5;
let height = 1.40;
let bmi = bmiCalculate(weight, height);
console.log("your BMI is:", bmi)

let category = categorizebmi(weight, height);
console.log("This is considered:", category);


// Question 6 (1)

function checkSeason(month) {
    month = month.toLowerCase();

    if(['december', 'january', 'ferbuary'].includes(month)) {
        return 'Winter'
    };
    if (['march', 'april', 'may'].includes(month)) {
        return 'Spring'
    };
    if(['june', 'july', 'august'].includes(month)) {
        return 'Summer'
    };
    if(['september', 'october', 'november'].includes(month)) {
        return 'Autumn'
    } else {
        return 'Invalid Month'
    };
}

console.log(checkSeason("october"))



// Exercises: Level 2
// 1
function solveQuadraticEquation() {
    return ax
}
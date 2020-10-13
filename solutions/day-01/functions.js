function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
function addTwoNumbers(num1, num2) {
    return num1 + num2
}

function printFullName() {
    let firstName = 'Derrek'
    let lastName = 'Gass'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
function areaOfCircle(radius) {
    let area = Math.PI * radius * radius
    return area
}
  
function square(side) {
    return side * side
}

let numbers = [10, 20, 30, 40, 50]
function sum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum
}

function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// arrow functions are shorter syntax (that's it)
// but also there is no arguments inside this type of function scope...
// also there is no usual "this" object binding
// but instead the this keyword always representd the object that defined the arrow function
// usually, this represents the object that calls the function
// but with arrow functions this represents the owner of the function
hello = () => "hello arrow function!"

// or it can pass variables

helloPerson = (val) => "hello " + val

// can even skip parenthesis

helloSimplified = val => "Hello " + val 

// sum all nums arrow function
const sumAllNumsArrow = (...args) => {
    let sum = 0
    for (const element of args) {
        sum += element
    }
    return sum
}

console.log("sum all nums with arrow function: " + sumAllNumsArrow(1, 2, 3, 4, 5, 6, 7))

const changeToUpper = (arr) => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}

console.log(changeToUpper(countries))

// default params, arrow function
const printNameFull = (firstName = 'Ivy', lastName = 'Graham') => `${firstName} ${lastName}`
console.log(printNameFull('Derrek', 'Gass'))
console.log(printNameFull())

function calcAge(birthYear, currentYear = 2020) {
    let age = currentYear - birthYear
    return age
}

console.log('Age: ', calcAge(1990))

function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N'
    return weight
}

console.log('Weight of object in Newtons: ', weightOfObject(110))
console.log('Weight of object in Newtons: ', weightOfObject(150))
console.log('Weight of object in Newtons (on Moon): ', weightOfObject(110, 1.62))

const greetings = (name = 'Derrek') => {
    let message = name + ', welcome to 30 days of JavaScript!'
    return message
}
console.log(greetings())
console.log(greetings('Ivy'))

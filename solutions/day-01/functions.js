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

const sumCallback = arr => {
    let sum = 0
    const callback = function (element) {
        sum += element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumCallback(numbers))

// further simplifying callback function usage
const sumCallback2 = arr => {
    let sum = 0
    arr.forEach(function (element) {
        sum+=element
    })
    return sum
}
console.log('simplified callback sum: ', sumCallback2(numbers))

// prints hello every two seconds
function sayHello() {
    console.log('Hello')
}
// setInterval(sayHello, 2000)

// wait 10 seconds then say hello bruh
function waitHello() {
    console.log('Hello Bruh')
}
setTimeout(waitHello, 10000)

// destructuring is a way to unpack arrays, objects... assigning to a distinct variable. 
//Good for writing reusable and clean code.

for (const num of numbers) {
    console.log(num)
}
for (const place of countries) {
    console.log(place)
}

const [one, two, three, four, five] = numbers
console.log(one, two, three, four, five)

const [...numage] = numbers
console.log(...numage)

const [alb, bol, ...rest] = countries
console.log(alb, bol, rest)
console.log(rest)


const rectangle = {
    width: 20,
    height: 10
}
// access width like...
// let width = rectangle.width
// or
// let width = rectangle[width]

// but with destructuring... and renaming variable names
let { width:w, height:h, perimiter = 2*w + 2*h, area =w*h} = rectangle
console.log(w, h, perimiter, area)

const props = {
    user: {
        firstName: 'Derrek',
        lastName: 'Gass',
        age: 30
    },
    post: {
        title: 'Destructuring and Spread',
        subtitle: 'ES6',
        year:  2020
    },
    skills: [
        'JS',
        'React',
        'Redux',
        'Node',
        'Python',
        'Java'
    ]
}
// can deconstruct one at a time like this: 
// const {user, post, skills} = props
// const {firstName, lastName, age} = user
// const {title, subtitle, year} = post
// const [skillOne, skillTwo, skillThree, skillFour, skillFive] = skills

// or all at the same time
const {
    user: { firstName, lastName, age },
    post: { title, subtitle, year },
    skills:[...skill]
} = props

const personDest = {
    ...props
}
// testing to see if we can drill down to user's first name
console.log(personDest.user.firstName)
console.log(personDest)


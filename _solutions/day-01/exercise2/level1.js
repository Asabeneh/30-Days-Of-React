// Exercise 2 - Level 1

let age = 34

if (age <18) {
    let years = 18 - age
    console.log(`You have ${years} years left until you can drive.`)
} else {
    console.log(`You are old enough to drive.`)
}


if (age > 29) {
    let years = age - 29
    console.log(`You are ${years} years older than me.`)
} else if (age === 29) {
    console.log(`You are the same age as me.`)
} else {
    let years = 29 - age
    console.log(`I am ${years} years older than you.`)
}


let a = 2
let b = 2

if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else if (a === b) {
    console.log(`${a} is equal to ${b}`)
} else {
    console.log(`${b} is greater than ${a}`)
}


let number = 10

if (number%2 === 0) {
    console.log(`${number} is even.`)
} else {
    console.log(`${number} is odd.`)
}
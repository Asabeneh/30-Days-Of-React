// Exercise 2 - Level 1

// 1. If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let age = 34

if (age <18) {
    let years = 18 - age
    console.log(`You have ${years} years left until you can drive.`)
} else {
    console.log(`You are old enough to drive.`)
}


// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you).

if (age > 29) {
    let years = age - 29
    console.log(`You are ${years} years older than me.`)
} else if (age === 29) {
    console.log(`You are the same age as me.`)
} else {
    let years = 29 - age
    console.log(`I am ${years} years older than you.`)
}


// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. 

let a = 2
let b = 2

if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else if (a === b) {
    console.log(`${a} is equal to ${b}`)
} else {
    console.log(`${b} is greater than ${a}`)
}


//4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let number = 10

if (number%2 === 0) {
    console.log(`${number} is even.`)
} else {
    console.log(`${number} is odd.`)
}
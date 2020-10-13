// Conditionals Exercise - Level 1

let legalAge = prompt("Enter age");
switch (true) {
  case legalAge >= 18:
    console.log("You are old enough to drive");
    break;
  case legalAge < 18:
    console.log(`Wait ${18 - legalAge} more years to drive`);
    break;
  default:
    console.log("Entered value was not a number");
}

let yourAge = 25;
let myAge = prompt("Enter your age");
if (myAge > yourAge) {
  console.log(`You are ${myAge - yourAge} years older than me`);
} else if (myAge < yourAge) {
  console.log(`You are ${yourAge - myAge} years younger than me`);
} else {
  console.log("Entered value was not a number");
}

let a = 4;
let b = 3;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

let anyNumber = prompt("Enter any number");
if (anyNumber % 2 === 0) {
  console.log(`${anyNumber} is an even number`);
} else {
  console.log(`${anyNumber} is an odd number`);
}

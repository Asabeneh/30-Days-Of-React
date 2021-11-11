//1
let age = prompt('Enter your age: ');
alert(
    age < 18 ?
        `You are left with ${18 - age} years to drive.` :
        'You are old enough to drive.'
);
//2
const myAge = 25;
alert(
    age > myAge ?
        `You are ${age - myAge} years older than me.` :
        age < myAge ?
            `I am ${myAge - age} years older than you.` :
            'We are at the same age'
);
//3
let a = 4
let b = 3
if (a > b) console.log(`${a} greater than ${b}`);
else console.log(`${b} greater than ${a}`);
console.log(a > b ? `${a} greater than ${b}` : `${b} greater than ${a}`);
//4
const num = prompt('Enter a number:');
alert((num & 1) == 0 ? `${num} is an even number.` : `${num} is an odd number.`);

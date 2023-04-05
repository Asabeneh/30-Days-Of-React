import countries from "./modules/countries.js";

const ages = [
    19,
    22,
    19,
    24,
    20,
    25,
    26,
    24,
    25,
    24
];

const sortedAges = ages.sort();
console.log("Min age:", sortedAges[0]);
console.log("Max age:", sortedAges[sortedAges.length - 1]);
console.log("Median age:", sortedAges[4] / 2);
const initialValue = 0;
const reducedAges = ages.reduce((previousValue, currentValue) =>
    previousValue + currentValue, initialValue);
console.log("Average age:", reducedAges / 2);
console.log("Age range:", sortedAges[sortedAges.length - 1] - sortedAges[0]);
const compareMin = (min, average) => {
    return Math.abs(min - average);
}
const compareMax = (max, average) => {
    return Math.abs(max - average);
}
console.log("Compare min:", compareMin(sortedAges[0], (reducedAges / 2)));
console.log("Compare max:", compareMax(sortedAges[sortedAges.length - 1], (reducedAges / 2)));

console.log(countries.slice());

if (countries.length % 2 != 0) {
    console.log('Middle countries:', countries[5], 'and', countries[6])
}

const firstHalf = [];
const secondHalf = [];
if ((countries.length - 6) % 2 != 0) {
    for (let i = 0; i < countries.length - 6; i++) {
        firstHalf.push(countries[i]);
    }
    for (let i = countries.length - 6; i < countries.length; i++) {
        secondHalf.push(countries[i])
    }
};
firstHalf.push("Italy")
console.log(firstHalf.length, firstHalf)
console.log(secondHalf.length, secondHalf)

let userAgeInput = prompt("Enter your age: ");
let userAge = parseInt(userAgeInput);
let myAge = 31;

switch (true) {
    case userAge > 16:
        console.log("You are old enough to drive")
        break;
    case userAge < 16:
        console.log(`"You must wait ${16 - userAge} years to drive`)
    default:
        break;
}

if (userAge < myAge) {
    console.log(`I am ${myAge - userAge} years older than you`)
} else {
    console.log(`You are ${userAge - myAge} years older than me`)
}

let a = 4;
let b = 3;

a < b
    ? console.log(`${a} is less than ${b}`)
    : console.log(`${b} is less than ${a}`)

switch (true) {
    case userAge % 2 == 0:
        console.log(`${userAge} is an even number`);
        break;
    case userAge % 2 != 0:
        console.log(`${userAge} is an odd number`);
        break;
    default:
        break;
}

let scoreInput = prompt('Score: ');
let studentScore = parseInt(scoreInput);
if (80 < studentScore && studentScore < 100) {
    console.log(`Student receives an A`)
} else if (70 < studentScore && studentScore < 89) {
    console.log(`Student receives a B`);
} else if (60 < studentScore && studentScore < 69) {
    console.log(`Student receives a C`);
} else if (50 < studentScore && studentScore < 59) {
    console.log(`Studnet receives a D`);
} else if (0 < studentScore && studentScore < 49) {
    console.log(`Student receives an F`);
}

let day = prompt('What is the day today?').toLowerCase();
switch (day) {
    case 'monday':
        console.log(`${day} is a working day`);
        break;
    case 'tuesday':
        console.log(`${day} is a working day`);
        break;
    case 'wednesday':
        console.log(`${day} is a working day`);
        break;
    case 'thursday':
        console.log(`${day} is a working day`);
        break;
    case 'friday':
        console.log(`${day} is a working day`);
        break;
    case 'saturday':
        console.log(`${day} is a weekend`);
        break;
    case 'sunday':
        console.log(`${day} is a weekend`);
        break;
    default:
        console.log(`Enter a valid day`);
        break;
}

const month = prompt("Enter a month: ").toLowerCase();
const leapYearInput = prompt("Is it a leap year?").toLocaleLowerCase();
if (leapYearInput == 'yes') {
    switch (month) {
        case 'january':
            console.log(`${month} has 31 days`);
            break;
        case 'feburary':
            console.log(`${month} has 29 days`);
            break;
        case 'march':
            console.log(`${month} has 31 days`);
            break;
        case 'april':
            console.log(`${month} has 30 days`);
            break;
        case 'may':
            console.log(`${month} has 31 days`);
            break;
        case 'june':
            console.log(`${month} has 30 days`);
            break;
        case 'july':
            console.log(`${month} has 31 days`);
            break;
        case 'august':
            console.log(`${month} has 31 days`);
            break;
        case 'september':
            console.log(`${month} has 30 days`);
            break;
        case 'october':
            console.log(`${month} has 31 days`);
            break;
        case 'november':
            console.log(`${month} has 30 days`);
            break;
        case 'december':
            console.log(`${month} has 31 days`);
            break;
        default:
            console.log(`Enter a month`);
            break;
    }
} else {
    switch (month) {
        case 'january':
            console.log(`${month} has 31 days`);
            break;
        case 'feburary':
            console.log(`${month} has 28 days`);
            break;
        case 'march':
            console.log(`${month} has 31 days`);
            break;
        case 'april':
            console.log(`${month} has 30 days`);
            break;
        case 'may':
            console.log(`${month} has 31 days`);
            break;
        case 'june':
            console.log(`${month} has 30 days`);
            break;
        case 'july':
            console.log(`${month} has 31 days`);
            break;
        case 'august':
            console.log(`${month} has 31 days`);
            break;
        case 'september':
            console.log(`${month} has 30 days`);
            break;
        case 'october':
            console.log(`${month} has 31 days`);
            break;
        case 'november':
            console.log(`${month} has 30 days`);
            break;
        case 'december':
            console.log(`${month} has 31 days`);
            break;
        default:
            console.log(`Enter a month`);
            break;
    }
}


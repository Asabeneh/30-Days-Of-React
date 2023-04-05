const exercise1_1 = [];
const exercise1_2 = [1, 2, 3, 4, 5, 6];

console.log(exercise1_2.length);

console.log(exercise1_2[0]);

console.log(exercise1_2[3]);

const lastIndex = exercise1_2.length - 1;
console.log(exercise1_2[lastIndex]);

const mixedDataTypes = [
    'LSMarch',
    5,
    { firstName: 'greatest', lastName: 'ever' },
    ['HTML', 'CSS', 'JavaScript'],
    45,
    'React'
];

const itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
];

console.log(itCompanies);
console.log("IT Companies Length:", itCompanies.length);
console.log("First company:", itCompanies[0]);
console.log("Middle Company:", itCompanies[4]);
console.log("Last Company:", itCompanies[itCompanies.length - 1]);

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i])
}

for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

console.log(itCompanies.join(', ') + " are big IT companies");

let checkCompany = itCompanies.indexOf('IBM');
checkCompany = -1
    ? console.log('IBM is in the array')
    : console.log('IBM is NOT in the array');

// for (let i = 0; i < itCompanies.length; i++) {
//     if (!itCompanies[i].includes('oo')) {
//         itCompanies.splice(3, i);
//     }
// }
//console.log(itCompanies);

//console.log(itCompanies.sort());
//console.log(itCompanies.reverse());

console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(4, 7));
console.log(itCompanies.slice(2, 5));
//console.log(itCompanies.splice(0, 1));
//console.log(itCompanies.splice(6, 1));
//console.log(itCompanies.splice(3, 1));
console.log(itCompanies.splice());
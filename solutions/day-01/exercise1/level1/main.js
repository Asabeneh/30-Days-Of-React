//1
let arr1 = [];
//2
let arr2 = [3, '0', 'Days', 'of', 'React', '!'];
console.log(arr2);
//3
const len2 = arr2.length
console.log('Length: ', arr2.length);
//4
console.log('First element:', arr2[0]);
console.log('Middle element:', arr2[Math.floor(len2 / 2 - 1)]);
console.log('Last element:', arr2.at(-1));
//5
const mixedDataTypes = [30, "this is a string", arr2, { msg: "this is a object" }, true, null, undefined, function () { console.log("Hi") }];
console.log(mixedDataTypes)
//6
const itCompanies = "Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon".split(/, | and /g);
//7
console.log(itCompanies);
//8
console.log(itCompanies.length);
//9
console.log("First: ", itCompanies[0]);
console.log("Middle: ", itCompanies[Math.floor(itCompanies.length / 2) - 1]);
console.log("Last: ", itCompanies.at(-1));
//10
console.log(itCompanies.join('\n'));
//11
console.log(itCompanies.map(company => company.toUpperCase()).join('\n'));
//12
console.log(itCompanies.slice(0, itCompanies.length - 1).join(', '), 'and', itCompanies.at(-1), 'are big IT companies.');
//13
const company = 'Huawei';
console.log(itCompanies.includes(company) ? company : 'not found');
//14
console.log(itCompanies.reduce((res, e) => e.lastIndexOf('o') != e.indexOf('o') ? [...res, e] : res, []));
//15
console.log(itCompanies.sort());
//16
console.log(itCompanies.reverse());
//17
console.log(itCompanies.slice(0, 3));
//18
console.log(itCompanies.slice(-3));
//19
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2) - 1, Math.floor(itCompanies.length / 2)));
//20
console.log(itCompanies.slice(1));
//21
console.log([
    ...itCompanies.slice(0, Math.floor(itCompanies.length / 2) - 1),
    ...itCompanies.slice(Math.floor(itCompanies.length / 2))
]);
//22
console.log(itCompanies.slice(0, itCompanies.length - 1));
//23
itCompanies.length = 0;
console.log(itCompanies);

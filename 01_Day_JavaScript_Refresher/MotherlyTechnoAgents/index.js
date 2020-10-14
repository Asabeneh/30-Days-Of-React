const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

// console.log(" ----- \n" + countries);

var empty = Array(6);

// console.log(countries[countries.length-countries.length]);

const half = Math.round((countries.length) / 2);
// console.log(countries[countries.length-half]);

// console.log(countries[countries.length-1]);

var mixedDataTypes = [
  "Melb",
  3006,
  50.00,
  ["A", "B", "C"],
  {
    "address": "100 Check St"
  },
  true
]
// console.log(mixedDataTypes);
// console.log(mixedDataTypes.length);

let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

let itCompanies = companies.split(", ");


let result = itCompanies.indexOf("ABC") != -1 ? itCompanies[itCompanies.indexOf("Apple")] : "company is not found";

var tmpArr = Array();
for (var i = 0; i < itCompanies.length; i++) {
  let O_Index = itCompanies[i].indexOf("o");
  let x = O_Index + 1;
  let tmpTxt = itCompanies[i].slice(x, itCompanies.length + 1);

  if (tmpTxt.indexOf("o") < 0) {
    tmpArr.push(itCompanies[i]);
  }

}
// console.log(tmpArr);
// console.log(tmpArr.slice(3));
// console.log(tmpArr.slice(0, 1));
// console.log(tmpArr);

let middle_index = Math.round((itCompanies.length - 1) / 2);

// console.log(itCompanies);
// console.log(itCompanies.slice(middle_index, middle_index + 1));

// splice changes the original array, 
// if we put this in log then it doesnt change
// original array
// if we assign it to another array 
// it still changes the original array
//itCompanies.splice(0, itCompanies.length);


console.log(itCompanies);


let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

words = text.replace(/[^A-Za-z0-9\s]/g,"").split(" ");

// console.log(words)
// console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

index = shoppingCart.indexOf("Meat");

index < 0 ? shoppingCart.unshift("Meat") : "";

// console.log(shoppingCart);
shoppingCart.push("Sugar")

honeyIndex = shoppingCart.indexOf("Honey");

shoppingCart.splice(honeyIndex, 1);
// console.log(shoppingCart);

teaIndex = shoppingCart.indexOf("Tea");
shoppingCart[teaIndex] = "Green Tea";
// console.log(shoppingCart);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

fullStack = frontEnd.concat(backEnd);

// console.log(fullStack)

// console.log(countries);
// console.log(countries.slice(0,4))

let first_half, second_half ;
if (!(countries.length % 2 == 0)) {
  countries.unshift("India");
} 

middle_index = ( countries.length / 2 ) - 1;

// console.log(countries);
// first_half = countries.slice(0, middle_index+1);
// console.log(first_half);

// second_half = countries.slice(middle_index+1, countries.length);
// console.log(second_half);

// var user = prompt("what is your name?");
// console.log("Hi ", user);

// for(c of countries) {
//   console.log(c);
// }

// for(c in countries) {
//   console.log(c);
// }

// countries.forEach((val, i, arr) => {
//   console.log(val + " | " + i );
// });


const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

let resul = {};
resul.hightest = 0; 
resul.numOfLoggedUsers = 0;
resul.pointsUsers = 0;
for ( u in users ) {
  skills = users[u].skills.length; 
  if (skills > resul.hightest) {
    resul.hightest = skills;
    resul.skilledUser = u;
  }
  if (users[u].isLoggedIn) {
    resul.numOfLoggedUsers += 1;
  }
  if (users[u].points >= 50) {
    resul.pointsUsers += 1;
  }

}

resul.mernUser = [];
for ( [key, value] of Object.entries(users)) {
    if (['MongoDB','Express','React','Node'].every(val => value.skills.includes(val))){
      resul.mernUser.push(key);
    }
  
}

// to get all keys
// const keys = Object.keys(copyPerson)


// const entries = Object.entries(users)
// console.log(entries)

let personAccount = {
  firstName: null,
  lastName: null,
  incomes: {
    "income": null,
    "description": null
  },
  expenses: {
    "income": null,
    "description": null
  },
  totalIncome: function(){},
  totalExpense: function(){},
  accountInfo: function(){},
  addIncome: function(){},
  accountBalance: function(){}
};

// array destructuring

const fullStac = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB'],
]

for (const [first, second, third, fourth] of fullStac) {
  console.log(first, second, third, fourth);
}


// react hooks stuff
const [x, y] = [2, (value) => value ** 2]

console.log(y(x));


// object destructuring

const rectangle = {
  width: 20,
  height: 10,
}

let { width, height } = rectangle



let someArr = ["sad","aSD","Asd"];

console.log(someArr.slice(0,someArr.length));
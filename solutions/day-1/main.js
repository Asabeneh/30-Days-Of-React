let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.split(' ');
console.log(words);
console.log(words.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

function modifyCart(cart, isAllergic) {
  for (let i = 0; i < cart.length; i++) {
    if (!cart.includes('Meat')) {
      cart.unshift('Meat');
    }
    if (!cart.includes('Sugar')) {
      cart.unshift('Sugar');
    }
  }

  if (cart.includes('Honey') && isAllergic === true) {
    cart.splice(cart.indexOf('Honey', 1));
  }

  console.log(shoppingCart);
}
modifyCart(shoppingCart, true);

let eth = countries.includes('Ethiopia');
if (eth === true) {
  console.log(countries[countries.indexOf('Ethiopia')].toUpperCase());
}

let sass = 'Sass';
if (webTechs.includes(sass)) {
  console.log(sass, ' is a preprocess');
} else {
  webTechs.push(sass);
  console.log(sass, ' is a preprocess');
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

function student(arr) {
  let sorted = arr.sort();
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] < min) {
      min = sorted[i];
    } else if (sorted[i] > max) {
      max = sorted[i];
    }
  }
  console.log(min, max);
  console.log('The age range between students is ', max - min);
}
student(ages);

let sorted = ages.sort();
let median = Math.floor(sorted[sorted.length / 2]);
console.log(median);

function arrSum(arr) {
  let sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  console.log('The average age is: ', sumWithInitial / arr.length);
}
arrSum(ages);

let middleCountry = countries[(countries.length - 1) / 2];
console.log(middleCountry);

// let myAge = 28;
// // let age = prompt('Enter you age!');
// console.log(age);
// switch (true) {
//   case age > myAge:
//     console.log('You are ', age - myAge, 'years older than me!');
//     break;
//   case age < myAge:
//     console.log('I am ', myAge - age, ' older than you.');
//     break;
// }

let a = 9;
let b = 30;
if (a > b) {
  console.log('a is greater than b');
} else {
  console.log('a is less than b');
}

a > b ? console.log('a is greater than b') : console.log('a is less than b');

function isEven(num) {
  if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
isEven(2);
isEven(99);

const dog = new Object({
  name: 'Polly',
  age: 3,
  color: 'tan',
  legs: 4,
  hasTail: true,
  bark: 'woof!',
});

dog.breed = 'rhodesian';
console.log(dog.name, dog.legs, dog.bark, dog.age, dog.breed);

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node',
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//declare max skill
let maxSkill = 0;
//declare mostskilledperson
let mostSkilled = '';
//for in loop to loop over users object
for (const user in users) {
  //check if user has skills property
  if (users.hasOwnProperty(user)) {
    let skillCount = users[user].skills.length;
    if (skillCount > maxSkill) {
      maxSkill = skillCount;
      mostSkilled = user;
    }
  }
}
console.log('Person with the most skills:', mostSkilled);

let loggedIn = 0;
for (const user in users) {
  if (users[user].isLoggedIn) {
    loggedIn++;
  }
}
console.log(`There are ${loggedIn} users logged in`);

let overFifty = 0;
for (const user in users) {
  if (users[user].points >= 50) {
    overFifty++;
  }
}
console.log(`${overFifty} people have fifty or more pts`);

let mern = ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'];
for (const user in users) {
  if (users[user].skills.every(mern)) {
    console.log('MERN dev!');
  } else {
    console.log('not a mern dev');
  }
}

//START HERE
//https://bobbyhadz.com/blog/javascript-check-if-multiple-values-exist-in-array

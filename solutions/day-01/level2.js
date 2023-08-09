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

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

/**
 * EXERCISE: LEVEL 2
 */

// 1. Create a separate countries.js file and store the countries array into this file, 
//    creata a separate file web_tech.js and store the web Techs Array into this file.
//    Access both file in main,js file

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.split(".").join("").split(" ");
// console.log(words);
// console.log(words.length);

// 3. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
/**
 * - add 'Meat' int eh beginning of your shopping cart if it has not been already added
 * - add Sugar at the end of your shopping car if it has not been already added
 * - remove 'Honey' if you are allergic to honey
 * - modify Tea to 'Green Tea'
 */

shoppingCart.unshift('Meat')
shoppingCart.push('Sugar');
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exist in the array if it exists print 'ETHIOPIA'. If it does not exist add
//    to the countries list
if (countries.includes("Ethiopia")) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}

// 5. In webTechs array check is Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
//    If it does not exist add Sass to the array and print the array
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}

// 6. Concatenate the following two variable and store it in a fullStack variable
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
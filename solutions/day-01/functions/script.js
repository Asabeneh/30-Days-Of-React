// Function with unlimited number of parameters
/* - A function declaration provides a function scoped arguments array like object. 
    Any thing we passed as argument in the function can be accessed from arguments 
    object inside the functions. Let us see an example*/

// function declaration
function sumAllNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.info(sumAllNums(10, 20, 13, 40, 10));  // 93


// Unlimited number of parameters in arrow function

/* - Arrow function does not have the function scoped arguments object. 
To implement a function which takes unlimited number of arguments in 
an arrow function we use spread operator followed by any parameter name. 
Any thing we passed as argument in the function can be accessed as array in 
the arrow function. Let us see an example*/

// Let us access the arguments object
const addAllNums = (...args) => {
// console.log(arguments), arguments object not found in arrow function
// instead we use an a parameter followed by spread operator
    console.log(args);
}
addAllNums(1, 2, 3, 4); // [1, 2, 3, 4]


// Self Invoking Functions
// - Self invoking functions are anonymous functions which do not need to be called to return a value.
(function (n) {
  console.log(n * n);
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
  return n * n;
})(10)
console.log(squaredNum);


// Function with default parameters
// - Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument 
// the default value will be used. Both function declaration and arrow function can have a default value or values.
function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
}
console.log(greetings());
console.log(greetings('Asabeneh'));


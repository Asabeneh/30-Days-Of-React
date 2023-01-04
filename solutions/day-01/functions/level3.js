//Skipped exercise 1 and 2



// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
let foodArray = ['Chicken', 'Rice', 'Butter', 'Salad'];
let shuffleArray = (...array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
console.log(shuffleArray(...foodArray));


// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(num){
    let total =  1;
    for(let i = 1; i <= num; i++){
        total = total * i;
    }
    return total;
}
console.log(factorial(5));


// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
let numbers = [1,2,3,4];
let isEmpty = (...array) => {  
    return (array.length == 0) ?  'Array is empty': 'Array is not empty'
}
console.log(isEmpty(...numbers))

// Write a function called average, it takes an array parameter and returns the average of the items. 
// Check if all the array items are number types. If not give return reasonable feedback.
let nums = [1,2,3,4,5,6];
let average = (...array) => {
    let message = '';
    let avg = 0;
    array.forEach(element => {
        return (typeof element == 'number') ? avg = (avg + element) : message = 'Error, an element of the array is not a number';
    });
    return (message.length > 0) ? message : avg / array.length;
}
console.log(average(...nums))
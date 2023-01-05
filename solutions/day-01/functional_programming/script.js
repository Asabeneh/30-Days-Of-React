// functional progamming allow for writing shorter and cleaner code. 
// You can also solve more complicated problems that are difficult to solve 
// via tradional methods

// 1. forEach
// -  use it to iterate through array of items. 
// -  use it if you are interested in each item or index or both.
const countries = ['Finland', 'Estonia', 'Sweden', 'Norway'];
countries.forEach((element, index, array) => {
    console.log(index, element.toUpperCase());
});

// 2. map
// use map method when we like to modify an array. 
// use only on arrays, and map method always returns an array
const cities = ['Austin', 'Houston', 'Dallas', 'Galveston', 'Lubbock'];
const uppercase = cities.map(element =>{
    return element.toUpperCase();
});
console.log(uppercase);

// 3. filter
// - used with arrays
// - returns and array of filtered items
const food = ['Pizza', 'Grapes', 'Cake', 'Milk', 'pasta' ,'Flour', 'Tea', 'Pumpkin'];
const filteredFood = food.filter(item => {
    return item.charAt(0) == 'P' || item.charAt(0) == 'p';
})
console.log(filteredFood);

// 4. reduce
// - used with arrays
// - returns a single value
// - used to sum all numbers in an array together, or contcate items, or multiply items, etc.
const nums = [10,2,16,9,55,6];
const sum = nums.reduce((a,b)=>{ return a+b});
console.log(sum);

// 5. find
// - looks for first occurence of a certain array element.
// returns first item that passes a test
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const found = numbers.find((element)=>{return element > 4 && element < 8});
console.log(found);

// 6. findIndex
// - works just like find() but returns index instead.
const alphabet = ['A','B','C','D','E','F'];
const index = alphabet.findIndex(element=>{return element == 'D'})
console.log(`D is at index ${index}`);

// 7. some
// - some method is with arrays and returns a boolean.
// - if one or some items satisfy criteria then return true else return false
const digits = [0,1,2,3,4,5,6,7,8,9,10];
const isEven = digits.some(element=>{return element % 2 === 0});
const isOdd = digits.some(element =>{return element % 2 !== 0});
console.log(`Array is even:`,isEven); //some values are even 
console.log(`Array is odd:`,isOdd); // some values are odd

// 8. every
// -  every method is with arrays and returns a boolean
// - is like some() methond BUT every item must statisfy the criteria
/* using for testing const digits = [0,1,2,3,4,5,6,7,8,9,10];*/
const isEven2 = digits.every(element=>{return element % 2 === 0});
const isOdd2 = digits.every(element =>{return element % 2 !== 0});
console.log(`Array is even:`,isEven2); // not every value is even 
console.log(`Array is odd:`,isOdd2); // not every value is odd
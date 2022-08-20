const array = [];
const arraOfNumbers = [1, 2, 3, 4, 5, 6];
let lengtharraOfNumbers = arraOfNumbers.length;
const firstItem = arraOfNumbers[0];
//Get the first item,
console.log(firstItem);
console.log(lengtharraOfNumbers);
//Get the middle item
let middleItem = lengtharraOfNumbers / 2;
console.log(middleItem);
//Get the last item
const [lastItem] = arraOfNumbers.slice(-1);
console.log(lastItem);
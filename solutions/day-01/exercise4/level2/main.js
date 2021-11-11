//1
function solveQuadratic(a, b, c) {
    const sqrt_d = Math.sqrt(b ** 2 - 4 * a * c);
    const x1 = (-b + sqrt_d) / (2 * a);
    const x2 = (-b - sqrt_d) / (2 * a);
    return !x1 ? [0] : x1 == x2 ? [x1] : [x1, x2];
}
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}
//2
function printArray(arr) {
    console.log(arr.join('; '))
}
printArray([2, 2, 8, 2.5, 5.7, 9]);
//3
function convertTo2Digits(n) {
    return n < 10 ? '0' + n : n;
}
function showDateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return console.log(
        convertTo2Digits(day) +
        '/' + convertTo2Digits(month) +
        '/' + year +
        ' ' + convertTo2Digits(hours) +
        ':' + convertTo2Digits(minutes)
    );
}
showDateTime();
//4
var x = 3;
var y = 4;
function swapValues(a, b) {
    [a, b] = [b, a];
    console.log(a, b);
}
swapValues(x, y);
//5
function reverseArray(arr) {
    const res = [];
    for (let i = arr.length - 1; i >= 0; i--) res.push(arr[i]);
    return res;
}
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
//6
function capitalizeArray(arr) {
    return arr.map(v => v.toUpperCase());
}
console.log(
    'Capitalize: ',
    capitalizeArray(['V', 'y', 'v', 'U'])
);
//7
function addItem(arr, item) {
    arr.push(item);
    return arr;
}
console.log(
    'Add item: ',
    addItem([3, 4, 5, 7], 10)
);
//8
function removeItem(arr, item) {
    return arr.filter(v => v != item);
}
console.log(
    'Remove item: ',
    removeItem([3, 4, 5, 7], 7)
);
//9
function evensAndOdds(n) {
    return [Math.floor(n / 2) + 1, n - Math.floor(n / 2)];
}
console.log(
    '[Number of evens, Number of odds]: ',
    evensAndOdds(100)
);
//10
function sum(...list) {
    return list.reduce((res, e) => res += e, 0);
}
console.log(
    'Sum: ',
    sum(1, 2, 3), // -> 6
    sum(1, 2, 3, 4) // -> 10
);
//11
function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function randomRanges(...ranges) {
    const range = ranges[random(0, ranges.length - 1)];
    return random(range.min, range.max);
}
function userIdGenerator() {
    return String.fromCharCode(
        ...Array.from({ length: 7 }, randomRanges(
            {
                min: '0'.charCodeAt(0),
                max: '9'.charCodeAt(0)
            },
            {
                min: 'a'.charCodeAt(0),
                max: 'z'.charCodeAt(0)
            },
            {
                min: 'A'.charCodeAt(0),
                max: 'Z'.charCodeAt(0)
            },
        ))
    );
}
console.log(
    'User Id: ',
    userIdGenerator()
)

const countries = require('./countries.js').countries;
const webTechs = require('./web_techs.js').webTechs;

Array.prototype.max = function() {
    this.sort();
    return this[this.length - 1];
}

Array.prototype.min = function() {
    this.sort();
    return this[0];
}

Array.prototype.median = function() {
    this.sort();
    const middle = Math.floor(this.length/2);

    if (this.length % 2 == 1) {
        return this[middle];
    }

    return (this[middle] + this[middle + 1]) / 2;
}

Array.prototype.sum = function() {
    let result = 0;
    
    this.forEach(val => {
        result += val;
    });
    
    return result;
}

Array.prototype.average = function() {
    return this.sum()/this.length;
}

Array.prototype.range = function() {
    return this.max() - this.min();
}

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log("max:", ages.max(), "min:", ages.min());
console.log("median", ages.median());
console.log("average", ages.average());
console.log("range", ages.range());
console.log("lower", Math.abs(ages.min() - ages.average()), "higher", Math.abs(ages.max() - ages.average()));

const firstTen = countries.slice(0, 10);
console.log(firstTen);
console.log(countries.median());

let firstHalf;
let secondHalf;

if (countries.length % 2 == 0) {
    firstHalf = countries.slice(0, countries.length / 2);
    secondHalf = countries.slice(countries.length/2, countries.length);
} else {
    countries.unshift("Country");
}

console.log(firstHalf, secondHalf);
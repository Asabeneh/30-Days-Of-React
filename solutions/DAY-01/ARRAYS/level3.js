const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age (one middle item or two middle items divided by two)
const middleIndex = Math.floor(ages.length / 2);
const medianAge = ages.length % 2 === 0 ? (ages[middleIndex - 1] + ages[middleIndex]) / 2 : ages[middleIndex];

// Find the average age (all items divided by number of items)
const sumOfAges = ages.reduce((total, age) => total + age, 0);
const averageAge = sumOfAges / ages.length;

// Find the range of the ages (max minus min)
const ageRange = maxAge - minAge;

// Compare the value of (min - average) and (max - average), use abs() method
const diffMinAverage = Math.abs(minAge - averageAge);
const diffMaxAverage = Math.abs(maxAge - averageAge);

console.log(`Sorted array of ages: ${ages}`);
console.log(`Minimum age: ${minAge}`);
console.log(`Maximum age: ${maxAge}`);
console.log(`Median age: ${medianAge}`);
console.log(`Average age: ${averageAge}`);
console.log(`Age range: ${ageRange}`);
console.log(`Absolute difference between minimum age and average age: ${diffMinAverage}`);
console.log(`Absolute difference between maximum age and average age: ${diffMaxAverage}`);



const firstTenCountries = countries.slice(0, 10);
const midd = Math.floor(countries.length / 2);
const middleCountry = countries[midd];


const halfLength = Math.ceil(countries.length / 2);
const firstHalf = countries.slice(0, halfLength);
const secondHalf = countries.slice(halfLength);

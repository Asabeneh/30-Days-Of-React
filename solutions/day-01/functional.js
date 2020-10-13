countries.forEach(function (country, i, arr) {
    console.log(i, country.toUpperCase())
})

countries.forEach((country, i) => console.log(i, country.toUpperCase()))

const newCountries = []

countries.forEach((country) => newCountries.push(country))

console.log(newCountries)

let sumForeach = 0
numbers.forEach((n) => (sumForeach += n))
console.log(sumForeach)

// map is very handy to modify an array and returns with an array
const newerCountries = countries.map((country) => country.toUpperCase())
console.log(newerCountries)

// lets return the length of word of each country as an array
const countriesLength = countries.map((country) => country.length)
console.log(countriesLength)

// use filter with map to filter the iteration and select for specific things, such as 
// countries that end with 'land'

const countriesWithLand = countries.filter((country) => country.includes('land'))
console.log(countriesWithLand)

// or... filtering out countries that do not include 'land'
const countriesWithoutLand = countries.filter((country) => !country.includes('land'))
console.log(countriesWithoutLand)

const newNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evens = newNumbers.filter((n) => n % 2 === 0)
const odds = newNumbers.filter((n) => n % 2 !== 0)
console.log(odds)
console.log(evens)

// You can associate reduce with a blender. You put different fruits to a blend and you get a mix of fruit juice. 
// The juice is the output from the reduction process.
// We use the reduce method to sum all numbers in an array together, or 
// to multiply items in an array or to concatenate items in an array.

const sumReduce = numbers.reduce((acc, cur) => acc + cur, 5)
console.log(sumReduce)

const strs = ['Hello', 'World', '!']
const helloWorldReduce = strs.reduce((acc, cur) => acc + ' ' + cur)
console.log(helloWorldReduce)

// multReduce has an initial value of 1 (default param), then multiplying the current array value against the accumulated value
const multReduce = odds.reduce((acc, cur) => acc * cur, 1)
console.log(multReduce)

// find returns the first found item
const firstEven = newNumbers.find((n) => n % 2 === 0)
const firstOdd = newNumbers.find((n) => n % 2 !== 0)
console.log(firstEven)
console.log(firstOdd)

const firstCountryWithWay = countries.find((country) => country.includes('many'))
console.log(firstCountryWithWay)

//countries with 6 characters
const sixCharCountry = countries.find((country) => country.length === 6)
console.log(sixCharCountry)
// find index of first six char country
const firstSixIndex = countries.findIndex((country) => country.length === 6)
console.log(firstSixIndex)
console.log(countries)

// some returns true if the array contains one or more matching elements
const someEvens = newNumbers.some((n) => n % 2 === 0)
console.log(someEvens)

// every is similar to some, but all elements need to match the criteria
const everythingEven = newNumbers.every((n) => n % 2 === 0)
console.log(everythingEven)
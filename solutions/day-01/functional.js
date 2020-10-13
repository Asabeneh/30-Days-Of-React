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
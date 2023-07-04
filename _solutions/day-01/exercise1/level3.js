// Exercise 1 - Level 3

const countries = require('./countries.js');
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

const sortedArray = ages.sort()

const minAge = sortedArray[0]
const maxAge = sortedArray[sortedArray.length-1]

const medianAge = (sortedArray[4] + sortedArray[5])/2

const averageAge = (sortedArray.reduce((number, a) => number + a, 0))/sortedArray.length

const rangeAge = maxAge - minAge

const compareAge = (maxAge - averageAge)-(minAge - averageAge)




const slicedCountries = countries.slice(0,10)

const middleCountry = countries[5]

const firstHalf = countries.slice(0,6)

const secondHalf = countries.slice(6,11)


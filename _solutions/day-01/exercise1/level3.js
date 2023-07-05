// Exercise 1 - Level 3

// 1. The following is an array of 10 students ages: 
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// - Sort the array and find the min and max age
const sortedArray = ages.sort()
const minAge = sortedArray[0]
const maxAge = sortedArray[sortedArray.length-1]

// - Find the median age(one middle item or two middle items divided by two) 
const medianAge = (sortedArray[4] + sortedArray[5])/2

// - Find the average age(all items divided by number of items)
const averageAge = (sortedArray.reduce((number, a) => number + a, 0))/sortedArray.length

// - Find the range of the ages(max minus min) 
const rangeAge = maxAge - minAge

// - Compare the value of (min - average) and (max - average)
const compareAge = (maxAge - averageAge)-(minAge - averageAge)


// 2. The following is a countries array:
const countries = require('./countries.js');

// Slice the first ten countries from the countries array
const slicedCountries = countries.slice(0,10)

// Find the middle country(ies) in the countries array
const middleCountry = countries[5]

// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

const firstHalf = countries.slice(0,6)
const secondHalf = countries.slice(6,11)


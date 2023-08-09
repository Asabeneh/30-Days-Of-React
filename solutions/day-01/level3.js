/**
 * EXERCISE: LEVEL 3
 */

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

/**
 * 1. The following is an array of 10 students ages.
 * - Sort the array and find the min and max age
 * - Find the median age(one middle item or two middle items divided by two)
 * - Find the average age(all items divided by number of items)
 * - Find the range of the ages(max minus min)
 * - Compare the value of (min - average) and (max - average), use abs() method
 */
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()

let min = Math.min(...ages)
let max = Math.max(...ages)

let median

if (ages.length % 2 === 0) {
    median = (ages[ages.length / 2] + ages[ages.length / 2 - 1]) / 2 
} else {
    median = ages[ages.length / 2]
}

let sum = 0
for (let i = 0; i < ages.length; i++) {
    sum += ages[i]
}
let average = sum / ages.length

let range = Math.max(...ages) - Math.min(...ages)

// 2. Slice the first ten coutries from the countries array
let firstTen = countries.slice(10)

// 3. Find the middle countries in the countries array
let middleCountries = countries[Math.floor(countries.length / 2)]

// 4. Divide the countries array into two equal arrays if it is even. If countries is not even, one more country for the first half
let middle = Math.floor((countries.length - 1) / 2)
const firstHalf = countries.splice(0, middle)
const secondHalf = countries.splice(-middle)


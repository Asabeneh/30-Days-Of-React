// 1. The following is an array of 10 students ages: js const 
//    ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  
//    - Sort the array and find the min and max age 
//    - Find the median age(one middle item or two middle items divided by two) 
//    - Find the average age(all items divided by number of items) 
//    - Find the range of the ages(max minus min) 
//    - Compare the value of (min - average) and (max - average), use abs() method

const age = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let min = Math.min(...age)
let max = Math.max(...age)

age.sort()
let [m1, m2] = [(age.length / 2), (age.length / 2 + 1)]
let median = (age[m1] + age[m2]) / 2

let average = age.reduce((x, y) => {
  return x + y
}, 0) / age.length

let range = max - min


// 1. Slice the first ten countries from the countries array
const countries = require('./countries')

let firstTen = countries.slice(0, 9)

// 2. Find the middle country(ies) in the countries array
let middle = Math.floor(countries.length / 2)


// 3. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let arr1, arr2 = []

if (countries.length % 2 == 0) {
  let middle = (countries.length / 2)

  arr1 = countries.slice(0, middle)
  arr2 = countries.slice(middle, countries.length)
}
else {
  let middle = Math.ceil(countries.length / 2)

  arr1 = countries.slice(0, middle)
  arr2 = countries.slice(middle, countries.length)
}

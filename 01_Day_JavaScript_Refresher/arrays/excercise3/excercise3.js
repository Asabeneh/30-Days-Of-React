// Exercise: Level 3

// The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
// 1.Slice the first ten countries from the countries array

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

/* 
    Required:
    - sort the Age array
    - find the min and max age
    - find the median age (one middle item or two middle items divided by two)
    - find the avg age (all items divided by numbers of items)
    - range of ages (max - min)
    - Compare values (Min - Avg)
    - Compare values (max - avg)
    - MUST use abd() for the values.
*/
ages.sort()
const length = ages.length
const isEven = length % 2 === 0 ? true : false
const min = ages[0]
const max = ages[length - 1]
let medianAge
function sumArray(arr) {
    return arr.reduce((total, currentValue) => total + currentValue);
}
let avg = sumArray(ages) / length
const rangeOfAges = Math.abs(max - min)
const comparingMinAvg = (Math.abs(min - avg)).toFixed(2)
const comparingMaxAvg = (Math.abs(max - avg)).toFixed(2)

if (isEven) {
    const index1 = Math.round(length / 2, 2)
    const index2 = index1 + 1
    medianAge = (ages[index1] + ages[index2]) / 2

} else {
    const index1 = (length - 1) / 2
    console.log('index = ' + index1)
    medianAge = ages[index1] / 2
}



console.log(`
    Array Sorted = ${ages}
    length = ${length}
    is the array even? ${isEven}
    min = ${min}
    max = ${max}
    median age = ${medianAge} 
    Average age = ${avg}
    range of ages = ${rangeOfAges}
    Values to compare (min - Avg) = ${comparingMinAvg}
    Values to compare (max - Avg) =  ${comparingMaxAvg}
`)









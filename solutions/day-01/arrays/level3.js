console.log("%c LEVEL 3", "color:red;font-size:50px;")

// 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()

let min = ages[0]
let max = ages[ages.length - 1]
let median = ages[ages.length / 2 - 1]
let avg = ages.reduce((prev, curr, i, arr) => {
    prev += curr
    return prev
}, 0) / ages.length
let range = max - min
let comparemin = Math.round(Math.abs(min - avg) * 10) / 10
let comparemax = Math.round(Math.abs(max - avg) * 10) / 10

console.log(min, max, median, avg, range, comparemin, comparemax)
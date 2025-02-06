import countries from "./countries.mjs"
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
console.log("min age = "+ages[0])
console.log("max age= "+ ages[ages.length-1])
let start = Math.floor((ages.length-1)/2)
let end = Math.ceil((ages.length-1)/2)
console.log("median age is= "+ ages.slice(start,end+1))
let sum =0;
for(let i =0 ; i< ages.length ; i++){
    sum+= ages[i]
}
console.log("average age = "+ sum/ages.length)
console.log("Range of age = " + (ages[ages.length-1]-ages[0]))

console.log(countries.slice(0,10))
let start1 = Math.floor((countries.length-1)/2)
let end1 = Math.ceil((countries.length-1)/2)
console.log("median age is= "+ countries.slice(start1,end1+1))
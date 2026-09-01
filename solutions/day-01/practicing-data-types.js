let challenge = '30 Days of JavaScript'
console.log(challenge)
console.log(challenge.length)

let capital = challenge.toUpperCase()
let small = challenge.toLowerCase()

let firstWord = challenge.substring(0,2)
console.log(firstWord)

let phrase = challenge.replace("30 ","")
console.log(phrase)

// includes check if the string contains a specified substring
let containsScript = challenge.includes("Script")
console.log("Does string contains Script? " + containsScript)

// split string to array using split()
let arr = challenge.split(" ")
console.log(arr)

// split the string at the comma and change it to an array.
let companyName = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
let compArr = companyName.split(",")
console.log(compArr)

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
const charAt15 = challenge.charAt(15)
console.log(charAt15)

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
const indexOfJ = challenge.indexOf("J")
const charCodeOfJ = challenge.charCodeAt(indexOfJ)
console.log(charCodeOfJ)

// determine the first index of "a"
const firstIndexOfa = challenge.indexOf("a")
console.log(firstIndexOfa)

const sentence = "You cannot end a sentence with because because because is a conjunction"

const firstIndexOfbecause = sentence.indexOf("because")
const lastIndexOfbecause = sentence.lastIndexOf("because")

console.log(`first occurence: ${firstIndexOfbecause} and lastIndex: ${lastIndexOfbecause}`)

// match "a" in the string
const pattern = /a/g;
const matches = challenge.match(pattern)
if(matches){
    for(const mat of matches){
        console.log(mat)
    }
}

let challenge2 = ("30 Days of").concat("JavaScript")
console.log(challenge2)

console.log(challenge.repeat(2))

// -------------------------------------------------------------------
// Level 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')
if(typeof "10" === typeof 10){
    console.log("They both are equal")
}
else{
    if(typeof(parseInt("10")) === typeof 10){
        console.log("They are made equal")
    }
}

// Check if 'on' is found in both python and jargon
if(("python").includes("on") && ("jargon").includes("on")){
    console.log("They both include 'on'")
}

let randomNumber = Math.floor(Math.random()*101);
console.log(randomNumber)

// random number between 51 and 100
let randomNumber2 = Math.floor(Math.random()*50 + 51)
console.log(randomNumber2)

// random number between 0 and 255
let randomNumber3 = Math.floor(Math.random()*256)

// random number between 0 and length of the string
let randomIndex = Math.floor(Math.random()*("JavaScript").length)
let randomChar = "JavaScript".charAt(randomIndex)
console.log(randomChar)

// creating a pattern
console.log(
    "1\t1\t1\t1\t1\t\n2\t1\t2\t4\t8\t \n"
)

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
const sentence2 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern1 = /love/g;   // the 'g' is to search in the entire string
let pattern2 = /love/gi;  // the 'i' is for case sensitive
let arr1 = sentence2.match(pattern)
let arr2 = sentence2.match(pattern2)
console.log(arr1.length)
console.log(arr2.length)

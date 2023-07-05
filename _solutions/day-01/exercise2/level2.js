// Exercise 2 - Level 2

// 1. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// let score = 75;

if (score >= 90 && score <= 100) {
    console.log('A');
} else if (score >= 70 && score < 90) {
    console.log('B');
} else if (score >= 60 && score < 70) {
    console.log('C');
} else if (score >= 50 && score < 60) {
    console.log('D');
} else if (score >= 0 && score < 50) {
    console.log('E');
} else {
    console.log('Invalid score');
}


// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let month = 'September'

if (month === 'September' || month === 'October' || month === 'November') {
    console.log('The season is Autumn')
} else if (month === 'December' || month === 'January' || month === 'February') {
    console.log('The season is Winter')
} else if (month === 'March' || month === 'April' || month === 'May') {
    console.log('The season is Spring')
} else if (month === 'June' || month === 'July' || month === 'August') {
    console.log('The season is Summer') 
}


// 3. Check if a day is weekend day or a working day. Your script will take day as an input.

let day = 'FriDAY'
let lowered = day.toLowerCase()

switch(lowered){
    case 'saturday':
        console.log('Saturday is a weekend')
        break
    case 'sunday':
        console.log('Sunday is a weekend.')
        break
    default:
        const capital = lowered.slice(0,1).toUpperCase()
        const capitalised = capital + lowered.slice(1)
        console.log(`${capitalised} is a week day.`)
}


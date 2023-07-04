// Exercise 2 - Level 3

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

let month = 'February'

if (month === 'April' || month === 'June' || month === 'September'|| month === 'November') {
    console.log(`${month} has 30 days.`)
} else if (month === 'February' && currentYear%4 === 0) {
    console.log(`February has 29 days.`)
} else if (month === 'February' && !currentYear%4 === 0) {
    console.log(`February has 28 days.`)
} else {console.log(`${month} has 31 days.`)}



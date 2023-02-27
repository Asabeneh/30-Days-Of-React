/**
 *  1. Write a program which tells the number of days in a month. 
 * */
const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

let month = prompt('Enter a month: ')
month = month.toLowerCase()

if (month == 'january') {
  console.log(`January has ${daysInMonth[0]} day`)
} 
else if (month == 'february') {
  console.log(`February has ${daysInMonth[1]} day`)
} 
else if (month == 'march') {
  console.log(`March has ${daysInMonth[2]} day`)
} 
else if (month == 'april') {
  console.log(`April has ${daysInMonth[3]} day`)
} 
else if (month == 'may') {
  console.log(`May has ${daysInMonth[4]} day`)
} 
else if (month == 'june') {
  console.log(`June has ${daysInMonth[5]} day`)
} 
else if (month == 'july') {
  console.log(`July has ${daysInMonth[6]} day`)
} 
else if (month == 'august') {
  console.log(`August has ${daysInMonth[7]} day`)
} 
else if (month == 'september') {
  console.log(`September has ${daysInMonth[8]} day`)
} 
else if (month == 'october') {
  console.log(`October has ${daysInMonth[9]} day`)
} 
else if (month == 'november') {
  console.log(`November has ${daysInMonth[10]} day`)
} 
else if (month == 'december') {
  console.log(`December has ${daysInMonth[11]} day`)
}

/** 
 *  1.2. Write a program which tells the number of days in a month, 
 *        now consider leap year.
 * */
month = prompt('Enter a month in leap year: ')
month = month.toLowerCase()

if (month == 'january') {
  console.log(`January has ${daysInMonth[0]} day`)
} 
else if (month == 'february') {
  console.log(`February has ${daysInMonth[1]+1} day`)
} 
else if (month == 'march') {
  console.log(`March has ${daysInMonth[2]} day`)
} 
else if (month == 'april') {
  console.log(`April has ${daysInMonth[3]} day`)
} 
else if (month == 'may') {
  console.log(`May has ${daysInMonth[4]} day`)
} 
else if (month == 'june') {
  console.log(`June has ${daysInMonth[5]} day`)
} 
else if (month == 'july') {
  console.log(`July has ${daysInMonth[6]} day`)
} 
else if (month == 'august') {
  console.log(`August has ${daysInMonth[7]} day`)
} 
else if (month == 'september') {
  console.log(`September has ${daysInMonth[8]} day`)
} 
else if (month == 'october') {
  console.log(`October has ${daysInMonth[9]} day`)
} 
else if (month == 'november') {
  console.log(`November has ${daysInMonth[10]} day`)
} 
else if (month == 'december') {
  console.log(`December has ${daysInMonth[11]} day`)
}
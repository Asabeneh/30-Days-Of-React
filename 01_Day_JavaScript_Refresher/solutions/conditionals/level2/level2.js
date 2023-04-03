/** 
 * 1. Write a code which can give grades to students according to theirs scores:
 *  80-100, A
 *  70-89, B
 *  60-69, C
 *  50-59, D
 *  0-49, F
*/
let score = Number(prompt('Enter your score: '))

switch (true) {
  case 80 <= score && score <= 100:
    console.log('A')
    break
  case 70 <= score && score <= 79:
    console.log('B')
    break
  case 60 <= score && score <= 69:
    console.log('C')
    break
  case 50 <= score && score <= 59:
    console.log('D')
    break
  case 0 <= score && score <= 49:
    console.log('F')
    break
  default:
    console.log('Number invalid')
}

/** 
 * 2. Check if the season is Autumn, Winter, Spring or Summer. 
 *    If the user input is:
 *        September, October or November, the season is Autumn.
 *        December, January or February, the season is Winter.
 *        March, April or May, the season is Spring
 *        June, July or August, the season is Summer
*/
let season = prompt('Whats is the month? ')

let Autumn = ['September', 'October', 'November']
let Winter = ['December', 'January', 'February']
let Spring = ['March', 'April', 'May']
let Summer = ['June', 'July', 'August']

switch (true) {
  case Autumn.includes(season):
    console.log('The season is Autumn')
    break
  case Winter.includes(season):
    console.log('The season is Winter')
    break
  case Spring.includes(season):
    console.log('The season is Spring')
    break
  case Summer.includes(season):
    console.log('The season is Summer')
    break
  default:
    console.log('Season invalid')
}


/**
 * 3. Check if a day is weekend day or a working day. Your script will 
 *    take day as an input.
 */
let day = prompt('Whats is the day today? ')
let newDay = day[0].toUpperCase()+day.slice(1, day.length).toLowerCase()

let dayWork = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
let weekend = ['Saturday', 'Sunday']

switch (true) {
  case dayWork.includes(newDay):
    console.log(`${newDay} is a working day.`)
    break
  case weekend.includes(newDay):
    console.log(`${newDay} is a weekend.`)
    break
  default:
    console.log('Day invalid')
}
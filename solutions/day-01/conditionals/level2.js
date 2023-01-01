/*Write a code which can give grades to students according to theirs scores:
90-100 = A, 70-89 = B, 60-69 = C, 50-59 = D, 0-49 = F */
let score = parseInt(prompt('Enter your score:'));
// When using switch(true), an expression in a case will be evaluated before matching. 
// If the expression in your case evaluates to true - it will be matched.
switch(true) {
    case score >= 90: console.log(`You score is an 'A'!`);
        break;
    case score >= 70 && score < 90: console.log(`You score is a 'B'!`);
        break;
    case score >= 60 && score < 70: console.log(`You score is a 'C'!`);
        break;
    case score >= 50 && score < 60: console.log(`You score is a 'D'!`);
        break;
    case score <= 49: console.log(`You score is a 'F'!`);
        break;
    default:
        console.log('Error, please enter a valid score!');
        break;
}

/*Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/
let month = prompt('Enter a month:');
month = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase(); // capitalize the given month and lower case the rest of the letters
switch (true) {
    case month == 'September' || month == 'October' || month == 'November':
        console.log(`The season during the month of ${month} is Autumn.`);
        break;
    case month == 'December' || month == 'January' || month == 'February':
        console.log(`The season during the month of ${month} is Winter.`);
        break;
    case month == 'March' || month == 'April' || month == 'May':
        console.log(`The season during the month of ${month} is Spring.`);
        break;
    case month == 'June' || month == 'July' || month == 'August':
        console.log(`The season during the month of ${month} is Summer.`);
        break;
    default:
        console.log('Error, please enter a valid month!');
        break;
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt('What is the day today?');
day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase(); // uppercase first letter of day and lowercase rest of letters
switch (true) {
    case day == 'Saturday' || day == 'Sunday': 
        console.log(`${day} is a weekend day.`);
        break;
    case day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday': 
        console.log(`${day} is a working day.`);
        break;
    default:
        console.log(`${day} is a not a valid day, please enter a day!`);
        break;
}
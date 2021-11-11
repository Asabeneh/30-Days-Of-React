//1
const month = prompt('Month of year: ').toLowerCase();
const outputMonth = month.charAt(0).toUpperCase() + month.slice(1);
alert(
    'february' == month ?
        `${outputMonth} has 28 days in a common year and 29 days in leap years` :
        ['january', 'march', 'may', 'july', 'august', 'october', 'december'].includes(month) ?
            `${outputMonth} has 31 days.` :
            ['april', 'june', 'september', 'november'].includes(month) ?
                `${outputMonth} has 30 days.` :
                'Wrong format'
);
//2
numberOfDay = +prompt('Number of days in a month: ');
alert(
    numberOfDay == 29 ? 'Leap year' :
        numberOfDay == 28 ? 'Common year' :
            'I dont know'
);

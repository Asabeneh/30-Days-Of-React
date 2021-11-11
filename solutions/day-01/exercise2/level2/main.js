//1
const yourScore = prompt('Your scrore: ');
alert(
    'Your grade: '.concat(
        yourScore >= 80 ? 'A' :
            yourScore >= 70 ? 'B' :
                yourScore >= 60 ? 'C' :
                    yourScore >= 50 ? 'D' :
                        'F'
    )
);
//2
let month = prompt('Month of year: ').toLowerCase();
alert(
    ['september', 'october', 'november'].includes(month) ?
        'The season is Autumn' :
        ['december', 'january', 'february'].includes(month) ?
            'The season is Winter' :
            ['march', 'april', 'may'].includes(month) ?
                'The season is Spring' :
                ['june', 'july', 'august'].includes(month) ?
                    'The season is Summer' :
                    'Wrong format'
);
//3
const day = prompt('What is the day  today?').toLowerCase();
const outputDay = day.charAt(0).toUpperCase() + day.slice(1);
alert(
    ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].includes(day) ?
        `${outputDay} is a working day.` :
        ['saturday', 'sunday'].includes(day) ?
            `${outputDay} is a weekend.` :
            'Wrong format'
);

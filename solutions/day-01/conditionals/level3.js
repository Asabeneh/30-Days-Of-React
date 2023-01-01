// Write a program which tells the number of days in a month. and considers leap year
let monthInput = prompt('Enter a month:');
monthInput = monthInput.charAt(0).toUpperCase() + monthInput.slice(1).toLowerCase();
let yr = new Date().getFullYear(); // get year so its dynamic and never hardcoded in
switch (true) {
    case monthInput == 'January': console.log(new Date(yr,1,0).getDate());
        break;
    case monthInput == 'February': console.log(new Date(yr,2,0).getDate());
        break;
    case monthInput == 'March': console.log(new Date(yr,3,0).getDate());
        break;
    case monthInput == 'April': console.log(new Date(yr,4,0).getDate());
        break;
    case monthInput == 'May': console.log(new Date(yr,5,0).getDate());
        break;
    case monthInput == 'June': console.log(new Date(yr,6,0).getDate());
        break;
    case monthInput == 'July': console.log(new Date(yr,7,0).getDate());
        break;
    case monthInput == 'August': console.log(new Date(yr,8,0).getDate());
        break;
    case monthInput == 'September': console.log(new Date(yr,9,0).getDate());
        break;
    case monthInput == 'October': console.log(new Date(yr,10,0).getDate());
        break;
    case monthInput == 'November': console.log(new Date(yr,11,0).getDate());
        break;
    case monthInput == 'December': console.log(new Date(yr,12,0).getDate());
        break;
    default:
        console.log('Error, please enter a valid month!')
        break;
}
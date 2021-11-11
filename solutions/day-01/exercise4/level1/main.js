//1
function fullName(firstName, lastName) {
    return lastName + ' ' + firstName;
}
console.log(
    'Fullname: ',
    fullName('Vu', 'Vy')
);
//2
function addNumbers(a, b) {
    return a + b;
}
console.log(
    'Sum: ',
    addNumbers(10, 20)
);
//3
function _areaOfCircle(r) {
    return Math.PI * r * r;
}
console.log(
    'Area of Circle: ',
    _areaOfCircle(4)
);
//4
function convertCelciusToFahrenheit(oC) {
    return oC * 9 / 5 + 32;
}
console.log(
    'oC to oF: ',
    convertCelciusToFahrenheit(27)
);
//5
function bmi(weight, height) {
    return weight / (height ** 2);
}
const weight = 65;
const height = 1.7;
const myBmi = bmi(weight, height);
console.log(
    'BMI rank: ',
    myBmi < 18.5 ? 'Underweight'
        : myBmi < 25 ? 'Normal weight'
            : myBmi < 30 ? 'Overweight'
                : 'Obese'
);
//6
function checkSeason(month) {
    return month < 0 && month > 12 ? 'Invalid'
        : month < 4 ? 'Spring'
            : month < 7 ? 'Summer'
                : month < 10 ? 'Autumn'
                    : 'Winter'
}
console.log(
    'Check season: ',
    checkSeason(11)
);

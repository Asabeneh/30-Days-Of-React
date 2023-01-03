// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName,lastName){
    return `${firstName} ${lastName}`;
}
console.log(fullName('Seto', 'Kaiba'));

// Declare a function addNumbers and it takes two parameters and it returns sum.
function addNumbers(num1,num2){
    return num1 + num2;
}
console.log(addNumbers(4,8));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
let _areaOfCircle = (radius)=>{
    let pi = Math.PI;
    let area = pi * radius * radius;
    return area;
}
console.log(_areaOfCircle(5));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. 
// Write a function which convert oC to oF convertCelciusToFahrenheit.
let convertCelciusToFahrenheit = (oC) => {
    let oF = (oC * (9/5)) + 32;
    return oF;
}
console.log(convertCelciusToFahrenheit(20) + `\u00B0F`)


/*Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
Write a function which calculates bmi. BMI is used to broadly define different weight groups in 
adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */
let BMI = (weight, height)=>{
    let bmi = (weight / (height * height)).toFixed(2);
    let answer = '';
    switch (true) {
        case bmi >= 30: answer = `BMI is ${bmi}: You are Obese!`;
            break;
        case bmi >=25 && bmi < 30: answer = `BMI is ${bmi}: You are Overweight!`;
            break;
        case bmi >= 18.5 && bmi < 25: answer = `BMI is ${bmi}: You are Normal weight!`;
            break;
        case bmi < 18.5: answer = `BMI is ${bmi}: You are Underweight!`;
            break;
        default:
            break;
    }
    return answer;
}
console.log(BMI(73, 1.77));

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
let checkSeason = (month) => {
    let season = '';
    switch(true){
        case month == 'September' || month == 'October' || month == 'November': season = `The season is Autumn in the month of ${month}`;
            break;
        case month == 'December' || month == 'January' || month == 'February': season = `The season is Winter in the month of ${month}`;
            break;
        case month == 'March' || month == 'April' || month == 'May': season = `The season is Spring in the month of ${month}`;
            break;
        case month == 'June' || month == 'July' || month == 'August': season = `The season is Summer in the month of ${month}`;
            break;
        default:
            break;
    }
    return season;
}
console.log(checkSeason('May'));

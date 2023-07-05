// Exercise 4 - Level 1

// 1. Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.

const fullName = function (firstName, lastName) {
    console.log(firstName + " " + lastName) 
}

// 2. Declare a function addNumbers and it takes two two parameters and it returns sum.

const addNumbers = function (a, b) {
    console.log(a + b)
}

// 3. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle

const areaOfCircle = function (radius) {
    const circleArea = Math.PI * radius * radius 
    console.log(`The area of the circle is ${circleArea}`)
}

// 4. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

const convertCelciusToFahrenheit = function (celsius) {
    const fahrenheit = (celsius * 9/5) + 32
    console.log(`${celsius} degrees Celsius is the same as ${fahrenheit} degrees Fahrenheit`)
}

// 5. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more


const checkBMI = function (weight, height) {
    const bmi = weight / (height * height)
    if (bmi >= 30) {
        console.log(`Your BMI is ${bmi} which is 'obese'.`);
    } else if (bmi >= 25 && bmi <= 29.9) {
        console.log(`Your BMI is ${bmi} which is 'overweight'.`);
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        console.log(`Your BMI is ${bmi} which is 'normal weight'.`);
    } else if (bmi < 18.5) {
        console.log(`Your BMI is ${bmi} which is 'underweight'.`);
    }
}


// 6. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = function (month) {
    if (month === 'September' || month === 'October' || month === 'November') {
        console.log('The season is Autumn')
    } else if (month === 'December' || month === 'January' || month === 'February') {
        console.log('The season is Winter')
    } else if (month === 'March' || month === 'April' || month === 'May') {
        console.log('The season is Spring')
    } else if (month === 'June' || month === 'July' || month === 'August') {
        console.log('The season is Summer') }
}

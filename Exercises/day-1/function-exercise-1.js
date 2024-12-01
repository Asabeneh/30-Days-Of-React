// Exercises: Level 1

// Declare a function fullName and it takes firstName, lastName as a parameter and it returns your full - name.
const fullname = (firstname, lastname) => {
    return `${firstname} ${lastname}`
}
// Declare a function addNumbers and it takes two two parameters and it returns sum.
const sum = (a, b) =>{
    return a + b
}

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates _areaOfCircle
const areaOfCircle = (r,pi=3.14) => {
    return pi * r * r
}

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
const temperature = (oC) => {
    return (oC * 9/5) + 32
}

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    const BMI = (W,H) => {
        let bmi=  W / (H * H)
        if (bmi>18.4 || bmi<25){
            return 'Normal weight'
        }
        else if (bmi>25){
            return 'Overweight'
        }
        else{
            return 'Underweight'
        }
    }
    // The same groups apply to both men and women.
    
    // Underweight: BMI is less than 18.5
    // Normal weight: BMI is 18.5 to 24.9
    // Overweight: BMI is 25 to 29.9
    // Obese: BMI is 30 or more

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
    const checkSeason = (month) => {
        if (month >= 3 && month <= 5){
            return 'Spring'
        }
        else if (month >= 6 && month <= 8){
            return 'Summer'
        }
        else if (month >= 9 && month <= 11){
            return 'Autumn'
        }
        else{
            return 'Winter'
        }
    }
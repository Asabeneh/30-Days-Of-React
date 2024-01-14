function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function addNumbers(num1, num2) {
    return num1 + num2;
}

function _areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

function convertCelciusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

function bmi(bmi, height = 1) {
    // if bmi only is submitted, bmi will be used as the bmi
    let bmi = weigth / (height * height);
    
    if (bmi < 18.5) {
        console.log("Underweight");
    } else if (bmi < 24.9) {
        console.log("Normal weight");
    } else if (bmi < 29.9) {
        console.log("Overweight");
    } else {
        console.log("Obese");
    }

    return bmi;
}

function checkSeason(month) {
    seasons = {
        winter: ["december", "january", "february"],
        spring: ["march", "april", "may"],
        summer: ["june", "july", "august"],
        autumn: ["september", "october", "november"]
    };
    month = month.toLowerCase();
    
    for (const season in seasons) {
        if (Object.hasOwnProperty.call(seasons, season)) {
            const months = seasons[season];
            months.forEach(m => {
                if (m == month) {
                    return season;
                }
            });
        }
    }
    console.log("There is no such month");
    return "noSeason";
}
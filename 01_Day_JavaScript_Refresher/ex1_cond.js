console.log('Conditions. Ex Level 1.')

let age=prompt('Enter your age:', 0)
console.log('Enter your age: '+age)
if (age>=18) {
    console.log('You are old enough to drive.')
} else {
    console.log('You are left with 3 years to drive.')
}


let score=prompt('Enter your scores:', 0)
console.log('Enter your scores: '+score)
if (score >= 0 && score <= 49) {
    console.log('You score is F.')
} else if (score >= 50 && score <= 59) {
    console.log('You score is D.')
} else if (score >= 60 && score <= 69) {
    console.log('You score is C.')
} else if (score >= 70 && score <= 89) {
    console.log('You score is B.')
} else if (score >= 90 && score <= 100) {
    console.log('You score is A.')
}    

let month=prompt('Enter a month:', 0)
console.log('Enter a month (English full name): '+month)
switch (month.toUpperCase()) {
    //January has 31 days.
    case 'JANUARY'||'MARCH'||'MAY'||'JULY'||'AUGUST'||'OCTOBER'||'DECEMBER': 
        console.log(month[0].toUpperCase()+month.slice(1)+' has 31 days')
        break
    case 'FEBRUARY': 
        console.log(month[0].toUpperCase()+month.slice(1)+' has 28/29 days')
        break
    case 'APRIL'||'JUNE'||'SEPTEMBER'||'NOVEMBER': 
        console.log(month[0].toUpperCase()+month.slice(1)+' has 30 days')
        break
}


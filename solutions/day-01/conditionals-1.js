

    //1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
    let age = prompt('Enter your age: ');

    if (age >= 18) {
      alert('You are old enough to drive.')
    } else {
      alert(`You are left with ${18 - age} years to drive`)
    };




    //2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
    let myAge = 42;
    let yourAge = prompt('Enter your age: ');

    if (yourAge > myAge) { alert(`you are ${yourAge - myAge} years older than me`) }
    else if (yourAge < myAge) { alert(`you are ${myAge - yourAge} years younger than me`) }
    else { alert('we have the same age!')
    };



    //3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways using "if else" and "ternary operator".
    let a = 4;
    let b = 3;

    a > b ? console.log('a is greater than b') : console.log('a is less than b');

    if (a>b) {console.log('a is greater than b')} else {console.log('a is less than b')};

    //4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
    let evenOrOddNumber = prompt('Enter a number: ')
    if (evenOrOddNumber % 2 == 0 ) {`${evenOrOddNumber} is an even number`}
    else {`${evenOrOddNumber} is an odd number`}

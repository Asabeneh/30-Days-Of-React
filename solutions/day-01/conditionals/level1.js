/*Get user input using prompt('Enter your age:'). If user is 18 or older , 
give feedback:'You are old enough to drive' but if not 18 give another feedback 
stating to wait for the number of years he needs to turn 18. */
let userInput = prompt('Enter your age:');
if(userInput >= 18){
    console.log('You are old enough to drive.');
}else{
    let years = 18 - userInput;
    console.log(`You must wait ${years} ${(years == 1) ? 'year' : 'years'} until you can drive.`);
}

/*Compare the values of myAge and yourAge using if … else. Based on the comparison 
and log the result to console stating who is older (me or you). 
Use prompt('Enter your age:') to get the age as input. */
let myAge = parseInt(prompt('User1 enter your age:'));
let yourAge = parseInt(prompt('User2 enter your age:'));
console.log((myAge > yourAge) ? `User1(Age:${myAge}) is older than User2(Age:${yourAge})`
                                : `User2(Age:${yourAge}) is older than User1(Age:${myAge})`);

// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
let a = 4, b = 3;
// using if else
if(a > b){
    console.log(`${a} is greater than ${b}`);
}else{
    console.log(`${a} is less than ${b}`);
}
// ternary operator.
console.log((a > b) ? `${a} is greater than ${b}` : `${a} is less than ${b}`);

/* Even numbers are divisible by 2 and the remainder is zero. 
How do you check, if a number is even or not using JavaScript?*/
let num = prompt('Enter a number:');
console.log((num % 2 == 0) ? `${num} is an even number` : `${num} is an odd number`);


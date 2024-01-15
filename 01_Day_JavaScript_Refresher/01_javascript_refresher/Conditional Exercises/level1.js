// let userAge = prompt("Enter your age: ");
// if (userAge >= 18)
//     confirm("You are old enough to drive.");
// else
//     confirm("You are left with " + (18 - userAge) + " to drive.");

// const myAge = 19;

// if (userAge < myAge)
//     confirm("You are " + (myAge - userAge) + " younger than me!");
// else if (userAge > myAge)
//     confirm("You are " + (userAge - myAge) + " older than me!");
// else
//     confirm("You are the same age as me!");

function aGreaterThanB(a, b) {
    // if (a > b) {
    //     console.log("a is greater than b");
    // } else {
    //     console.log("a is less than b");
    // }

    a > b ?
        console.log("a is greater than b") :
        console.log("a is less than b");
}

function isEven(value) {
    if (value % 2 == 0) {
        console.log("The value is even");
        return true;
    } else {
        console.log("The value is odd");
        return false;
    }
}
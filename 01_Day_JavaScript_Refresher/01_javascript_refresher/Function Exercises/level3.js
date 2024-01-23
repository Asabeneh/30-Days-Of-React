function userIdGeneratedByUser() {
    const charCount = prompt("Number of characters");
    const idCount = prompt("Number of ids");
    const allIDs = [];
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (let i = 0; i < idCount; i++) {
        allIDs.push(userIdGenerator(chars, charCount));
    }

}

// The program has been adapted from level2.js
function userIdGenerator(availChars, charCount) {
    result = "";
    for (let i = 0; i < charCount; i++) {
        result += availChars[Math.floor(Math.random() * availChars.length)];
    }
    console.log(result);
    return result;
}

function generateColors(type, amount) {
    const toReturn = [];
    const chars = "0123456789abcdef";
    switch (type) {
        case "hexa":
            for (let i = 0; i < amount; i++) {
                toReturn.push(`#${userIdGenerator(chars, 6)}`);
            }
            break;
        case "rgb":
            for (let i = 0; i < amount; i++) {
                toReturn.push(`rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`);
            }
            break;
    }
    return toReturn.toString();
}

function shuffleArray(arr) {
    let newArr = [];
    let length = 0;
    arr.forEach(element => {
        newArr = newArr.insert(element, Math.floor(Math.random() * newArr.length));
    });
    return newArr;
}

Array.prototype.insert = function(value, index){
    console.log(value, index.toString());
    return [...this.slice(0,index), value, ...this.slice(index)];
}

function factorial(value) {
    if (value == 0) {
        return 1;
    }
    return value * factorial(value-1);
}

function isEmpty(param) {
    return value === undefined || value === null || value === '';
}

function average(array) {
    let sum = 0;
    array.forEach(elem => {
        if (elem == Number) {
            sum += elem;
        } else {
            console.log("Sorry the array is not fully numerical");
            return;
        }
    });
    return sum / array.length;
}
// userIdGeneratedByUser();
// console.log(generateColors("hexa",20));
// console.log(shuffleArray([1,2,3,4,5,6,7,8,9,10]))
console.log(factorial(3));
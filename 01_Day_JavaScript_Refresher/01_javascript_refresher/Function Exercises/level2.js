function solveQuadEquation(a, b, c) {
    const inSquare = (b * b) - (4 * a * c);
    if (inSquare < 0) {
        console.log("No real solutions");
        return;
    }
    const lower = (-b - inSquare) / (2 * a);
    const higher = (-b + inSquare) / (2 * a);
    return {lower, higher};
}

function printArray(arr) {
    arr.forEach(elem => {
        console.log(elem);
    });
}

function showDateTime() {
    const format = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    };
    console.log(Intl.DateTimeFormat(undefined, format).format(new Date()).replace(',', ''));
}

function swapValues(x, y) {
    return [y, x]; // ???
}

function reverseArray(arr) {
    const newArray = Array(arr.length);
    arr.forEach((elem, index, arrayCopy) => {
        newArray[arrayCopy.length - index - 1] = elem;
    });
    return newArray;
}

function capitalizeArray(arr) {
    arr.forEach((elem, index) => {
        arr[index] = elem.toUpperCase();
    })
    return arr;
}

function addItem(item, arr) {
    arr.push(item);
    return arr;
}

function removeItem(index, arr) {
    arr.splice(index,1);
    return arr;
}

function evensAndOdds(val) {
    let [evens, odds] = [Math.floor(val/2), Math.round(val/2)];
    console.log(`There are ${odds} odds`);
    console.log(`There are ${evens} evens`);
} // this will not count 0 as an even number as not positive

function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function userIdGenerator() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    result = "";
    for (let i = 0; i < 7; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    console.log(result);
    return result;
}
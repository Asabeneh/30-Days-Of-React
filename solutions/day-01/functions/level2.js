// Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
// Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
let solveQuadratic = (...args) =>{
    if(args.length === 0){
        return `{0}`;
    }
    let a = args[0], b = args[1], c = args[2];
    let discriminant = b * b - 4 * a * c;
    let answer = '', real = '', imaginary = '';
    switch (true) {
        case discriminant > 0:
            root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            answer = `{${root1}, ${root2}}`
            break;
        case discriminant == 0:
            root1 = root2 = -b / (2 * a);
            answer = `{${root1}}`
            break;
        case discriminant < 0:
            real = (-b / (2 * a)).toFixed(2);
            imaginary = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
            answer = `{${real} + ${imaginary}i, ${real} - ${imaginary}i}`
        default:
            break;
    }
    return answer;
}

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}


// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
let items = ['Shoe', 'Shirt', 'Pants'];
let printArray = (array) => {
    for (const element of array) {
        console.log(element);
    }
}
printArray(items);


// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
let showDateTime = () => {
    let dateTime = new Date();
    let month = dateTime.getMonth();
    let day = dateTime.getDate();
    let year = dateTime.getFullYear()
    let time = dateTime.getHours();
    let minutes = dateTime.getMinutes()
    if(month < 10 || day < 10){
        month = `0${month+1}`;
        day = `0${day}`;
    }
    if(time == 0){
        time = 12;
    }
    if(minutes < 10){
        minutes = `0${minutes}`;
    }

    console.log(`${month}/${day}/${year} ${time}:${minutes}`);
    
}
showDateTime() // 08/01/2020 04:08


// Declare a function name swapValues. This function swaps value of x to y.
let swapValues = (x,y) => {
    let temp1 = x;
    let temp2 = y;
    x = temp2;
    y = temp1;
    console.log(`x => ${x}, y => ${y}`);
}
swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4


// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
let reverseArray = (array) => {
    return array.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5])) //[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C'])) //['C', 'B', 'A']


// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
let names = ['john', 'claire', 'billy'];
let capitalizeArray = (array) => {
    array.forEach((element,index,arr) => {
        let capitalized = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
        arr.splice(index,1,capitalized);
    });
    return array;
}
console.log(capitalizeArray(names));


// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
let itemArray = ['Milk'];
let addItem = (item) =>{
    itemArray.push(item);
    return itemArray;
}
console.log(addItem('Pizza'));


// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an ite
let itemRemove = ['Candy', 'Snacks', 'Vegetables']; 
let removeItem = (item) =>{
    itemRemove.splice(itemRemove.indexOf(item),1);
    return itemRemove;
}
console.log(removeItem('Snacks'))


// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
let evensAndOdds = (positive) => {
    let evenCount = 0;
    let oddCount = 0;
    for(let i = 0; i <= positive; i++){
        (i % 2 == 0) ? evenCount++ : oddCount++;
    }
    console.log(`The number of odds are ${oddCount}\nThe number of evens are ${evenCount}`);
}
evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.


// Write a function which takes any number of arguments and return the sum of the arguments
let sum = (...args) =>{
    let value = args.reduce((a,b)=>{
        return a + b;
    }, 0);
    console.log(value);
}
sum(1, 2, 3); // -> 6
sum(1, 2, 3, 4) // -> 10


// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id, ex: 41XTDbE
let userIdGenerator = ()=>{
    // toString(36) is base 36, mixture of binary to ASCII characters. 
    // substring(2,9) specifies to move 2 right of starting char, and then grab the rest to the right 7 more for total of 9
    let randomId = ((Math.random() + 1).toString(36).substring(2,9))
    return randomId;
}
console.log(userIdGenerator()); 

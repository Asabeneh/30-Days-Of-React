const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Print the price of each product using forEach
products.forEach(element => {
    console.log(element.price);
});


// Print the product items as follows using forEach

/*The price of banana is 3 euros.
The price of mango is 6 euros.
The price of potato is unknown.
The price of avocado is 8 euros.
The price of coffee is 10 euros.
The price of tea is unknown.*/
products.forEach(element => {
    console.log(`The price of ${element.product} is ${(typeof element.price !== 'number') ? 'unknown.': element.price + ' euros.'}`);
});


// Calculate the sum of all the prices using forEach
let sum = 0;
products.forEach(element=>{
    if(typeof element.price == 'number'){
        sum += element.price
    }
});
console.log(`Sum of all the prices is ${sum} euros.`);


// Create an array of prices using map and store it in a variable prices
let prices= products.map(element=>{
    return element.price;
})
console.log(prices);


// Filter products with prices
products.filter(element=>{
    if(typeof element.price == 'number'){
        console.log(element);
    }
})


// Use method chaining to get the sum of the prices(map, filter, reduce)
let priceSum = products.map(element=>{
    return element.price;
}).filter(element=>{
    if(typeof element == 'number'){
        return element;
    }
}).reduce((a,b)=>{return a+b;})
console.log(priceSum);


// Calculate the sum of all the prices using reduce only
let total = products.reduce((a, b)=>{
    return parseInt(a + b.price);
},0)
console.log(total)


// Find the first product which doesn't have a price value
let found = products.find(element=>{
    return typeof element.price !== 'number';
})
console.log(found);


// Find the index of the first product which does not have price value
let foundIndex = products.findIndex(element=>{
    return typeof element.price !== 'number'
})
console.log(foundIndex);


// Check if some products do not have a price value
let hasValue = products.some(element=>{
    return typeof element.price == 'number'
})
console.log(hasValue);


// Check if all the products have price value
let allHave = products.every(element=>{
    return typeof element.price == 'number'
})
console.log(allHave);


// Explain the difference between forEach, map, filter and reduce
    // forEach lets you iterate through and array and can utilize index/array in the callback function
    // map lets you perform a function on every element of an array and returns a new array 
    // filter lets you filter items from an array and returns a new array with the filtered items
    // reduce sums up all the items of the array 


// Explain the difference between filter, find and findIndex
    // filter lets you filter items from an array
    // find lets you find and array element based on a given condition and returns the element
    // findIndex is the same find except it returns an index value instead of the element itself


// Explain the difference between some and every
    // some - if one or some items satisfy criteria then return true else return false
    // every - if all items satisfy criteria then return true else return false
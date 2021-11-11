const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
//1
products.forEach(
    ({ product, price }) => console.log(product + '-' + price)
);
//2
products.forEach(
    ({ product, price }) => console.log(
        'The price of ' + product +
        ' is ' + (typeof price == 'number' ? price + ' euros' : 'unknown') +
        '.'
    )
);
//3
let sum = 0;
products.forEach(
    ({ product, price }) => typeof price == 'number' ? sum += price : sum
);
console.log(
    'Sum price: ',
    sum
);
//4
const prices = products.map(p => p.price);
console.log(
    'Prices: ',
    prices
);
//5
const [a, b] = [5, 8];
console.log(
    'Filter price in [5, 8]: ',
    products.filter(({ price }) => price >= a && price <= b && typeof price == 'number')
);
//6
console.log(
    'Sum by chaining (map, filter, reduce): ',
    products
        .map(product => product.price)
        .filter(price => typeof price == 'number')
        .reduce((res, price) => res += price, 0)
);
//7
console.log(
    'Sum by reduce: ',
    products.reduce((res, { price }) => typeof price == 'number' ? res += price : res, 0)
);
//8
console.log(
    'First product which doesnt have a price value: ',
    products.find(({ price }) => typeof price != 'number')
);
//9
console.log(
    'Index of the first product which does not have price value: ',
    products.findIndex(({ price }) => typeof price != 'number')
);
//10
console.log(
    'Some products do not have a price value: ',
    products.some(({ price }) => typeof price != 'number')
);
//11
console.log(
    'All the products have price value: ',
    !products.some(({ price }) => typeof price != 'number')
);
//12
console.log(
    'Explain the difference between forEach, map, filter and reduce: \n' +
    'forEach: Same normal loop, but it is a function\n' +
    'map: It is used when you want to change, transform value of the elements in array\n' +
    'filter: It is used when you want to get a subset of an array based on a condition you set\n' +
    'reduce: It is used when you want to calculate a value, create an object, array based on the original array'
);
//13
console.log(
    'Explain the difference between filter, find and findIndex: \n' +
    'find: Get the first element that satisfies the condition you set\n' +
    'findIndex: Get the index of the first element that satisfies the condition you set\n' +
    'filter: It is used when you want to get a subset of an array based on a condition you set'
);
//14
console.log(
    'Explain the difference between some and every: \n' +
    'some: Check if there are any elements that satisfy the condition you set\n' +
    'every: Check if all elements that satisfy the condition you set\n'
);

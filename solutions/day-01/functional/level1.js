const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]

// 1
products.forEach(e => {
    console.log(`The price of ${e.product} is ${e.price} euros.`)
})
// 2
products.forEach(e => {
    let price = ("" + e.price).trim() == '' ? "unknown." : e.price + " euros."
    console.log(`The price of ${e.product} is ${price}`)
})
// 3
let sum = 0;
products.forEach(e => {
    if (("" + e.price).trim() != '')
        sum += Number.parseInt(e.price)
})
console.log(`Sum is ${sum}`)
// 4
let prices = products.map(e => e.price)
console.log(prices)
// 5
prices = prices.filter(e => ("" + e).trim() != '')
console.log(prices)
// 6
sum = products.map(e => e.price).filter(e => (""+e).trim() != '').reduce((prev, curr) => prev + curr, 0)
console.log(`Sum is ${sum}`)
// 7
sum = products.reduce((prev, curr) => {
    if (("" + curr.price).trim() == '')
        return prev
    return prev + Number.parseInt(curr.price)
},0)
console.log(`Sum is ${sum}`)
// 8
console.log(products.find(e => ("" + e.price).trim() == ''))
// 9
console.log(products.findIndex(e => ("" + e.price).trim() == ''))
// 10
console.log(products.some(e => ("" + e.price).trim() == ''))
// 11
console.log(products.every(e => ("" + e.price).trim() != ''))
// 12
// Foreach loops through the array like a normal for of loop
// Map loops through the array and applies the given function on every element, then returns the array
// Filter loops through and filters out everything when the given function does not return true
// Reduce is almost the same as foldl in Haskell, i.e. it has a prev value and applies a given function on the current element, then adding it to prev.
// At the end it returns the prev element, i.e. the fully finished reduced value.
// 13
// Filter filters out elements which return false, find finds the first element which returns true
// and findIndex finds the index of the first elements which returns true
// 14
// Some returns true if one element returns true, every returns true if all elements return true. False otherwise.

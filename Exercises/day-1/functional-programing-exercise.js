const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: '' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ]
  
// // Print the price of each product using forEach
// const product = (i,item)=> {
//     products.forEach(item => {
//         console.log(item.price)   
//     });}
//     product()

// Print the product items as follows using forEach
// The price of banana is 3 euros.
// function prod (i,item) {
//     products.forEach((item) => {
//         console.log(`The price of ${item.product} is ${item.price} euros.`)
//     })
// }
// prod()


// Calculate the sum of all the prices using forEach

// const sum = (product) => {
//     let sum =0 
//     products.forEach((product) => sum += product.price)
//     console.log(sum)
// }
// sum()

// Create an array of prices using map and store it in a variable prices
const price =products.map((product) => product.price)
// console.log(price)

// Filter products with prices
// const product = products.filter((item) => item.price)
// console.log(product)

// Use method chaining to get the sum of the prices(map, filter, reduce)
// let total= 0
// const sum = price.map((item) => total+=item )
// const sum = price.filter((item) => total+=item )
// const sum = price.reduce((acc,cur) => acc+=cur)

// console.log(total)
// console.log(sum)


// Find the first product which doesn't have a price value
// const items = products.find ((product) => product.price === '')
// if (items){
//     console.log(items.product)
// }
//  else{
//     console.log('No product with price value')
//  }

// Find the index of the first product which does not have price value
// const product = products.indexOf ((product) => product.price === undefined)

// Check if some products do not have a price value
const items = products.some((product) => product.price === '' )

// Check if all the products have price value

// Explain the difference between forEach, map, filter and reduce

// Explain the difference between filter, find and findIndex

// Explain the difference between some and every
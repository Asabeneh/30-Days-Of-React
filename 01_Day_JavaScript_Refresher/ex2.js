let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text=text.replace(',', '')
text=text.replace('.', '')  
let words=text.split(' ')

console.log(words)
console.log(words.length)


//
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart)
//add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}
console.log(shoppingCart)

//add Sugar at the end of you shopping cart if it has not been already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}
console.log(shoppingCart)

//remove 'Honey' if you are allergic to honey
let isHoneyAllergic=true
if (isHoneyAllergic) {
    if (shoppingCart.indexOf('Honey')>-1) {
        shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
    }
}
console.log(shoppingCart)

//modify Tea to 'Green Tea'
let index=shoppingCart.indexOf('Tea')
if (index>-1) {
    shoppingCart[index]='Green Tea'
}
console.log(shoppingCart)
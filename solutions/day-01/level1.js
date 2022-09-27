//array
// 1
const arr = Array();
console.log(arr)
//2
const arr1 = Array(1,2,3,4,5);
console.log(arr1)
//3
console.log(arr.length)
//4
console.log(arr1[0] + " " + arr1[4] + " " + arr1[2])

//5
const mixedDataTypes = [
    'Asabeneh',
    250,
    true,
    false,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] },
  ]
  
  console.log(mixedDataTypes.length)

  //6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7-10
console.log(itCompanies)
console.log(itCompanies.length)
//11
itCompanies.map((i) => {
  i.toUpperCase();
})

//12
console.log(itCompanies.includes('Oracle'))


//level2
//1
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ')
console.log(words)
console.log(words.length)

//2
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)

shoppingCart.shift('Sugar')
console.log(shoppingCart)

shoppingCart.pop('Honey')
console.log(shoppingCart)

shoppingCart[2] = 'Milk Tea'
console.log(shoppingCart)

//3
countries.includes('Ethiopia')

//4
if(webTechs.includes('Sass')){
  console.log('Sass is a CSS preprocess')
}else{
  console.log(webTechs)
}

//5
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

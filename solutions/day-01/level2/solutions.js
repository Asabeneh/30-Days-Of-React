//Q2
let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words = sentence.replace(/[^\w\s]/g,'');
const wordsArray = words.split(" ");
const wordCount = wordsArray.length;
console.log(wordsArray)
console.log(wordCount);

//Q3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift("Meat");
if(shoppingCart.indexOf("Sugar")===-1){
    shoppingCart.push("Sugar");
}

const honeyIndex = 3;
shoppingCart.splice(3,1);
shoppingCart[2]="Green Tea";

//Q4



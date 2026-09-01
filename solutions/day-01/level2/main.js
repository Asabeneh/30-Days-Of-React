// level 2 solutions
//Q1
import countries  from "./countries";
import webTechs from "./web_techs";


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


if(countries.indexOf("Ethiopia")===-1){
    countries.push("Ethiopia");
}
else{
    console.log("ETHIOPIA");
}

//Q5

if(webTechs.indexOf("Sass")===-1){
    webTechs.push("Sass");
    console.log(webTechs);
}
else{
    console.log("Sass is CSS preprocess");
}

//Q6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);



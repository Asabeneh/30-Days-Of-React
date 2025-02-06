// import webTechs from "./web_techs.mjs";
// import countries from "./countries.mjs";

// // console.log(webTechs)
// // console.log(countries)

// let text =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

//   let words = text.split(" ") 
// console.log(words)
// console.log(words.length)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// if(shoppingCart[0]!="Meat"){
//     shoppingCart.unshift("Meat")
// }console.log(shoppingCart)

// if(shoppingCart[shoppingCart.length-1]!="Sugar"){
//     shoppingCart.push("Sugar")
// }console.log(shoppingCart)


// const Allergy = true

// if(Allergy==true){
//     let i = shoppingCart.indexOf('Honey')
//     shoppingCart.splice(i,1)
// }console.log(shoppingCart)

// let index = shoppingCart.indexOf('Tea')
// shoppingCart[index] = 'Green Tea'
// console.log(shoppingCart)

// if(countries.includes("Ethiopia")){
//     console.log("ETHIOPIA")
// }else{
//     countries.push('Ethiopia')
// }

// if(webTechs.includes('Sass')){
//     console.log("sass is a css preprocessor")
// }else{
//     webTechs.push("Sass")
// }console.log(webTechs)

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// let fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
let mostSkills = 0;
let mostSkilled = null;
let loggedin = [];
let pointsMoreThan50 = [];
let mern = [];
for ( const user in users){
    if(users[user].skills.length > mostSkills){
        mostSkills = users[user].skills.length;
        mostSkilled = user
    }
    if(users[user].isLoggedIn){
        loggedin.push(user)
    }
    if(users[user].points >= 50){
        pointsMoreThan50.push(user)
    }
    if(users[user].skills.includes('MongoDB','Express','React','Node')){
       mern.push(user)
    }
}
// console.log(mostSkilled)
// console.log(loggedin)
// console.log(pointsMoreThan50)
console.log(mern)

users.Ashim = {email : "ashimdebanth6767@gmail.com",
               skills :['HTML','CSS','Javascript','MongoDB','Express','React','Node'],
               age : 21,
               isLoggedIn : true,
               points : 40
}
console.log(users)
console.log(Object.keys(users))
console.log(Object.values(users))
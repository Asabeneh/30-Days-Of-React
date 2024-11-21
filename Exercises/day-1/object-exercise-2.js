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
// Find the person who has many skills in the users object.
//  let maxskill =0
//  let mostskilledperson=null
//  for (const user in users){
//     const skillcount = users[user].skills.length
//     if (skillcount > maxskill){
//         maxskill = skillcount
//         mostskilledperson = user 
//     }
//  }
//  console.log(`The person with the most skills is ${mostskilledperson} with ${maxskill} skills.`)

// Count logged in users,count users having greater than equal to 50 points from the following object.
// let looged = 0 
// let person = 0
// for (const user in users ){
//   if (users[user].points >= 50 ){
//     person++
    
//   }
//   if (users[user].isLoggedIn){
//     looged++
//   }
// }

// console.log(`Number of logged in users are ${looged}.  ${person} users are greater than 50`)

// Find people who are MERN stack developer from the users object
// const mern = ["MongoDB", "Express", "React", "Node"];
// let dev = 0;

// for (const user in users) {
//   if (mern.every(skill => users[user].skills.includes(skill))) {
//     dev++;
//   }
// }

// console.log(`Number of MERN stack developers are ${dev}.`);

// Set your name in the users object without modifying the original users object
const copyperson = Object.assign({}, users)
copyperson.Fitsum = {
  name: "Fitsum",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  points: 95,
  isLoggedIn: true,
};

// console.log(copyperson.Fitsum);

const key = Object.keys(copyperson)
console.log(`Key ${key}`)


// Get all the values of users object

// Use the countries object to print a country name, capital, populations and languages.
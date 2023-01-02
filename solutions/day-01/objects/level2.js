

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
let people = Object.entries(users); // get key/values pairs of object as an array
let obj = {names: [], skill: []}; // create new object to add new properties names and skills which are arrays
for(let i = 0; i < people.length; i++){ // loop through array and push names and skills to object
    obj.names.push(people[i][0]);
    obj.skill.push(people[i][1].skills.length);
}
let mostSkills = obj.skill.indexOf(Math.max(...obj.skill)); // find the index position of the skills array, that contains the largest skills set
let userMostSkills = obj.names[mostSkills]; // using the index, find name associated with the largest skill set.
console.log(`${userMostSkills} has ${Math.max(...obj.skill)} skills, which is the most!`)

// Count logged in users,count users having greater than equal to 50 points from the following object.
let loggedIn = 0, points = 0;
for(const people in users){
    if(users[people].isLoggedIn == true){
        loggedIn++;
    }
    if(users[people].points >= 50){
        points++;
    }
}
console.log(`The number of people logged in is ${loggedIn}.\nThe number of people with 50 points or more is ${points}.`);

// Find people who are MERN stack developer from the users object
let developers = [];
for(const people in users){
    let skills =  users[people].skills;
    switch (true) {
        case skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node'):
            developers.push(people);
            break;
        default:
            break;
    }
}
console.log(`The people who are MERN stack developers are ${developers[0]} & ${developers[1]}`);

// Set your name in the users object without modifying the original users object.
let copy = Object.assign({},users);
copy.Jaspreet = {};

// Get all keys or properties of users object.
console.log(Object.keys(users));

// Get all the values of users object.
console.log(Object.values(users));

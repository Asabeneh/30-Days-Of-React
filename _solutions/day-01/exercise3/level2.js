// Exercise 3 - Level 2

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

getMostSkilled = function () {
    let maxSkillsPerson = null;
    let maxSkillsCount = 0;

    Object.keys(users).forEach((person) => {
        const skillsCount = users[person].skills.length;
        if (skillsCount > maxSkillsCount) {
            maxSkillsPerson = person;
            maxSkillsCount = skillsCount;
        }
    });

console.log(maxSkillsPerson);
}

getMostSkilled();


const copyUsers = Object.assign({}, users)

const newUser = {
    email: 'newuser@example.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 22,
    isLoggedIn: true,
    points: 35
  };
  
copyUsers['NewUser'] = newUser;


const keys = Object.keys(copyUsers)
const values = Object.values(copyUsers)
const entries = Object.entries(copyUsers)


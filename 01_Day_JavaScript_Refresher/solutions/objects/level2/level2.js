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
const userWithMaxSkills = (users) => Object.entries(users)
  .reduce((res, [username, data]) => {
    console.log(res)
    if (data.skills.length > res.maxSkills) {
      return {
        maxSkills: data.skills.length,
        user: {
          [username]: data
        }
      }
    }
    return res
  }, {
    maxSkills: -1,
    user: undefined
  }).user


/**
 *  Count logged in users,count users having greater than equal 
 *   to 50 points from the following object.
 * */
const usersIsLogged = Object.values(users).filter(user => user.isLoggedIn).length
const usersUnderPoints = Object.values(users).filter(user => user.points >= 50).length

console.log(`User logged: ${usersIsLogged}, users having greater than equal to 50 points ${usersUnderPoints}`)


// Find people who are MERN stack developer from the users object
const usersMERNStack = Object.values(users)
  .filter(user => user.skills.includes('MongoDB', 'Express', 'React', 'Node'))


/**
 *  Set your name in the users object without modifying the 
 *  original users object
 */
const Nangazaki = Object.assign(users.Asab)
Nangazaki.email = 'heldercambuta44@gmail.com'
Nangazaki.skills = ['HTML', 'CSS', 'JavaScript', 'VueJS', 'TailwindCSS']
Nangazaki.age = 21


// Get all keys or properties of users object
const keys = Object.keys(users)

// Get all the values of users object
const values = Object.values(users)

// Use the countries object to print a country name, capital, populations and languages.


console.log(dog.name,dog['color'])

dog.breed = 'rot';
dog.GetDogInfo = function(){
  return `this dogs name is ${this.name} and it has good ${this.color} color it has ${this.legs} legs.`;
}

console.log(dog.GetDogInfo());

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

const arrUsers = Object.entries(users);
console.log(arrUsers)

const valUsers = Object.values(users);
console.log(valUsers)

const assUsers = Object.assign(users);
console.log(assUsers)

const keyUsers = Object.keys(users);
console.log(keyUsers)

const rafik = [];

arrUsers.map( item => {
  console.log(item[0])
 const newObj = {
   itemName : item[0],
   itemValues : item[1]
 }
 rafik.push(newObj);
})

console.log(rafik);

console.log( rafik.sort( (a,b) => b.itemValues.skills.length - a.itemValues.skills.length)[0].itemName);

console.log(rafik.find( item => item.itemValues.skills.includes('React')))


// Find the Mern developer
function findMernDev( name,arr ){
  if( arr.indexOf('React') !== -1 &&  arr.indexOf('Node') !== -1 &&  arr.indexOf('MongoDB') !== -1 &&  arr.indexOf('Express') !== -1 ){
    console.log( name )
  }
}

for( const item of rafik ){

  findMernDev( item.itemName, item.itemValues.skills )

}
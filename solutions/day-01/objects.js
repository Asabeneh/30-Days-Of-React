//level1
let dog = {
    name: 'dog',
    legs: 4,
    color: 'black',
    bark: function () {
        return 'woof woof'
    }
}
console.log(dog);
console.log(dog[name]);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.bark());

dog.breed = 'hush'

dog.getDogInfo = function () {
    return `I am ${this.name}, I have ${this.legs} legs. My color is ${this.color}, and my bark is ${this.bark()}.`
}
console.log(dog.getDogInfo());

//level 2
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
  console.log(Object.keys(users))
  
  Object.keys(users).map((user) => {
      if(users[user].skills.length > 2) console.log(users[user].skills)
  })

  users["homo"] = {  
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
}

console.log(users["homo"]);

//3
Object.keys(users).map((user) => {
    if(users[user].skills.includes("MongoDB")) console.log(users[user].email)
})

//5
Object.keys(users).map((user) => {
    console.log(users[user])
})

//6
console.log(Object.values(users))

const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
]

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
]

function signUp(newUser) {
  var hasThisVal = false
  users.map((user) => {  
      // console.log(newUser._id)
      // console.log(user._id)
      if(newUser._id === user._id){
          // return ("user already exists")
          hasThisVal = true;
          return;
      }
  })
  // users.push(newUser);
  if(hasThisVal){
      return "user already exists"
  }else{
      users.push(newUser); 
      return "user added"
  }
  console.log(users)
}

signUp(
    {
  _id: 'efmr',
  username: 'Martha',
  email: 'martha@martha.com',
  password: '123222',
  createdAt: '08/01/2020 9:50 AM',
  isLoggedIn: false,
}
)

//3 a
//The products array has three elements and each of them has six properties.
//  a. Create a function called rateProduct which rates the product
function rateProduct(productId, userId, rate) {
  products.map((product) => {
    if(product._id === productId){
      product.ratings.push({userId : userId, rate: rate})  
      // console.log(userId, rate)
    }
  })
  console.log(products)
}

rateProduct("hedfcg", "fg12cy", 7)

//b
function averageRating(products) {
  products.map((product) => {
    let totalRat = 0;
      product.ratings.map((user) => {
        avgRating += user.rate;
        total++;
      // console.log(user.rate)
    })
    // console.log(product.ratings)
  })
  return avgRating/total;
}

averageRating(products)
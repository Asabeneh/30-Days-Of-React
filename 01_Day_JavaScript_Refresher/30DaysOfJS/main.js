///////// EXERCISE 1 //////////////////////////////
const arr = Array() // Step 1

const fiveArr = Array(5) // Step 2
var fiveArrLen = fiveArr.length // Step 3

var firstItem = fiveArr[0]
var secondItem = fiveArr[2]
var thirdITem = fiveArr[4] // Step 4

const mixedDataTypes = [1, "Hello", 'World', 3.14, 7, false]
var mixedDataTypesLen = mixedDataTypes.length // Step 5

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"] // Step 6
console.log(itCompanies) // Step 7
console.log(itCompanies.length) // Step 8
console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length - 1]) // Step 9
console.log(itCompanies.join(' ')) // Step 10

for(const company of itCompanies)
{
    console.log(company.toUpperCase())
} // Step 11

console.log(itCompanies.join(', ')) // Step 12

let indexOfCompany = itCompanies.indexOf("Facebook")
if(indexOfCompany != -1)
{
    console.log(indexOfCompany)
}
else
{
    console.log("not found")
} // Step 13

// TODO: Step 14

itCompanies.sort() // Step 15
itCompanies.reverse() // Step 16
itCompanies.slice(0, 3) // Step 17
itCompanies.slice(4, 7) // Step 18
// TODO: Step 19

itCompanies.shift() // Step 20
itCompanies.splice(3, 1)// Step 21
itCompanies.pop() // Step 22
itCompanies.splice() // Step 23


///////// EXERCISE 2 //////////////////////////////
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(' ')
console.log(words)
console.log(words.length) // Step 2

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.pop()
shoppingCart.push('Sugar')
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart) // Step 3

let ethiopiaIndex = countries.indexOf("Ethiopia")
if (ethiopiaIndex != -1)
{
    console.log('ETHIOPIA')
}
else
{
    countries.push("Ethiopia")
} // Step 4

let sassIndex = webTechs.indexOf("Sass")
if (sassIndex != -1)
{
    console.log('Sass is a CSS preprocess')
}
else
{
    webTechs.push('Sass')
    console.log(webTechs)
} // Step 5

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)

console.log(fullStack) // Step 6

//////// IF STATEMENTS EXERCISE 1 ////////////////
let userAge = prompt("Enter your age: ")
userAge >= 18
    ? console.log("You are old enough to drive")
    : console.log("You are left with",  18 - userAge, "years to drive.") // Step 1

// TODO: find a way to say "You are 1 year older/younger than me"
let myAge = 22
userAge >= myAge
    ? console.log("You are", userAge - myAge, "years older than me")
    : console.log("You are", myAge - userAge, "years younger than me") // Step 2

let a = 4
let b = 3
if (a > b)
{
    console.log("a is greater than b")
}
else
{
    console.log("a is less than b")
}

a > b
    ? console.log("a is greater than b")
    : console.log("a is less than b") // Step 3

let input = prompt("Enter a number: ")
input % 2 == 0
    ? console.log(input, "is an even number")
    : console.log(input, "is an odd number") // Step 4

///////// EXERCISE 2 ////////////////////////////////
let userGrade = prompt("Enter your score:")
switch (true)
{
    case userGrade >= 90: // 90-100, A
        console.log("You got an A")
        break
    case userGrade >= 70 && userGrade < 80: // 70-89, B
        console.log("You got a B")
        break
    case userGrade >= 60 && userGrade < 70: // 60-69, C
        console.log("You got a C")
        break
    case userGrade >= 50 && userGrade < 60: // 50-59, D
        console.log("You got a D")
        break
    case userGrade >= 0 && userGrade < 50: // 0-49, F
        console.log("You got an F")
        break
    default:
        console.log("Entered score was not a valid score")
} // Step 1

let month = prompt("Enter a month:")
let monthLowerCase = month.toLowerCase()
let isLeapYear = prompt("Is it a leap year? (Y/N)").toLowerCase()
switch (monthLowerCase)
{
    case 'september':
        console.log(month, "is in autumn")
        console.log(month, "has 30 days")
        break
    case 'october':
        console.log(month, "is in autumn")
        console.log(month, "has 31 days")
        break
    case 'november':
        console.log(month, "is in autumn")
        console.log(month, "has 30 days")
        break
    case 'december':
        console.log(month, "is in winter")
        console.log(month, "has 31 days")
        break
    case 'january':
        console.log(month, "is in winter")
        console.log(month, "has 31 days")
        break
    case 'february':
        console.log(month, "is in winter")

        if (isLeapYear == 'y')
        {
            console.log(month, "has 29 days")
        }
        else if (isLeapYear == 'n')
        {
            console.log(month, "has 28 days")
        }
        else
        {
            console.log("Input for leap year was invalid")
        }

        break
    case 'march':
        console.log(month, "is in spring")
        console.log(month, "has 31 days")
        break
    case 'april':
        console.log(month, "is in spring")
        console.log(month, "has 30 days")
        break
    case 'may':
        console.log(month, "is in spring")
        console.log(month, "has 31 days")
        break
    case 'june':
        console.log(month, "is in summer")
        console.log(month, "has 30 days")
        break
    case 'july':
        console.log(month, "is in summer")
        console.log(month, "has 31 days")
        break
    case 'august':
        console.log(month, "is in summer")
        console.log(month, "has 31 days")
        break
    default:
        console.log(month, "is not a valid month")
} // Step 2 (this is also step 1 in Exercise 3)

let day = prompt("What is the day today?")
let dayLowerCase = day.toLowerCase()
switch (dayLowerCase)
{
    case 'saturday':
        console.log(day, "is a weekend")
        break
    case 'sunday':
        console.log(day, "is a weekend")
        break
    default:
        console.log(day, "is a working day")
} // Step 3

///////// OBJECTS EXERCISE 1 ////////////////
const dog = 
{
    name: "Mike",
    legs: 4,
    color: "White",
    age: 9,
    breed: "Husky",
    bark: function ()
    {
        return "woof woof"
    },
    getDogInfo: function ()
    {
        return `I am a ${this.color} ${this.breed} named ${this.name}. I am ${this.age} years old and have ${this.legs} legs.`
    }

} // Step 3/5
console.log(dog) // Step 2

let dogName = dog.name
let dogLegs = dog.legs
let dogColor = dog.color
let dogAge = dog.age
let dogBark = dog.bark() // Step 4

console.log(dog.getDogInfo())

///////// EXERCISE 2 ////////////////
const users = 
{
    Alex:
    {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab:
    {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook:
    {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel:
    {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John:
    {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas:
    {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul:
    {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
}

let maxSkills = users.Alex.skills.length
let userWithMostSkills = Object.assign({}, users.Alex)
let numLoggedInUsers = 0
let numHighScoreUsers = 0
let mernDevs = []
for (const user in users)
{
    // Check if current user has more skills than current leader
    // Switch current user to new leader if so
    if (users[user].skills.length > maxSkills)
    {
        userWithMostSkills = user
        maxSkills = users[user].skills.length
    }
    
    if (users[user].isLoggedIn)
    {
        numLoggedInUsers++
    }
    
    if (users[user].points >= 50)
    {
        numHighScoreUsers++
    }
    
    if (users[user].skills.includes('MongoDB') && users[user].skills.includes('Express')
        && users[user].skills.includes('React') && users[user].skills.includes('Node'))
    {
        mernDevs.push(user)
    }
}
console.log(userWithMostSkills) // Step 1

console.log(numLoggedInUsers)
console.log(numHighScoreUsers) // Step 2

console.log(mernDevs) // Step 3

const me = {Johnathan: {}}
const copyUsers = Object.assign(me, users)
console.log(copyUsers) // Step 4

let usersKeys = Object.keys(users) // Step 5

let userValues = Object.values(users) // Step 6

//////////////// EXERCISE 3 ////////////////////
const personAccount = 
{
    firstName: 'John',
    lastName: 'Smith',
    incomes: 
    {
        work: 1000.90,
        freelance: 40.00
    },
    expenses:
    {
        food: 100.45,
        electric: 45.00,
        phone: 20.00,
        mortgage: 563.00
    },
    
    totalIncome: function ()
    {
        let total = 0.00
        for (const income in this.incomes)
        {
            total += this.incomes[income]
        }
        return total
    },
    totalExpenses: function ()
    {
        let total = 0.00
        for (const expense in this.expenses)
        {
            total += this.expenses[expense]
        }
        return total
    },
    accountInfo: function ()
    {
        return `This account is owned by ${this.firstName} ${this.lastName}. They earn $${this.totalIncome()} and spend $${this.totalExpenses()}`
    },
    addIncome: function (desc, amount)
    {
        this.incomes.desc = amount
    },
    addExpense: function (desc, amount)
    {
        this.expenses.desc = amount
    },
    accountBalance: function ()
    {
        return this.totalIncome() - this.totalExpenses()
    }
} // Step 1

const updatedUsers = [
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

updatedUsers.signUp = function (username, email, password)
{
    for (const user of updatedUsers)
    {
        if (user.username == username)
        {
            return "You already have an account"
        }
    }
    updatedUsers.push({username: this.username, email: this.email, password: this.password})
    return "Your account has been created"
} // Step 2

products.rateProduct = function (productId, userID, rating)
{
    for (const product of products)
    {
        if (product._id.localeCompare(productId) === 0)
        {
            product.ratings.push({userId: userID, rate: rating})
            break
        }
    }
} // Step 3a

products.averageRating = function (productId)
{
    let total = 0.0
    let count = 0
    for (const product of products)
    {
        if (product._id.localeCompare(productId) === 0)
        {
            for (const rating of ratings)
            {
                total += rating.rate
                count++
            }
        }
        break
    }
    return avg / count
} // Step 3b

products.likeProduct = function (productId, userId, liked)
{
    for (const product in products)
    {
        if (product._id.localeCompare(productId) === 0)
        {
            if (liked && !product.likes.includes(userId))
            {
                product.likes.push(userId)
            }
            else if (!liked && product.likes.includes(userId))
            {
                product.likes.remove(product.likes.indexOf(userId), 1)
            }
        }
    }
} // Step 4

/////////////////// FUNCTIONS EXERCISE 1 //////////////////////////////////
function generateFullName (firstName, lastName)
{
    let fullName = firstName + ' ' + lastName
    return fullName 
} // Step 1

function addNumbers (a, b)
{
    return a + b
} // Step 2

function areaOfCircle (r)
{
    let pi = 3.14
    return pi * r * r
} // Step 3

function convertCelciusToFahrenheight (celciusTemp)
{
    return celciusTemp * (9 / 5) + 32
} // Step 4

function calculateBmi (weight, height)
{
    let bmi = weight / (height * height)

    switch (true)
    {
        case (bmi >= 30):
            return "Obese"
            break
        case (bmi >= 25 && bmi < 30):
            return "Overweight"
            break
        case (bmi >= 18.5 && bmi < 25):
            return "Normal"
            break
        case (bmi < 18.5):
            return "Underweight"
            break
    }
} // Step 5

function checkSeason (month)
{
    switch (month.toLowerCase())
    {
        case 'january':
            return 'Winter'
            break
        case 'february':
            return 'Winter'
            break
        case 'march':
            return 'Spring'
            break
        case 'april':
            return 'Spring'
            break
        case 'may':
            return 'Spring'
            break
        case 'june':
            return 'Summer'
            break
        case 'july':
            return 'Summer'
            break
        case 'august':
            return 'Summer'
            break
        case 'september':
            return 'Autumn'
            break
        case 'october':
            return 'Autumn'
            break
        case 'november':
            return 'Autumn'
            break
        case 'december':
            return 'Winter'
            break
        default:
            return "Invalid month"
    }
}

///////////////// EXERCISE 2 //////////////////////////
function solveQuadEquation (a = 0, b = 0, c = 0)
{
    let sqrt = Math.sqrt((b * b) - (4 * a * c))

    if (sqrt < 0 || a == 0)
    {
        return NaN
    }
    
    let firstRoot = ((-b + Math.sqrt(sqrt)) / (2 * a))
    let secondRoot = ((-b - Math.sqrt(sqrt)) / (2 * a))

    if (firstRoot == secondRoot)
    {
        return firstRoot
    }

    return [firstRoot, secondRoot]
} // Step 1

function printArray (arr)
{
    for (const i of arr)
    {
        console.log(i)
    }
} // Step 2

function showDateTime ()
{
    console.log(new Date())
} // Step 3

// TODO: Step 4

function reverseArray (arr)
{
    let returnArr = []
    for (let i = arr.length - 1; i >= 0; i--)
    {
        returnArr.push(arr[i])
    }

    return returnArr
} // Step 5

function capitalizeArray (arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        arr[i] = arr[i].toUpperCase
    }
    
    return arr
} // Step 6

function addItem (arr, item)
{
    arr.push(item)

    return arr
} // Step 7

function removeItem (arr, itemIndex)
{
    arr.remove(itemIndex, 1)

    return arr
} // Step 8

function evensAndOdds (int)
{
    let numEvens = 0
    let numOdds = 0
    for (let i = 0; i <= int; i++)
    {
        if (i % 2 == 0)
        {
            numEvens++
        }
        else
        {
            numOdds++
        }
    }

    console.log(`The number of odds are ${numOdds}. The number of evens are ${numEvens}`)
} // Step 9

function sumAllNums ()
{
    let sum = 0
    for (let i = 0; i < arguments.length; i++)
    {
        sum += arguments[i]
    }

    return sum
} // Step 10

function getRandomInt(max)
{
    return Math.floor(Math.random() * max)
}

function getRandomArbitrary(min, max)
{
    return Math.random() * (max - min) + min
}

function userIdGenerator (idLength)
{
    let id = ''
    
    let counter = 0
    while (counter < idLength)
    {
        let char = ''
        let charType = getRandomInt(3)

        // Get random digit
        if (charType == 0)
        {
            char = String.fromCharCode(getRandomArbitrary(48, 58))
        }
        // Get random upper case letter
        else if (charType == 1)
        {
            char = String.fromCharCode(getRandomArbitrary(65, 91))
        }
        // Get random lower case letter
        else
        {
            char = String.fromCharCode(getRandomArbitrary(97, 123))
        }

        id += char
        counter++
    }
    return id
}

///////////////////////////// EXERCISE 3 /////////////////////////////
function userIdGeneratedByUser ()
{
    let numIds = prompt("How many IDs do you want to generate?")
    let numChars = prompt("How many characters in your ID(s)?")

    let ids = ''

    let counter = 0
    while (counter < numIds)
    {
        ids += userIdGenerator(numChars)
        ids += '\n'
        
        counter++
    }

    return ids
}

console.log(userIdGeneratedByUser()) // Step 1

function generateColors(colorType, numColors)
{
    let counter = 0
    let colors = []

    while (counter < numColors)
    {
        if (colorType == 'hexa')
        {

        }
        else if (colorType == 'rgb')
        {
            
        }
    }
} // Step 2

/////////////////// DESTRUCTING EXERCISE //////////////////////////////
function getPersonInfo (person)
{
    const {firstName, lastName, age, country, job, skills:[firstSkill, ...skills], languages:[firstLan, ...lans]} = person

    return `${firstName} ${lastName} lives in ${country}. They are ${age} years old. They are an ${job}. They teach ${skills},and ${firstSkill}. They speak ${lans},and ${firstLan}.`
}

const person = 
{
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

console.log(getPersonInfo(person))

// foreach
const moreCountries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
moreCountries.forEach((country, i) => console.log(i, country.toUpperCase()))

// map
const newCountries = moreCountries.map(function (country)
{
    return country.toUpperCase()
})
const countriesLength = moreCountries.map((country) => country.length)
console.log(newCountries)
console.log(countriesLength)

// filter
countriesWithLand = moreCountries.filter(country => country.includes('land'))
console.log(countriesWithLand)

// reduce
const listedCountries = moreCountries.reduce(function (accumulator, currentValue)
{
    return accumulator + ", " + currentValue
})
console.log(listedCountries)

// find
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const firstEvenNum = numbers.find(num => num % 2 === 0)
const firstOddNum = numbers.find(num => num % 2 !== 0)
console.log(firstEvenNum)
console.log(firstOddNum)

// findIndex
const index = moreCountries.findIndex(country => country.length === 6)
console.log(index)

// some
const someAreEven = numbers.some(n => n % 2 === 0)
console.log(someAreEven)

// every
const allAreEven = numbers.every(n => n % 2 === 0)
console.log(allAreEven)

//////////// FUNCTIONAL PROGRAMMING EXERCISE ///////////////////////
const moreProducts = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

moreProducts.forEach((product) => console.log(product.price)) // Step 1
moreProducts.forEach(function (product) {
    if (product.price === ' ' || product.price === '')
    {
        console.log(`The price of ${product.product} is unknown`)
    }
    else
    {
        console.log(`The price of ${product.product} is ${product.price}`)
    }
}) // Step 2

let sum = 0
moreProducts.forEach(function (product) {
    if (product.price !== ' ' && product.price !== '')
    {
        sum += product.price
    }
}) // Step 3

const prices = moreProducts.map(product => product.price) // Step 4

productsWithPrices = moreProducts.filter(product => product.price > 0)
console.log(productsWithPrices) // Step 5

const priceSum = productsWithPrices.map(product => product.price).reduce((acc, curr) => acc + curr) // Step 6

// TODO: Step 7

const itemWithNoPrice = moreProducts.find(product => product.price === ' ' || product.price === '') // Step 8

const itemWithNoPriceIndex = moreProducts.findIndex(product => product.price === ' ' || product.price === '') // Step 9

const someNoPrice = moreProducts.some(product => product.price === ' ' || product.price === '') // Step 10

const allHavePrice = moreProducts.every(product => product.price > 0) // Step 11

////////// CLASSES EXERCISE 1 //////////////////////////
class Animal
{
    constructor(name, age, color, legs)
    {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }

    getName()
    {
        return this.name
    }
    getAge()
    {
        return this.age
    }
    getColor()
    {
        return this.color
    }
    getLegs()
    {
        return this.legs
    }
    setName(name)
    {
        this.name = name
    }
    setAge(age)
    {
        this.age = age
    }
    setColor(color)
    {
        this.color = color
    }
    setLegs(legs)
    {
        this.legs = legs
    }
    describeAnimal()
    {
        return `This animal is ${this.name}. It is ${this.age} years old, has ${this.legs} legs, and is ${this.color}`
    }
    
    speak()
    {
        return 'ROAR' 
    }
} // Step 1

class Dog extends Animal
{
    constructor(name, age, color, legs, breed)
    {
        super(name, age, color, legs)
        this.breed = breed
    }
    getBreed()
    {
        return this.breed
    }
    setBreed(breed)
    {
        this.breed = breed
    }
    speak()
    {
        return 'WOOF'
    }
}
class Cat extends Animal
{
    constructor(name, age, color, legs, breed)
    {
        super(name, age, color, legs)
        this.breed = breed
    }
    getBreed()
    {
        return this.breed
    }
    setBreed(breed)
    {
        this.breed = breed
    }
    speak()
    {
        return 'MEOW'
    }
} // Step 2 & Excercise 2, Step 1

///////////////////////// EXERCISE 3 /////////////////////////////////////
class Statistics
{
    constructor(set)
    {
        this.set = set
    }
    count()
    {
        return this.set.length
    }
    sum()
    {
        let sum = 0
        for(const n of this.set)
        {
            sum += n
        }
        return sum
    }
    min()
    {
        let min = this.set[0]
        for(const n of this.set)
        {
            if(n < min)
            {
                min = n
            }
        }
        return min
    }
    max()
    {
        let max = this.set[0]
        for(const n of this.set)
        {
            if(n > max)
            {
                max = n
            }
        }
        return max
    }
    range()
    {
        return this.max() - this.min()
    }
    mean()
    {
        return Math.round(this.sum() / this.count())
    }
    median()
    {
        let sortedSet = this.set.sort()
        // Find the one middle value if set is of odd length
        if (sortedSet.length % 2 !== 0)
        {
            let middleIndex = Math.floor(sortedSet.length / 2)
            console.log(middleIndex)
            return sortedSet[middleIndex]
        }
        // Find the two middle values if set is of even length; find their mean
        else
        {
            let leftMiddleIndex = sortedSet.length / 2 - 1
            let rightMiddleIndex = sortedSet.length / 2
            console.log(leftMiddleIndex, rightMiddleIndex)
            return (sortedSet[leftMiddleIndex] + sortedSet[rightMiddleIndex]) / 2
        }
    }
    mode()
    {
        let sortedSet = this.set.sort()
        let currentCount = 1
        let maxCount = 0
        let modeNums = []
        for(let i = 0; i <= sortedSet.length; i++)
        {
            // Don't check index before if at beginning of set
            if (i === 0)
            {
                continue
            }
            // Used in case mode happens to be the last number in the set
            else if (i === sortedSet.length)
            {
                if (currentCount >= maxCount)
                {
                    if (currentCount > maxCount)
                    {
                        modeNums = []
                    }
                    maxCount = currentCount
                    modeNums.push(sortedSet[i - 1])
                }
            }
            // Update current count if current element is same as previous element
            if (sortedSet[i - 1] === sortedSet[i])
            {
                currentCount++
            }
            // Assume loop found new number at current element
            else
            {
                // console.log(sortedSet[i - 1], currentCount)
                if (currentCount >= maxCount)
                {
                    if (currentCount > maxCount)
                    {
                        modeNums = []
                    }
                    maxCount = currentCount
                    modeNums.push(sortedSet[i - 1])
                }
                currentCount = 1
            }
        }
        
        return {'mode': modeNums, 'count': maxCount}
    }
    var()
    {
        let sum = 0
        for(let i = 0; i < this.set.length; i++)
        {
            sum += (this.set[i] - this.mean()) ** 2
        }

        return (sum / (this.count() - 1)).toPrecision(3)
    }
    std()
    {
        return Math.sqrt(this.var()).toPrecision(3)
    }
    freqDist()
    {
        let freqDist = []
        let sortedSet = this.set.sort()
        let count = 1
        for(let i = 0; i <= sortedSet.length; i++)
        {
            // Skip over the first element
            if (i === 0)
            {
                continue
            }
            // Used to include last number in set in freq dist calculations
            else if (i === sortedSet.length)
            {
                let freq = [count / sortedSet.length * 100, sortedSet[i - 1]]
                freqDist.push(freq)
            }

            // Count the amount of identical numbers; use this count in frequency calculations
            if (sortedSet[i - 1] === sortedSet[i])
            {
                count++
            }
            // Calculate frequency and push to freq dist array
            else
            {
                let freq = [count / sortedSet.length * 100, sortedSet[i - 1]]
                freqDist.push(freq)
                count = 1
            }
        }
        return freqDist
    }
    describe()
    {
        return `Count: ${this.count()}
        Sum: ${this.sum()}
        Min: ${this.min()}
        Max: ${this.max()}
        Mean: ${this.mean()}
        Median: ${this.median()}
        Mode: ${this.mode()}
        Variance: ${this.var()}
        Standard Deviation: ${this.std()}
        Frequency Distribution: ${this.freqDist()}
        `
    }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

const statistics = new Statistics(ages)
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ', statistics.var()) // 18.3
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Frequency Distribution: ', statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)] */
console.log(statistics.describe())

const dog = {};
console.log(dog);
dog.name = 'Spot';
dog.legs = 4;
dog.color = 'spotted';
dog.age = 4;
dog.bark = function () {
    return 'woof woof';
};
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());
dog.breed = 'Dalmation';
dog.getDogInfo = function () {
    return `Hi! My name is ${this.name}! I am ${this.age} years old!`
};
console.log(dog.getDogInfo())

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

console.log(users.Alex.skills.length);
console.log(users.Asab.skills.length);
console.log(users.Brook.skills.length);
console.log(users.Daniel.skills.length);
console.log(users.John.skills.length);
console.log(users.Thomas.skills.length);
console.log(users.Paul.skills.length);


let usersLoggedIn = 0;
let pointsOver50 = 0;
if (users.Alex.isLoggedIn) {
    usersLoggedIn++;
}
if (users.Asab.isLoggedIn) {
    usersLoggedIn++;
}
if (users.Brook.isLoggedIn) {
    usersLoggedIn++;
}
if (users.Daniel.isLoggedIn) {
    usersLoggedIn++;
}
if (users.John.isLoggedIn) {
    usersLoggedIn++;
}
if (users.Thomas.isLoggedIn) {
    usersLoggedIn++;
}
if (users.Alex.points >= 50) {
    pointsOver50++;
}
if (users.Asab.points >= 50) {
    pointsOver50++;
}
if (users.Brook.points >= 50) {
    pointsOver50++;
}
if (users.Daniel.points >= 50) {
    pointsOver50++;
}
if (users.John.points >= 50) {
    pointsOver50++;
}
if (users.Thomas.points >= 50) {
    pointsOver50++;
}
console.log(usersLoggedIn)
console.log(pointsOver50)

// MongoDB, Express, React, Node

let mernDevs = 0;
if (users.Asab.skills.includes('MongoDB')
    && users.Asab.skills.includes('Express')
    && users.Asab.skills.includes('React')
    && users.Asab.skills.includes('Node'))
    mernDevs++;
if (users.Alex.skills.includes('MongoDB')
    && users.Alex.skills.includes('Express')
    && users.Alex.skills.includes('React')
    && users.Alex.skills.includes('Node'))
    mernDevs++;

console.log(mernDevs);

users.Libby = {
    email: 'lsmarchetti01@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React',
        'SQL', 'MongoDB', 'Express', 'Java', 'Springboot', 'Node'],
    age: 31,
    isLoggedIn: true,
    points: 60
}

console.log(users.Libby);

const entries = Object.entries(users)
console.log(entries)

const countries2 = {
    USA: {
        capital: 'Washington DC',
        population: 1000,
        language: ['English', 'Spanish', 'Node']
    }
}

console.log(countries2.USA);

const personAccount = {
    firstName: 'Bob',
    lastName: 'Bobert',
    incomes: [53, 100, 98, 34],
    expenses: [5, 66, 100],
    totalIncome: function (incomes) {
        const initial = 0;
        let total = incomes.reduce((previous, current) =>
            previous + current, initial
        )
        return total;
    },
    totalExpense: function (expenses) {
        const initial = 0;
        let total = expenses.reduce((previous, current) =>
            previous + current, initial
        )
        return total;
    },
    addIncome: function (income) {
        this.incomes.push(income);
    },
    addExpense: function (expense) {
        this.expenses.push(expense)
    },
    accountBalance: function () {
        let balance = this.totalIncome(this.incomes) - this.totalExpense(this.expenses)
        return balance;
    },
    accountInfo: function () {
        console.log(`${this.firstName} ${this.lastName}, your account balance is
        ${this.accountBalance()}`)
    }


}

console.log(personAccount.totalIncome(personAccount.incomes))
console.log(personAccount.totalExpense(personAccount.expenses))
personAccount.accountInfo();

const usersArr = [
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
];

const userToAdd = {
    _id: 'afwogf',
    username: 'bob',
    email: 'bob@bob.com',
    passowrd: '5544234'
};

const userNotToAdd = {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
};

const signUp = (newUser) => {
    let userExists = false;
    usersArr.forEach(existingUser => {
        if (newUser._id == existingUser._id) {
            console.log('User already exists');
            userExists = true;
        }
    })
    if (!userExists) {
        console.log('User added');
        usersArr.push(newUser);
    }
}
signUp(userToAdd)
console.log(usersArr)

const signIn = (user) => {
    user.isLoggedIn = true;
    console.log(user.isLoggedIn)
}


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
        description: 'Smart TV: Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy'],
    },
]

const rateProduct = (user, product) => {
    for (let i = 0; i < products.length; i++) {
        if (product._id == products[i]._id) {
            product.ratings.push({ userId: user._id, rate: 1 });
            console.log(products[i].ratings);
        }
    }
}

rateProduct(userNotToAdd, products[1]);

const averageRating = (product) => {
    const initial = 0;
    console.log(average)
}

averageRating(products[0])
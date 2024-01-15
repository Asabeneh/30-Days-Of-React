const personAccount = {
    firstName: "Joe",
    lastName: "Dover",
    incomes: [0],
    expenses: [0],
    
    totalIncome: function() {
        return this.incomes.reduce((acc, val) => acc+val);
    },
    
    totalExpense: function() {
        return this.expenses.reduce((acc, val) => acc+val);
    },
    
    accountInfo: function() {
        return `Name: ${this.lastName} ${this.firstName} In/Out: ${this.totalIncome()}/${this.totalExpense()}`;
    },
    
    addExpense: function(expense) {
        this.expenses.push(expense);
    },
    
    accountBalance: function() {
        return this.totalIncome() - this.totalExpense();
    }
}

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

function signUp(username, email, password) {
    if (accountExists(email)) {
        console.log("This account already exists");
        return;
    }
    const newUser = {};
    newUser._id = userIdGenerator();
    newUser.username = username;
    newUser.email = email;
    newUser.password = password;
    newUser.createdAt = showDateTime();
    isLoggedIn = false;
}

function showDateTime() {
    const format = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    };
    console.log(Intl.DateTimeFormat(undefined, format).format(new Date()).replace(',', ''));
}

function userIdGenerator() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    result = "";
    for (let i = 0; i < 7; i++) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    console.log(result);
    return result;
}

/**
 * Checks if the account already exists
 * returns boolean
 */
function accountExists(email) {
    users.forEach(user => {
        if (user.email == email) {
            return true;
        }
    });
    return false;
}

function rateProduct(userID, productID, rating) {
    products.forEach(product => {
        if (product._id == productID) {
            product.ratings.push({userId: userID, rate: rating});
            return;
        }
    });
    console.log("There is no such product");
}

function averageRating() {
    
}
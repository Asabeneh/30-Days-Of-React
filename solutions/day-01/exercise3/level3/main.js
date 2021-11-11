//1
const personAccount = {
    firstName: 'Andrew',
    lastName: 'Marquee',
    incomes: [
        {
            income: 1500,
            description: 'Taxi driver'
        },
        {
            income: 1000,
            description: 'Mechanic'
        }
    ],
    expenses: [
        {
            expense: 100,
            description: 'Buy clothes'
        },
        {
            expense: 2300,
            description: 'Buy laptop'
        }
    ],
    totalIncome: () => personAccount.incomes.reduce((res, { income }) => res += income, 0),
    totalExpense: () => personAccount.expenses.reduce((res, { expense }) => res += expense, 0),
    accountInfo: () => personAccount.lastName + ' ' + personAccount.firstName,
    addIncome: (income) => {
        personAccount.incomes.push(income);
        return personAccount.incomes;
    },
    addExpense: (expense) => {
        personAccount.expenses.push(expense)
        return personAccount.expenses;
    },
    accountBalance: () => personAccount.totalIncome() - personAccount.totalExpense()
}
console.log(
    'Total income: ',
    personAccount.totalIncome(),
    '\nTotal expense: ',
    personAccount.totalExpense(),
    '\nAccount info: ',
    personAccount.accountInfo(),
    '\nAdd income: ',
    personAccount.addIncome({
        income: 100000,
        description: 'Thieves'
    }),
    '\nAdd expense: ',
    personAccount.addExpense({
        expense: 4000,
        description: 'Buy motor'
    }),
    '\nAccount balance: ',
    personAccount.accountBalance()
);
//2
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

//Id generator
function getRandom(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}
function getRangesRandom(...range) {
    const randomRange = range[getRandom(range.length - 1, 0)];
    return getRandom(randomRange.max, randomRange.min);
}
function genId(n) {
    const _id = String.fromCharCode(
        ...Array.from(
            { length: n },
            () => getRangesRandom(
                {
                    min: '0'.charCodeAt(0),
                    max: '9'.charCodeAt(0)
                },
                {
                    min: 'a'.charCodeAt(0),
                    max: 'z'.charCodeAt(0)
                }
            )
        )
    );
    if (users.find(u => u._id == _id)) genId(n);
    else return _id;
}
//2.a
function signUp(user) {
    if (!users.find(u => u.email == user.email || u.username == user.username)) {
        user = Object.assign(user, {
            _id: genId(6),
            createdAt: new Date().toLocaleString(),
            isLoggedIn: false,
        });
        users.push(user);
        return user;
    }
    return 'You has already an account!';
}
console.log(
    'Sign up: ',
    signUp({
        username: 'VyVu',
        email: 'vyvu@vyvu.com',
        password: '123333',
    })
);
//2.b
function signIn({ username, email, password }) {
    const user = users.find(u => (u.username == username || u.email == email) && u.password == password);
    return user || 'Login failed!';
}
console.log(
    'Sign in: ',
    signIn({
        email: 'vyvu@vyvu.com',
        password: '123333',
    })
);
//3
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
//3.a
function rateProduct({ userId, rate }, product) {
    const userRate = product.ratings.find(r => r.userId == userId);
    if (userRate) {
        userRate.rate = rate;
    } else {
        product.ratings.push({
            user: userId,
            rate
        });
    }
    return product;
}
console.log(
    'User rate twice: ',
    rateProduct({
        userId: 'zwf8md',
        rate: 3.5
    }, products[0])
);

console.log(
    'User rate: ',
    rateProduct({
        userId: 'zwf8md',
        rate: 3.5
    }, products[2])
);

//3.b
function averageRating(product) {
    return product.ratings.reduce((res, { rate }) => res += rate, 0) / product.ratings.length;
}
console.log(
    'Average rating: ',
    averageRating(products[2])
);

//4
function likeProduct(userId, product) {
    if (product.likes.find(uid => uid == userId)) {
        product.likes = product.likes.filter(uid => uid != userId);
    } else {
        product.likes.push(userId);
    }
    return product;
}
console.log(
    'Like product: ',
    JSON.parse(JSON.stringify(likeProduct('n83msf', products[2])))
);
console.log(
    'Like product again: ',
    likeProduct('n83msf', products[2])
);

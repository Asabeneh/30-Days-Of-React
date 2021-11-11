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
//1
console.log(
    'Who has many skills?'
    ,
    Object.fromEntries(
        Object.entries(users).filter(([name, info]) => info.skills.length > 1)
    )
);
//2
console.log(
    'Users having greater than equal to 50 points: '
    ,
    Object.fromEntries(
        Object.entries(users).filter(([name, info]) => info.points >= 50)
    )
);
//3
console.log(
    'Who are MERN stack developer?'
    ,
    Object.fromEntries(
        Object.entries(users)
            .filter(
                ([name, info]) =>
                    info.skills.includes('MongoDB', 'Express', 'Node', 'React')
            )
    )
);
//4
const deepCopyUser = JSON.parse(JSON.stringify(users));
deepCopyUser.VyVu = {
    email: 'vutrivi99@gmail.com',
    skills: ['Pascal'],
    age: 20,
    isLoggedIn: false,
    points: 40
}
console.log('My profile added in: ', deepCopyUser, '\nNot in origin users object: ', users);
//5
console.log(
    'All deepkeys in users object: ',
    Object.entries(users).reduce(
        (res, [key, val]) => {
            res.push(...Object.keys(val).map(vKey => key + '.' + vKey));
            return res;
        }
        , []
    )
)
console.log(
    'All keys in users object: ',
    Object.keys(users)
)
//6
console.log(
    'All values in users object: ',
    Object.values(users)
)
//7

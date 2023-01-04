// setInterval

// - In JavaScript, we use setInterval higher order function to do some 
// activity continuously with in some interval of time. The setInterval 
// global method take a callback function and a duration as a parameter. 
// The duration is in milliseconds and the callback will be always called in that interval of time.
let sayHello = ()=>{
    console.log('Hello');
}
setInterval(sayHello, 2000); // it prints hello every 2 seconds

// setTimeout

// In JavaScript, we use setTimeout higher order function to execute some 
// action at some time in the future. The setTimeout global method take a 
// callback function and a duration as a parameter. The duration is in milliseconds 
// and the callback wait for that amount of time.
let sayGoodBye = ()=>{
    console.log('Goodbye');
}
setTimeout(sayGoodBye, 3000);

// Destructuring when we loop through arrays
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
];
for (const [country, city] of countries) {
    console.log(country, city);
}

// Destructuring during loop through an array
const languages = [
    { lang: 'English', count: 91 },
    { lang: 'French', count: 45 },
    { lang: 'Arabic', count: 25 },
    { lang: 'Spanish', count: 24 },
    { lang: 'Russian', count: 9 },
    { lang: 'Portuguese', count: 9 },
    { lang: 'Dutch', count: 8 },
    { lang: 'German', count: 7 },
    { lang: 'Chinese', count: 5 },
    { lang: 'Swahili', count: 4 },
    { lang: 'Serbian', count: 4 },
]
for (const { lang, count } of languages) {
    console.log(`The ${lang} is spoken in ${count} countries.`)
}

// Destructuring function parameter
const rectangle = { width: 20, height: 10 };
const calcualteArea = ({ width, height }) => width * height;
const calculatePerimeter = ({ width, height } = 2 * (width + height));


// Spread operator to copy object
// We can copy an object using a spread operator
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
}

const copiedUser = { ...user }
console.log(copiedUser)


// Modifying or changing the object while copying
const users = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
}

const copiedUsers = { ...user, title: 'instructor' }
console.log(copiedUser)
// {name: "Asabeneh", title: "instructor", country: "Finland", city: "Helsinki"}
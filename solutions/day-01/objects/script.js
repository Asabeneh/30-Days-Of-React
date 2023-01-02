// Object Methods

// Object assign
// - copy an object without modifying the original
const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki',
    },
    getPersonInfo: function () {
        return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
}
// target the new object {}, and the source is the original object 'person'
const copyObject = Object.assign({}, person);
console.log(copyObject);

// Object keys
// - get the keys or properties of an object as an array
const keys = Object.keys(copyObject);
console.log(keys);

// Object values
// - get values of an object as an array
const values = Object.values(copyObject);
console.log(values);

//Object entries
// - get keys and values of object as an array
const entries = Object.entries(copyObject);
console.log(entries);

// hasOwnProperty
// - check to see if object has a key or property that exists
console.log(copyObject.hasOwnProperty('age')); // true
console.log(copyObject.hasOwnProperty('book')); // false
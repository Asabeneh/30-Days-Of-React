// Exercises: Level 1

// 1. Create an empty object called dog
const dog = {}

// 2. Print the the dog object on the console
console.log(dog)

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Maze'
dog.legs = '4'
dog.color = 'Black'
dog.age = '2 years'
dog.bark = function () {
    return 'woof woof'
}

// 4. Get name, legs, color, age and bark value from the dog object

const name = dog.name
const legs = dog.legs
const color = dog.color
const age = dog.age
const bark = dog.bark();


// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'Mixed'
dog.getDogInfo = function () {
    console.log(`
    dog.name = ${this.name}
    dog.legs =  ${this.legs}
    dog.color = ${this.color}
    dog.age = ${this.age}
    dog.bark = ${this.bark()}
    `)
}

dog.getDogInfo()
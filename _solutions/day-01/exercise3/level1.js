// Exercise 3 - Level 1

const dog = {}

dog.name = 'Montgomery'
dog.legs = 4
dog.colour = 'brown'
dog.age = 2

dog.bark = function () {
    console.log('woof woof')
}

dog.breed = 'Pug'
dog.getDog = function () {
    console.log(dog)
}

console.log(dog.name, dog.legs, dog.colour, dog.age, dog.breed)

dog.getDog()
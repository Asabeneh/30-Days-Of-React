//1
const dog = {};
//2
console.log(dog);
//3
dog.name = 'Scoo';
dog.legs = 4;
dog.color = 'Black';
dog.age = 3;
dog.bark = () => 'woof woof';
//4
console.log(
    'Name: '.concat(dog.name),
    'Legs: '.concat(dog.legs),
    'Color: '.concat(dog.color),
    'Age: '.concat(dog.age),
    'Bark: '.concat(dog.bark),
    'Bark(): '.concat(dog.bark())
);
//5
dog.breed = 'Fox';
dog.getDogInfo = () =>
    'Name: '.concat(dog.name) +
    '\nLegs: '.concat(dog.legs) +
    '\nColor: '.concat(dog.color) +
    '\nBreed: '.concat(dog.breed) +
    'Age: '.concat(dog.age)
console.log(dog);

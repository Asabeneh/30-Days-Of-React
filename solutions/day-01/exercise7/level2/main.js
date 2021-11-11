class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    eat(...animals) {
        console.log('nom nom nom... ' + animals.join(', '));
    }
}
class Dog extends Animal {
    constructor(name, age, color, breed) {
        super(name, age, color, 4);
        this.breed = breed;
    }
    bark() {
        console.log('woof woof');
    }
    eat(...animals) {
        this.bark();
        super.eat(...animals);
    }
}
const myDog = new Dog('Scoo', 7, 'Brown', 'Fox');
myDog.eat('meat');

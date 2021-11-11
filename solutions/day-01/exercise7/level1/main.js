//1
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
//2
class Dog extends Animal {
    constructor(name, age, color, breed) {
        super(name, age, color, 4);
        this.breed = breed;
    }
    bark() {
        console.log('woof woof');
    }

}
class Cat extends Animal {
    constructor(name, age, color, breed) {
        super(name, age, color, 4);
        this.breed = breed;
    }
    miaow() {
        console.log('uwu uwu');
    }
}
const myDog = new Dog('Scoo', 7, 'Brown', 'Fox');
myDog.bark();
myDog.eat('meat', 'apple');

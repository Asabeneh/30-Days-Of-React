"use strict";
class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    GetName() {
        return this.name;
    }
    GetAge() {
        return this.age;
    }
    GetColor() {
        return this.color;
    }
    GetLegs() {
        return this.legs;
    }
}
class Dog extends Animal {
    constructor(name, age, color, breed) {
        super(name, age, color, 4);
        this.breed = breed;
    }
    GetBreed() {
        return this.breed;
    }
    Bark() {
        console.log("woof");
    }
}
const john = new Dog('john', 10, "blue", "rotweiler");
john.Bark();

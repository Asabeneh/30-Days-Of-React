"use strict";
class Car {
    constructor(name, age, color, wheels) {
        this._name = name;
        this._age = age;
        this._color = color;
        this._wheels = wheels;
    }
    makeSound() {
        console.log("wroom");
    }
}
class Mazda extends Car {
    constructor(name, age, color, breed) {
        super(name, age, color, 4);
        this._breed = breed;
    }
    makeSound() {
        console.log("brap brap");
    }
}
const jim = new Mazda('john', 10, "blue", "rotweiler");
const jay = new Car('jay', 10, "green", 4);
jim.makeSound();
jay.makeSound();

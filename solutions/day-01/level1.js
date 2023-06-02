"use strict";
class Animal {
    constructor(name, age, color, legs) {
        this._name = name;
        this._age = age;
        this._color = color;
        this._legs = legs;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get legs() {
        return this._legs;
    }
    set legs(value) {
        this._legs = value;
    }
}
class Dog extends Animal {
    constructor(name, age, color, breed) {
        super(name, age, color, 4);
        this.breed = breed;
    }
    bark() {
        console.log("woof");
    }
}
const john = new Dog('john', 10, "blue", "rotweiler");
var dog = new Dog('dog', 10, "green", "hi");
dog.name = 'may';
console.log(dog.name);
john.bark();

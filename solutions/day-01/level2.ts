
class Car {
    _name: string;
    _age: number;
    _color: string;
    _wheels: number;
    constructor(name: string, age: number, color: string, wheels: number) {
        this._name = name;
        this._age = age;
        this._color = color;
        this._wheels = wheels;
    }
    makeSound(): void {
        console.log("wroom")
    }
}

class Mazda extends Car {
    _breed: string;
    constructor(name: string, age: number, color: string, breed: string) {
        super(name, age, color, 4);
        this._breed = breed;
    }
    makeSound(): void {
        console.log("brap brap")
    }
}

const jim = new Mazda('john', 10, "blue", "rotweiler");
const jay = new Car('jay', 10, "green", 4);

jim.makeSound();
jay.makeSound();
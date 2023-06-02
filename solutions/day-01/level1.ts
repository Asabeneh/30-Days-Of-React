
class Animal {
    constructor(name: string, age: number, color: string, legs: number) {
        this._name = name;
        this._age = age;
        this._color = color;
        this._legs = legs;
    }

    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    private _age: number;
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }

    private _color: string;
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }

    private _legs: number;
    public get legs(): number {
        return this._legs;
    }
    public set legs(value: number) {
        this._legs = value;
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, age: number, color: string, breed: string) {
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
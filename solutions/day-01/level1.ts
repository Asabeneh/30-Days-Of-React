
class Animal {
    name: string;
    age: number;
    color: string;
    legs: number;
    constructor(name: string, age: number, color: string, legs: number) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    GetName() : string {
        return this.name;
    }
    GetAge() : number {
        return this.age;
    }
    GetColor() : string {
        return this.color;
    }
    GetLegs() : number {
        return this.legs;
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, age: number, color: string, breed: string) {
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
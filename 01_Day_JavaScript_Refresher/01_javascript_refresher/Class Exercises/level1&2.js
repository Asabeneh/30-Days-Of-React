class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }
    
    // getter's and setter are quite trivial so decided not to make them for this refresher
    
    info() {
        return `The animal's name is ${this.name}`;
    }
}

class Dog extends Animal {
    constructor(name, age, color) {
        super(name, age, color, 4);
    }

    info() {
        return `The dog's name is ${this.name}`;
    }
}
// Cat and dog are also very similar
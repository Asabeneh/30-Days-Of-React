// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
    constructor(names,age,color,legs){
        this.names = names;
        this.age = age;
        this.color = color;
        this.legs = legs
    }
    get animalName(){
        return this.names;
    }

    set newName(name){
        this.names = name;
    }
    
}

// Create a Dog and Cat child class from the Animal Class.
// Override the method you create in Animal class
class Dog extends Animal{
    constructor(names,age,color,legs, type = 'Dog'){
    super(names,age,color,legs)
    this.type = type
    }
}
class Cat extends Animal{
    constructor(names,age,color,legs, type = 'Cat'){
    super(names,age,color,legs)
    this.type = type
    }
}


let dog = new Dog('Spot', 3, 'brown', 4); // create new instance of dog using name, age, color, legs
dog.newName = 'Carl' // change name 
let cat = new Cat('Garfield', 7, 'Orange', 3);
cat.newName = 'Chloe'
console.log(dog, `The dogs name is ` + dog.animalName); //  display dog object and name of dog
console.log(cat, `The cats name is ` + cat.animalName);
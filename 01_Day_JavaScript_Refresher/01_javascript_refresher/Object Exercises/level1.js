const dog = {};
console.log(dog);
dog.name = "name";
dog.legs = 4;
dog.age = 3;
dog.bark = function() {
    return "woof woof";
}
for (const key in dog) {
    if (typeof dog[key] == 'function') {
        console.log(key, dog[key]());
    } else {
        console.log(key, dog[key]);
    }
}
dog.breed = "labrador";
dog.getDogInfo = function() {
    return `This is ${this.name} and he is ${this.age} years old`;
}
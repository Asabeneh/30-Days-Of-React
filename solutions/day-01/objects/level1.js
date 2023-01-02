// Create an empty object called dog
const dog = {};
// Print the the dog object on the console
console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Chester';
dog.legs = 4;
dog.color = 'Brown';
dog.bark = ()=>{
    return `'woof woof'`;
};
// Get name, legs, color, age and bark value from the dog object
console.log(dog.name,dog.legs,dog.color,dog.bark());
// Set new properties the dog object: breed, getDogInfo
dog.breed = 'Corgi';
dog.getDogInfo = `${dog.name} is a ${dog.color} ${dog.breed} with ${dog.legs} legs and says ${dog.bark()}!`;



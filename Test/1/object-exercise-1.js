// Exercises: Level 1

// Create an empty object called dog
const dog = {}
// Print the the dog object on the console
console.log(dog)
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Buddy'
dog.legs = 4
dog.color = 'Golden'
dog.age = 3
// Get name, legs, color, age and bark value from the dog object
console.log(dog.name) // Output: Buddy
console.log(dog.legs) // Output: 4
console.log(dog.color) // Output: Golden
console.log(dog.age) // Output: 3
console.log(dog.bark()) // Output: Woof woof
// Set new properties the dog object: breed, getDogInfo
dog.breed = 'Labrador'
dog.getDogInfo = function() {
  return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Breed: ${this.breed}`
}
// Get the dogInfo from the dog object
console.log(dog.getDogInfo()) // Output: Name: Buddy, Age: 3, Color: Golden, Breed: Labrador
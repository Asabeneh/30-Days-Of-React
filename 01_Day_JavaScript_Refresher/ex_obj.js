console.log('Objects Exercises')

/*
Create an empty object called dog
Print the the dog object on the console
Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
Get name, legs, color, age and bark value from the dog object
Set new properties the dog object: breed, getDogInfo
*/

const dog = {}
console.log(dog)

dog.name='Dog'
dog.color='Brown'
dog.legs=4
dog.age=5
dog.bark=function () {
    console.log('woof woof!')
}
dog.breed='French'
dog.getDogInfo = function () {
    console.log('Name: '+dog.name)
    console.log('Breed: '+dog.breed)
    console.log('Age: '+dog.age)
    console.log('Color: '+dog.color)
    console.log('Legs: '+dog.legs)    
}
dog.getDogInfo()
console.log('Voice!')
dog.bark()




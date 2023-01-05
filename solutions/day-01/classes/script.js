// JS is an object oriented programming language
// Class is like an object constructor => 'blueprint' for creating objects

// with a class blueprint we can create many instances of objects and not have to rewrite code 

//define class example
class Person {
    // class constructor used to pass different properties for the class
    constructor(fName, lName, age, country = 'U.S.A', city = 'Austin'){ // can set default values for props if none are entered
        //this refers to the Person class object
        //console.log(this); // Person {}
        this.fName = fName; // creates a new key for the object
        this.lName = lName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.score = 0; // can set intial values for properties
        this.skills = [];
    }
    getFullName() { // cant create Class methods inside of the class object
        const fullName = `${this.fName} ${this.lName}`;
        return fullName;
    }
    get getScore(){ // use getter to access value from the object
        return this.score;
    }
    set setSkills(skills){ // use setter to modify value of property
        this.skills.push(skills)
    }
    setScore(score){ // or create a function to modify a value of property 
        this.score += score 
    }
    static sayHello(){ // static keyword defines a static method for a class, they are called on the class itself.
        return 'Hello';
    }
}

// can use inheritance to access properties and methods from a parent class
// reduces repetition of code 
class Student extends Person{
    // in order to customize the Student class methods or add extra properties, need to use constructor here as well
    constructor(fName, lName, age, country = 'U.S.A', city = 'Austin', gender = 'Male'){ // here we add gender, Parent class does not have this
        //need to call super function and pass it all the properties of the Parent class
        super(fName, lName, age, country, city);
        this.gender = gender;
    }
    get getGender(){
        return this.gender;
    }
    static whoAmI(){
        console.log('I am the child of the Person class');
    }
}

//instantiate a class
const person1 = new Person('Jacob', 'Hart', 23, 'Italy', 'Rome'); // pass in values for properties of firstname and lastname, age, country, city

console.log(person1);
console.log(person1.getFullName());
person1.setScore(2);
person1.setSkills = 'HTML'
person1.setSkills = 'JavaScript'
person1.setSkills = 'CSS'
console.log(person1.score, person1.skills)
console.log(person1.getScore) // retrieve score using getter method
console.log(Person.sayHello()) // call the static function on the class and NOT on the instance of the class

const student1 = new Student('Billy', 'Bob', 18, 'France', 'Paris')
console.log(student1);
Student.whoAmI();
student1.setScore(30);
student1.setSkills = 'Python'
console.log(student1.getScore, student1.skills)
const student2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
console.log(student2.getFullName() + ': '+ student2.getGender) // gave gender as Female
console.log(student1.getFullName() + ': '+ student1.getGender) // Default to Male since gender never given